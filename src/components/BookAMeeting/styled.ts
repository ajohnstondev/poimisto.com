import styled from 'styled-components'

export const BookAMeeting = styled.section`
  margin-bottom: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

export const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 60px;
  text-align: center;
`

export const MeetingWithWrapper = styled.div`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;

  > h5:first-child {
    font-size: 16px;
    margin-bottom: 10px;
  }
`

export const MeetingWith = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  padding-top: 15px;
  padding-bottom: 15px;

  svg {
    margin-right: 15px;
  }

  h4 {
    font-size: 18px;
  }
`

export const Content = styled.div`
  display: flex;

  > * {
    flex: 1;
    text-align: center;
  }
`
