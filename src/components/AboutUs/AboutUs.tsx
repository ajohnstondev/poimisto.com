import React from 'react'


import { ABOUT_ITEMS } from './constants'
import * as S from './styled'

const AboutUs = () => {

  return (
    <S.AboutUs>
      <S.AboutItems>
        {ABOUT_ITEMS.map(item => (
          <S.AboutItem key={item.id}>
            <div>{item.icon}</div>
            <div>
              <h2>{item.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
            </div>
          </S.AboutItem>
        ))}
      </S.AboutItems>
    </S.AboutUs>
  )
}


export default AboutUs
