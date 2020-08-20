import styled from 'styled-components'
import { mediaQueries } from '@/assets/theme/media'

export const BookAMeetingTitle = styled.h3`
  font-size:28px;
  text-align:center;
  ${mediaQueries.isTabletOrDesktop} {
    text-align:left;
  }
`;

export const BookAMeeting = styled.section`
  margin: 50px 0;
  display:flex;
  flex-direction:column;
  border-top:1px dashed #333;
  padding:20px;
  border:1px dashed #777;
  
  ${mediaQueries.isTabletOrDesktop} {
    flex-direction:row;
    padding:30px;
  }
`
export const MeetingWithWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-bottom:20px;


  ${mediaQueries.isTabletOrDesktop} {
    margin-right:40px;
    margin-bottom:0px;
    width:50%;

  }
`

export const SelectWrapper = styled.div`
  min-width:280px;
  margin-top:20px;
  width:100%;
`


export const FormWrapper = styled.div`

  ${mediaQueries.isTabletOrDesktop} {
    width:50%;
  }
`

export const FormHead = styled.div`
  height: 50px;
  margin-bottom:20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchTime = styled.span`
  color: blue;
  text-decoration:underline;
  cursor:pointer;
  margin-left:10px;
`