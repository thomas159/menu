import React from 'react'
import { array } from 'prop-types'
import styled from 'styled-components'
import Img from '../atoms/Img'
import { media } from '../atoms/Media'
import * as palette from '../../variables'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom:1px solid ${palette.border};
`

const Cell = styled.div`
  flex: 0 0 50%;
  ${media.desktop`
    flex: 0 0 25%;
  `}
`

const Label = styled.div`
  padding: 10px;
  text-align: center;
`

const ThirdLevel = ({ subItems }) => (
  <Wrap>
    {subItems.map(item =>
      <Cell>
        <Img src="arten/plissee_nach_mass.svg" />
        <Label>{item.name}</Label>
      </Cell>,
    )}
  </Wrap>
)

/* eslint-disable*/
ThirdLevel.propTypes = {
  subItems: array,
}

ThirdLevel.defaultProps = {
  subItems: array,
}

export default ThirdLevel
