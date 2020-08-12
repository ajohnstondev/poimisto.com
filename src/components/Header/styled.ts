import styled from 'styled-components'

import { mediaQueries } from '@/assets/themes/media'

export const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;

  ${mediaQueries.isTabletOrDesktop} {
    padding-left: 15%;
    padding-right: 15%;
  }
`

export const LogoWrapper = styled.div``

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
