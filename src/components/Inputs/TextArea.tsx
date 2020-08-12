import React, { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './textarea-styled'

type Props = {
  rows?: number
  cols?: number
} & InputHTMLAttributes<HTMLTextAreaElement>

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ ...inputProps }, ref) => {
    return <S.TextArea ref={ref} {...inputProps} />
  }
)

export default TextArea
