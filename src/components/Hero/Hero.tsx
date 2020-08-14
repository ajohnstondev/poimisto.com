import React from 'react'

import * as S from './styled'

const HomepageContent = (props : { children: any}) => {
  return (
    <S.Hero>
      <div>
        {props.children}
      </div>
    </S.Hero>

  )
}

export default HomepageContent
