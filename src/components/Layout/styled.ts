import styled, { css, keyframes } from 'styled-components'
import { mediaQueries } from '@/assets/theme/media'


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${mediaQueries.isTabletOrDesktop} {
  }
`


type HeaderWrapperProps = {
  shadow: boolean
}
/*
  This does not behave nicely when mobile navigation is opened. Refactor mobile nav to Layout layer later
*/
export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  padding: 0 20px;
  position: fixed;
  z-index:100;
  height: 120px;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0;
  background: rgba(255, 255, 255, 0);
  transition: box-shadow 0.3s ease-out, height 0.3s ease-out;
  
  ${props =>
    props.shadow
      ? css`
          height: 70px;
          box-shadow: 0px 1px 50px 20px rgba(100, 100, 100, 0.15);
          background: rgba(255, 255, 255, 1)

        `
      : ''};
`

export const PageWrapper = styled.div`
  padding:0 20px;
  margin-top: 100px;

`
export const FooterWrapper = styled.div`
  padding:0 20px;
  background-color: #323b40;
  margin-top: 30px;
  color:#fff;
`
export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width:1200px;
  height:100%;
`;

type MainContentProps = {
  center?: boolean
}

export const MainContent = styled.main<MainContentProps>`
  flex: 1;
  ${props =>
    props.center
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ''}
`
