import styled from 'styled-components'

export const ChooseMeetingTimeForm = styled.div``

export const ChooseWeek = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;

  svg {
    cursor: pointer;
  }

  > div {
    text-align: center;
  }
`

export const ChooseTime = styled.div`
  margin-top: 20px;
`

export const TimeRow = styled.div`
  display: flex;
  justify-content: center;
`

export const DayOfAWeek = styled.div`
  width: 70px;
  margin: 2px;
`

type TimeCellProps = {
  available: boolean
}

export const TimeCell = styled.div<TimeCellProps>`
  padding: 10px 15px;
  width: 70px;
  margin: 2px;
  border-radius: 6px;
  color: ${props => (props.available ? '#fff' : '#000')};
  background-color: ${props => (props.available ? '#60A917' : '#F5F5F5')};
  cursor: pointer;
`
