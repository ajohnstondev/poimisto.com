import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'

import { mediaQueries } from '@/assets/themes/media'

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Header = styled.header`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled.div``

export const Logo = styled.div`
  font-family: 'Coda', sans-serif;
  letter-spacing: 2px;
  font-weight: 400;
  background-color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  h1 {
    color: #fff;
  }

  svg {
    margin-right: -10px;
  }
`

export const Menu = styled(MdMenu).attrs(() => ({
  size: 36,
}))`
  ${mediaQueries.isTabletOrDesktop} {
    display: none;
  }
`

export const Nav = styled.nav`
  display: none;

  ${mediaQueries.isTabletOrDesktop} {
    display: flex;
  }
`

export const NavItem = styled.div`
  font-family: 'Code', sans-serif;
  font-weight: 600;
  margin-left: 20px;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
