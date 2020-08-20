import styled from 'styled-components'
import { animated } from 'react-spring'

export const AnimatedMobileNav = styled(animated.div)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`

export const MobileNavWrapper = styled.div`
  background-color: #323b40;
  height: 100%;
`

export const MobileNav = styled.nav`
  position: absolute;
  top: calc(50% - 20px);
  transform: translateY(-50%);
  left: 20px;
`

export const MobileNavItem = styled.div`
  color: #fff;
  font-size: 38px;
  margin-bottom: 20px;
`
