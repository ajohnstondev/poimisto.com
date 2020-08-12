import React from 'react'

import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import BookAMeeting from '@/components/BookAMeeting'
import * as S from './styled'

const HomepageContent = () => {
  return (
    <>
      <S.Heading>
        We <em>help you to</em> build tech and data capabilities
      </S.Heading>
      <S.HomepageContent>
        <AboutUs />
        <div>
          <BookAMeeting />
          <ContactUs />
        </div>
      </S.HomepageContent>
    </>
  )
}

export default HomepageContent
