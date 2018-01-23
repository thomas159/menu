import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'
import Logo from '../../Images/sinus_logo.png'
import { media } from '../atoms/Media'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 20px;
  text-align: center;
`

const LogoImg = styled.img`
  width: auto;
  max-height: 80px;
`

const Hamburger = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 20px;
  right: 20px;
  background: papayawhip;
  ${media.desktop`
    display:none
  `}
`

const TopMenu = ({ handleOpenNav, openNav }) => (
  <Wrap>
    <LogoImg src={Logo} />
    <Hamburger onClick={handleOpenNav}>
      { openNav ? <div>bbjsadbsd</div> : <div>ddddadssad</div> }
    </Hamburger>
  </Wrap>
)

TopMenu.propTypes = {
  handleOpenNav: func,
  openNav: bool,
}

TopMenu.defaultProps = {
  handleOpenNav: func,
  openNav: bool,
}

export default TopMenu
