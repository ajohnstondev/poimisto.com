import styled from 'styled-components'

import { mediaQueries } from '@/assets/theme/media'

export const ChooseTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc((60px + 4px) * 5);
  margin-left: auto;
  margin-right: auto;

  > * {
    max-width: 60px;
    margin: 2px;
  }

  ${mediaQueries.isTabletOrDesktop} {
    width: calc((70px + 4px) * 5);

    > * {
      max-width: 70px;
      margin: 2px;
    }
  }
`
