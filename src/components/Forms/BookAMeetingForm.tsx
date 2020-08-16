import React from 'react'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'

import { Input, TextArea } from '@/components/Inputs'
import Button from '@/components/Button'
import * as S from './book-a-meeting-form'

type Props = {
  chosenDate: InstanceType<typeof Date>
  setDate: (date: InstanceType<typeof Date> | null) => void
}

type Inputs = {
  name: string
  email: string
  message: string
}

const BookAMeetingForm: React.FC<Props> = ({ chosenDate, setDate }) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit = handleSubmit(({ name, email, message }) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'book-a-meeting',
        name,
        email,
        message,
      }),
    })
      .then(() => {})
      .catch(error => console.error(error))
  })

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

// TODO: Add to utils
function encode(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default BookAMeetingForm
