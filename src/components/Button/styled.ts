import styled, { css } from 'styled-components'

export type ButtonProps = {
  color: string
  variant: 'contained' | 'text'
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: 600;
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

  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0px 10px 20px rgba(120, 120, 120, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`
