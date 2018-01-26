import React, { Component } from 'react'
import styled from 'styled-components'
import { media } from '../atoms/Media'
import TopMenu from '../TopMenu'
import Menu from '../Menu'
import Container from '../atoms/Container'
import * as palette from '../../variables'
import menuItems from '../../const'

const Wrap = styled.nav`
  width: 100%;
  height: 80px;
`

export default class Navigation extends Component {
  state = {
    firstLevel: '',
    secondLevel: '',
    // active: false,
  }

  // handleOpenNav = () => {
  //   this.setState(prevstate =>
  //     ({ openNav: !prevstate.openNav }))
  // }

  handleFirstLevel = (cat) => {
    this.setState(prevState => ({
        //if same then reset otherwise assign new id
        firstLevel: prevState.firstLevel === cat ? false : cat,

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
    return(
      <Wrap>
        <Container>
          <TopMenu
            handleFirstLevel={this.handleFirstLevel}
            firstLevelState={this.state.firstLevel}
          />
        </Container>
          {
            this.state.firstLevel &&
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