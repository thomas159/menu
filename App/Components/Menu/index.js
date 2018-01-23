import React, { Component } from 'react'
import styled from 'styled-components'
import { number } from 'prop-types'
import Logo from '../../Images/sinus_logo.png'
import ThirdLevel from '../ThirdLevel'
import { media } from '../atoms/Media'
import * as palette from '../../variables'


const Wrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  ${media.desktop`
    flex-direction: row;
  `}
`

const Cell = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid ${palette.orange};
  border-bottom: 1px solid ${palette.orange};
  ${media.desktop`
    flex: 0 0 auto;
  `}
  &:hover {
    cursor: pointer;
    color: ${palette.orange}
  }
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

const SubMenuWrap = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${palette.border};
  &:hover {
    cursor: pointer;
    color: ${palette.orange}
  }
`

// SecondLevel Styles

export default class Menu extends Component {

  // static propTypes = {
  //   firstLevelState: number,
  // }

  render() {
    const SecondLevel = ({ handleSecondLevel, menuItems, secondLevelState }) => (
      <div>
        {
          menuItems.map(cat =>
            <div key={cat.id}>
              <SubMenuWrap
                key={cat.id}
                onClick={() => handleSecondLevel(cat.id)}
              >
                {cat.name}
              </SubMenuWrap>
              {console.log(secondLevelState)}
              {
                secondLevelState === cat.id &&
                <div>
                  <ThirdLevel subItems={cat.subItems} />
                </div>
              }
            </div>,
        )}
      </div>
    )

    return (
      <Wrap>
        {console.log(this.props.firstLevelState)}
        <Cell onClick={() => this.props.handleFirstLevel(1)}>
          <CatImg src="https://plissee-jalousien-rollos.de/media/icons/menu/MainNavIcons_plissee.png" />
          <CatName>Plissee</CatName>
        </Cell>
        {
          this.props.firstLevelState === 1 &&
          <SecondLevel
            menuItems={this.props.menuItems}
            handleFirstLevel={this.props.handleFirstLevel}
            handleSecondLevel={this.props.handleSecondLevel}
            firstLevelState={this.props.firstLevelState}
            secondLevelState={this.props.secondLevelState}
          />
        }
        <Cell onClick={() => this.props.handleFirstLevel(2)}>
          <CatImg src="https://plissee-jalousien-rollos.de/media/icons/menu/MainNavIcons_rollo.png" />
          <CatName>Rollos</CatName>
        </Cell>
        {
          this.props.firstLevelState === 2 &&
          <SecondLevel
            menuItems={this.props.menuItems}
            handleFirstLevel={this.props.handleFirstLevel}
            handleSecondLevel={this.props.handleSecondLevel}
            firstLevelState={this.props.firstLevelState}
            secondLevelState={this.props.secondLevelState}
          />
        }
      </Wrap>
    )
  }
}
