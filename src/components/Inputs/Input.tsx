import React, { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './input-styled'

type Props = {} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({ ...inputProps }, ref) => {
  return <S.Input ref={ref} {...inputProps} />
})

export default Input
