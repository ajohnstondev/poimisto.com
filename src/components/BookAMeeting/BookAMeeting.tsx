import React from 'react'
import { BsPerson, BsCalendar } from 'react-icons/bs'

import * as S from './styled'

const BookAMeeting = () => {
  return (
    <S.BookAMeeting>
      <S.SectionTitle>Book a Meeting</S.SectionTitle>
      <S.Content>
        <div>
          <BsPerson size={100} />
          <div>Name LastName</div>
        </div>
        <div>
          <BsCalendar size={100} />
        </div>
      </S.Content>
    </S.BookAMeeting>
  )
}

export default BookAMeeting
