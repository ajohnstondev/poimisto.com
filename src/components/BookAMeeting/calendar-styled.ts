import styled, { css } from 'styled-components'

import { mediaQueries } from '@/assets/theme/media'

export const FormHead = styled.div`
  height: 50px;
  margin-bottom:20px;
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  svg {
    cursor: pointer;
  }
  text-align:center;
`;


export const TimeRow = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
  text-align:center;

`

export const DayOfAWeek = styled.div`
 
  margin: 2px;

  ${mediaQueries.isTabletOrDesktop} {
 
  }
`

type TimeCellProps = {
  available: boolean
}

export const TimeCell = styled.div<TimeCellProps>`
  padding: 6px;
  ${props =>
    props.available
      ? css`
          color: ${props => props.theme.colors.brandDark};
          background-color: ${props => props.theme.colors.brandLight};
          cursor: pointer;
          &:hover {
            background-color:${props => props.theme.colors.brandPrimary};
            color: #fff;
          }
        `
      : css`
          color: #999;
          background-color: #f3f3f3;
        `}
  text-align: center;

  ${mediaQueries.isTabletOrDesktop} {

  }
`
