import React from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'
import { media } from '../atoms/Media'

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background: lightblue;
  padding: 0 20px;
  text-align: center;
`

const Cell = styled.div`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  justify-content: center;
  ${media.desktop`
    flex: 0 0 auto;
    justify-content: left;
  `}
`

const CatImg = styled.img`
  width: auto;
  height: 44px;
`

const CatName = styled.span`
  width:auto;
  height:auto;
  padding: 0 0 0 10px;
`

const Categories = ({ handleOpenNav }) => (
  <Wrap>
    <Cell onClick={handleOpenNav}>
      <CatImg src="https://plissee-jalousien-rollos.de/media/icons/menu/MainNavIcons_plissee.png" />
      <CatName>Plissee</CatName>
    </Cell>
    <Cell onClick={handleOpenNav}>
      <CatImg src="https://plissee-jalousien-rollos.de/media/icons/menu/MainNavIcons_rollo.png" />
      <CatName>Rollos</CatName>
    </Cell>
  </Wrap>
)

Categories.propTypes = {
  handleOpenNav: func,
}

Categories.defaultProps = {
  handleOpenNav: func,
}

export default Categories

