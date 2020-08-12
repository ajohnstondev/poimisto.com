import React from 'react'

import { ContactForm } from '@/components/Forms'
import * as S from './styled'

const ContactUs = () => {
  return (
    <S.ContactUs>
      <S.SectionTitle>Contact us</S.SectionTitle>
      <ContactForm />
    </S.ContactUs>
  )
}

export default ContactUs
