import styled from 'styled-components'

import { mediaQueries } from '@/assets/theme/media'

export const Footer = styled.footer`
  background-color: #323b40;
  margin-top: 30px;
  padding-top: 15px;
  color: #fff;
`

export const FooterMainContent = styled.div`
  ${mediaQueries.isTabletOrDesktop} {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;

    > * {
      flex: 1;
    }

    > *:nth-child(1) {
      margin-top: -30px;
    }
  }
`

export const FooterInfo = styled.div`
  text-align: center;

  ul {
    margin-top: -25px;
    margin-bottom: 40px;
  }

  li {
    margin-bottom: 5px;
  }
`

export const FooterContact = styled.div`
  text-align: center;
  margin-bottom: 15px;

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  ul {
    margin-bottom: 35px;
  }

  li {
    margin-bottom: 5px;
  }
`

export const FooterNav = styled.nav`
  text-align: center;
  margin-bottom: 30px;
`

export const FooterNavItem = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
  transition: color 0.3s;

  &:hover {
    color: #0ebac7;
  }
`

export const SocialMedia = styled.footer`
  background: #323b40;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  margin-left: -33px;
  div.social-media-links {
    flex: 95%;
    max-width: 1225px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    padding-bottom: 12px;
    text-align: center;
    a {
      border-bottom: 0px solid rgba(0, 0, 0, 0.95);
      border-radius: 4px;
      box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0), 0 6px 8px rgba(0, 0, 0, 0),
        0 24px 24px rgba(0, 0, 0, 0), 0 36px 36px rgba(0, 0, 0, 0),
        0 64px 64px rgba(0, 0, 0, 0), 0 64px 128px rgba(0, 0, 0, 0),
        0 120px 0 rgba(0, 0, 0, 0), 0 86px 8px 6px rgba(0, 0, 0, 0);
      display: inline-block;
      height: 30px;
      padding: 20px;
      position: relative;
      transition: 0.2s ease-in;
      width: 30px;
      svg {
        left: 20px;
        position: absolute;
        top: 20px;
        height: 30px;
        width: 30px;
        &.glow {
          path,
          circle {
            fill: rgba(0, 0, 0, 0);
          }
        }
        path,
        circle {
          fill: #0096a1;
          transition: 0.2s ease-in;
        }
      }
    }
    a:hover {
      transform: translateY(-4px);
      box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.1),
        0 6px 8px rgba(0, 0, 0, 0.05), 0 24px 24px rgba(0, 0, 0, 0.05),
        0 36px 36px rgba(0, 0, 0, 0.05), 0 64px 64px rgba(0, 0, 0, 0.15),
        0 64px 128px rgba(0, 0, 0, 0.15), 0 86px 8px 6px fadeout(#0ebac7, 75),
        0 83px 4px 0px fadeout(#0ebac7, 5);
      svg {
        &.glow {
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><f…ter id="filter"><feGaussianBlur stdDeviation="10" /></filter></svg>#filter');
          filter: blur(2px);
          path,
          circle {
            fill: fadeout(#0ebac7, 40);
          }
        }
        path,
        circle {
          fill: #0ebac7;
        }
      }
    }
  }
`

export const FooterLegal = styled.div`
  text-align: center;
  color: #aaa;
  padding-top: 5px;
  padding-bottom: 20px;
`
