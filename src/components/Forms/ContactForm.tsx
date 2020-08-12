import React from 'react'
import { useForm } from 'react-hook-form'

import { Input, TextArea, Select } from '@/components/Inputs'
import Button from '@/components/Button'
import * as S from './contact-from-styled'

type Inputs = {
  email: string
  message: string
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit = handleSubmit(({ email, message }) => {
    console.log(email, message)
  })

  return (
    <S.ContactForm onSubmit={onSubmit}>
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
        rows={3}
      />
      <S.FormActions>
        <Select />
        <Button variant="contained" color="#0085fc" type="submit">
          Submit
        </Button>
      </S.FormActions>
    </S.ContactForm>
  )
}

export default ContactForm
