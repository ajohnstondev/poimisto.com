import styled, { css } from 'styled-components'
import { MdMenu } from 'react-icons/md'

import { mediaQueries } from '@/assets/themes/media'
import { container } from '@/assets/themes/helpers'

type HeaderWrapperProps = {
  shadow: boolean
}

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  position: fixed;
  background-color: #fff;
  ${props =>
    props.shadow
      ? css`
          box-shadow: 0px 1px 50px 20px rgba(100, 100, 100, 0.15);
        `
      : ''};
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 999;
`

export const Header = styled.header`
  ${container}
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled.div``

export const Menu = styled(MdMenu).attrs(() => ({
  size: 36,
}))`
  z-index: 10000;
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
