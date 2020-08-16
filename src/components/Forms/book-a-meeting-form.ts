import styled from 'styled-components'

export const BookAMeetingFormWrapper = styled.div`
  > div:first-child {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    > * {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
`

export const SwitchTime = styled.button`
  background-color: transparent;
  color: blue;
  font-weight: bold;
  cursor: pointer;
`

export const BookAMeetingForm = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 15px;
  }
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;

  /* TO FIX */
  button {
    padding: 10px 50px;
  }
`
