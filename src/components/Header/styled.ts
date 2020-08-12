import styled from 'styled-components'

import { mediaQueries } from '@/assets/themes/media'

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
`

export const Header = styled.header`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1225px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQueries.isTabletOrDesktop} {
    padding-left: 15%;
    padding-right: 15%;
  }
`

export const LogoWrapper = styled.div``

export const Logo = styled.div`
  font-family: 'Coda', sans-serif;
  font-weight: 400;
  background-color: orange;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  svg {
    margin-right: -10px;
  }
`

export const Nav = styled.nav`
  display: flex;
`

export const NavItem = styled.div`
  font-weight: 500;
  margin-left: 20px;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
