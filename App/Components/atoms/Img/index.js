import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const StyledImg = styled.img`
  position: relative;
  display: block;
  width: auto;
  max-height: 120px;
`

const Img = ({ src }) => (
  <StyledImg src={`https://plissee-jalousien-rollos.de/media/${src}`} />
)

export default Img

Img.propTypes = {
  src: string,
}

Img.defaultProps = {
  src: '',
}
