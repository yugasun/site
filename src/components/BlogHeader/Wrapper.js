import styled from 'styled-components'

import { Overflow } from 'serverless-design-system'

export default styled(Overflow)`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  overflow-y: visible;

  @media screen and (max-width: 415px) {
    position: ${props => props.isNavbarActive ? "fixed" : "relative"};
  }
`
