import styled from 'styled-components'

export const AboutUs = styled.section`

`

export const AboutItems = styled.div`
  margin-bottom:100px;
`

export const AboutItem = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  p {
    justify-content: center;
  }

  > *:first-child {
    flex-basis: 100px;
  }

  > *:last-child {
    flex: 1;
    margin-left: 25px;
  }

  margin-bottom: 40px;
`
