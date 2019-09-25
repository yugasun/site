import React from 'react'
import { Image } from 'serverless-design-system'
import styled from 'styled-components'

const ShadowyImage = styled(Image)`
  border-radius: 4px;
  box-shadow: 2px 30px 50px 0 rgba(0, 0, 0, 0.1);
`

const ImageWithShadow = ({ children, ...otherProps }) => (
  <ShadowyImage {...otherProps} />
)

export default ImageWithShadow
