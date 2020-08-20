import styled from 'styled-components'


export const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    > .field {
      margin-bottom: 20px;
    }
    input, textarea, button {
      width: 100%;
      display:block;
    }
    .error {
      margin-top:-20px;
      margin-bottom:20px;
      height:0px;
      color:red;
    }
    button {
      padding: 10px 50px;
    }
  }
`

