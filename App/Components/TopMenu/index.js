import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import Categories from '../Categories'
import Logo from '../../Images/sinus_logo.png'
import { media } from '../atoms/Media'
import * as palette from '../../variables'

const Wrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: auto;
  padding: 10px;
  text-align: center;
  align-items: center;
`

const LogoImg = styled.img`
  width: auto;
  max-height: 60px;
`

const Cell = styled.div`
  &:nth-child(1) {
    flex: 0 0 100%;
    ${media.desktop`
      flex: 0 0 auto;
    `}
  }
  &:nth-child(2) {
    flex: 0 0 100%;
    ${media.desktop`
      flex: 1;
    `}
  }
`

const MenuItems = styled.div`
  width: 100%;
   ${media.desktop`
     width: calc(100% - 135px)
  `}
`

const Close = styled.div`
  position: absolute;
  display: flex;
  top: 30px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid ${palette.orange};
  color: ${palette.orange};
  border-radius: 100%;
  z-index: 1;
`

const TopMenu = ({ handleFirstLevel, firstLevelState }) => (
  <Wrap>
    <Cell>
      <LogoImg src={Logo} />
      {
        firstLevelState &&
        <Close
          onClick={() => handleFirstLevel('')}
        > x
        </Close>
      }
    </Cell>
    <Cell>
      <MenuItems>
        <Categories handleFirstLevel={handleFirstLevel} />
      </MenuItems>
    </Cell>
  </Wrap>
)

TopMenu.propTypes = {
  handleFirstLevel: func,
  firstLevelState: func,
}

TopMenu.defaultProps = {
  handleFirstLevel: func,
  firstLevelState: func,
}

export default TopMenu
