import styled from 'styled-components'

import { mediaQueries } from '@/assets/theme/media'



export const Header = styled.header`
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



export const LogoWrapper = styled.div`
  z-index: 1000;
`;


export const HamburgerWrapper = styled.div`
  ${mediaQueries.isTabletOrDesktop} {
    display:none;
  }
`;

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
