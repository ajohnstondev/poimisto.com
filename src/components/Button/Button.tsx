import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styled'

type Props = {
  color: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  S.ButtonProps

const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
  return <S.Button {...buttonProps}>{children}</S.Button>
}

export default Button
