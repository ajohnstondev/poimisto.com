import React, { useRef, useEffect } from 'react'
import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'

import { Input, TextArea } from '@/components/Inputs'
import Button from '@/components/Button'
import encode from '@/utils/encode'
import * as S from './book-a-meeting-form'

type Props = {
  chosenDate: Date
  setDate: (date: Date | null) => void
}

type Inputs = {
  name: string
  email: string
  message: string
}

const BookAMeetingForm: React.FC<Props> = ({ chosenDate, setDate }) => {
  const { register, handleSubmit, formState } = useForm<Inputs>()
  const nameRef = useRef<HTMLInputElement | null>(null)
  // Focus on the first field
  useEffect(() => {
    nameRef.current?.focus()
  }, [nameRef.current])

  const onSubmit = handleSubmit(({ name, email, message }) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'book-a-meeting',
        data: chosenDate,
        name,
        email,
        message,
      }),
    })
      .then(() => navigate('/thank-you?form-name=book-a-meeting'))
      .catch(error => console.error(error))
  })

  if (formState.isSubmitting) {
    return <h1>Loading...</h1>
  }

  return (
    <S.BookAMeetingFormWrapper>
      <div>
        <h3>{format(chosenDate, 'dd.MM.yyyy HH:mm')}</h3>
        <S.SwitchTime onClick={() => setDate(null)}>switch time</S.SwitchTime>
      </div>
      <S.BookAMeetingForm
        name="book-a-meeting"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="form-name" value="book-a-meeting" />
        <Input
          ref={e => {
            register(e, { required: true })
            nameRef.current = e
          }}
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
          rows={3}
        />
        <S.FormActions>
          <Button variant="contained" color="#0085fc" type="submit">
            Submit
          </Button>
        </S.FormActions>
      </S.BookAMeetingForm>
    </S.BookAMeetingFormWrapper>
  )
}

export default BookAMeetingForm
