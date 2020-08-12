import styled, { css } from 'styled-components'

export type ButtonProps = {
  color: string
  variant: 'contained' | 'text'
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  ${props =>
    props.variant === 'contained'
      ? css`
          background-color: ${props.color};
          color: #fff;
          padding: 5px 10px;
          border-radius: 5px;
        `
      : ''}
  ${props =>
    props.variant === 'text'
      ? css`
          color: ${props.color};
        `
      : ''}
`
