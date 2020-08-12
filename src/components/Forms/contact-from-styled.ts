import styled from 'styled-components'

export const ContactForm = styled.form`
  > * {
    margin-bottom: 10px;
    width: 100%;
  }
`

export const FormActions = styled.div`
  display: flex;

  > *:first-child {
    flex: 1;
    margin-right: 15px;
  }

  > *:last-child {
    flex-basis: 150px;
  }
`
