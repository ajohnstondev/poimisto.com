import React, { useState } from 'react'
import { GoSmiley } from 'react-icons/go'

import { ChooseMeetingTimeForm, BookAMeetingForm } from '@/components/Forms'
import * as S from './styled'

const BookAMeeting = () => {
  const [date, setDate] = useState<Date | null>(null)

  let content: React.ReactElement

  if (date) {
    content = <BookAMeetingForm chosenDate={date} setDate={setDate} />
  } else {
    content = <ChooseMeetingTimeForm setDate={setDate} />
  }

  return (
    <S.BookAMeeting>
      <S.SectionTitle>Book a Meeting</S.SectionTitle>
      <S.MeetingWithWrapper>
        <h5>Book a meeting with:</h5>
        <S.MeetingWith>
          <GoSmiley size={32} />
          <h4>Santeri Salonen</h4>
        </S.MeetingWith>
      </S.MeetingWithWrapper>
      <S.Content>{content}</S.Content>
    </S.BookAMeeting>
  )
}

export default BookAMeeting
