import styled from 'styled-components'

import Button from '../Button'
const hexToRgbA = (hex, transparency) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join('')}`
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ','
    )},${transparency})`
  }
  throw new Error('Bad Hex')
}

const SecondaryButton = styled(Button)`
  background: ${({ background }) => background || 'transparent'};
  border-style: solid;
  border-width: ${({ borderWidth }) => borderWidth};
  border-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  &:hover {
    background: ${props =>
      props.disabled
        ? null
        : hexToRgbA(props.theme.colors.primaryColor, '0.1')};
  }
`

SecondaryButton.defaultProps = {
  borderWidth: '2px',
}

export default SecondaryButton
