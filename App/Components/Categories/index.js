import React from 'react'
import styled, { css } from 'styled-components'
import { func } from 'prop-types'
import { media } from '../atoms/Media'
import * as palette from '../../variables'

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  ${media.desktop`
    padding: 0 20px;
  `}
`

const InnerWrap = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
`

const Cell = styled.div`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 30px;
  ${media.desktop`
    flex: 0 0 auto;
    justify-content: left;
  `}
  &:hover {
    color: ${palette.orange};
  }
`

const CatCircle = styled.span`
width: 50px;
height: 50px;
border-radius: 50%;
${props => props.orange && css` border: 1px solid ${palette.orange};`}
${props => props.blue && css` border: 1px solid ${palette.blue}; `}
`

const CatImg = styled.img`
  width: auto;
  height: 44px;
`

const CatName = styled.span`
  width: auto;
  height: auto;
  padding: 0 0 0 10px;
`

const Categories = ({ handleFirstLevel }) => (
  <Wrap>
    <InnerWrap>
      <Cell onClick={() => handleFirstLevel('plissee')}>
        <CatCircle orange />
        {/* <CatImg src="https://plissee-jalousien-rollos.de/media/icons/menu/MainNavIcons_plissee.png" /> */}
        <CatName>Plissee</CatName>
      </Cell>
      <Cell onClick={() => handleFirstLevel('rollos')}>
        <CatCircle blue />
        {/* <CatImg src="https://plissee-jalousien-rollos.de/media/icons/menu/MainNavIcons_rollo.png" /> */}
        <CatName>Rollos</CatName>
      </Cell>
    </InnerWrap>
  </Wrap>
)

Categories.propTypes = {
  handleFirstLevel: func,
}

Categories.defaultProps = {
  handleFirstLevel: func,
}

export default Categories

