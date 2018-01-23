import React, { Component } from 'react'
import styled from 'styled-components'
import { media } from '../atoms/Media'
import TopMenu from '../TopMenu'
import Categories from '../Categories'
import Menu from '../Menu'
import * as palette from '../../variables.js'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 80px;
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

export default class Navigation extends Component {
  state = {
    openNav: false,
    firstLevel: '',
    secondLevel: '',
    // active: false,
  }

  handleOpenNav = () => {
    this.setState(prevstate =>
      ({ openNav: !prevstate.openNav }))
  }

  handleFirstLevel = (id) => {
    this.setState(prevState => ({
        //if same then reset otherwise assign new id
        firstLevel: prevState.firstLevel === id ? false : id,
    }))
  }

  handleSecondLevel = (id) => {
    this.setState(prevState => ({
      //if same then reset otherwise assign new id
      secondLevel: prevState.secondLevel === id ? false : id,
      // active: true
    }))
  }

  render() {
    const menuItems = [
      {
        id: 1,
        name: 'Art',
        subItems: [
          { id: 1, name: 'Plissee nach Maß' },
          { id: 2, name: 'Cosimo' },
          { id: 5, name: 'Wabenplissee' }
        ]
      },
      {
        id: 2,
        name: 'Farbe',
        subItems: [
          { id: 1, name: 'Plissee nach Maß' },
          { id: 2, name: 'Cosimo' },
          { id: 3, name: 'Cosiflor' },
          { id: 4, name: 'Decomatic' },
          { id: 5, name: 'Wabenplissee' }
        ]
      },
      {
        id: 3,
        name: 'Raum',
        subItems: [
          { id: 1, name: 'Plissee nach Maß' },
          { id: 2, name: 'Cosimo' }
        ]
      },
      {
        id: 4,
        name: 'Eigenshaft',
        subItems: [
          { id: 1, name: 'Plissee nach Maß' },
          { id: 2, name: 'Cosimo' }
        ]
      },
      {
        id: 5,
        name: 'Konfigurator',
        subItems: [
          { id: 1, name: 'Plissee nach Maß' },
          { id: 2, name: 'Cosimo' }
        ]
      },
    ]

    return(
      <Wrap>
        <Cell>
          <TopMenu
            handleOpenNav={this.handleOpenNav}
            openNav={this.state.openNav}
            handleFirstLevel={this.handleFirstLevel}
          />
        </Cell>
        <Cell>
          <Categories
            handleOpenNav={this.handleOpenNav}
            openNav={this.state.openNav}
            handleFirstLevel={this.handleFirstLevel}
          />
        </Cell>
        {
          this.state.openNav &&
          <Menu
            menuItems={menuItems}
            handleFirstLevel={this.handleFirstLevel}
            handleSecondLevel={this.handleSecondLevel}
            firstLevelState={this.state.firstLevel}
            secondLevelState={this.state.secondLevel}
          />
        }
      </Wrap>
    )
  }
}