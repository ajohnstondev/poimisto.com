import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'

import { mediaQueries } from '@/assets/themes/media'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled.div``


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
    color: ${props => props.theme.colors.brandPrimary};
  }
`
