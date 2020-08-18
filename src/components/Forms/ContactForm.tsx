import React from 'react'
import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form'

import { Input, TextArea } from '@/components/Inputs'
import Button from '@/components/Button'
import encode from '@/utils/encode'
import * as S from './contact-form'

type Inputs = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const { register, handleSubmit, formState } = useForm<Inputs>()

  const onSubmit = handleSubmit(({ email, message }) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        email,
        message,
      }),
    })
      .then(() => navigate('/thank-you?form-name=contact'))
      .catch(error => console.error(error))
  })

  if (formState.isSubmitting) {
    return <h1>Loading...</h1>
  }

  return (
    <S.ContactForm
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Input
        ref={register({ required: true })}
        name="name"
        type="text"
        placeholder="Your name"
      />
      <Input
        ref={register({ required: true })}
        name="email"
        type="email"
        placeholder="Business email address"
      />
      <TextArea
        ref={register}
        name="message"
        placeholder="Your message"
        rows={6}
      />
      <S.FormActions>
        <Button variant="contained" color="#0085fc" type="submit">
          Submit
        </Button>
      </S.FormActions>
    </S.ContactForm>
  )
}

export default ContactForm
