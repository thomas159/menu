import React, { Component } from 'react'
import styled from 'styled-components'
import { number } from 'prop-types'
// import MediaQuery from 'react-responsive';
import Container from '../atoms/Container'
import Logo from '../../Images/sinus_logo.png'
import ThirdLevel from '../ThirdLevel'
import { media } from '../atoms/Media'
import * as palette from '../../variables'

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
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

// SecondLevel Styles

const SecondLevelWrap = styled.div`
  width:100%
`

const TabWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
  `}
`

const TabCell = styled.div`
  display: flex;
  flex: 0 0 100%;
  padding: 10px 0;
  height:50px;
  justify-content: center;
  align-items: center;
  line-height: 0.2;
  ${media.desktop`
  flex: 0 0 20%;
  padding: 10px 10px 0 0;
  justify-content: center;
  align-items: center;
  height: 40px;
  line-height: 1;
  `}
`

const Tab = styled.button`
  width: 100%;
  outline: 0;
  border: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  line-height: 0.2;
  border-bottom: 1px solid ${palette.orange};
  ${media.desktop`
    border-top: 1px solid ${palette.border};
    border-right: 1px solid ${palette.border};
    border-bottom: 0px;
  `}
`

const ThirdLevelWrapMobile = styled.div`
  width: 100%;
  ${media.desktop`
    display: none;
  `}

`
const ThirdLevelWrapDesktop = styled.div`
  width: 100%;
  display: none;
  ${media.desktop`
    display: block;
  `}
`

export default class Menu extends Component {
  render() {
    const SecondLevel = ({ handleSecondLevel, firstLevelState, menuItems, secondLevelState }) => (
      <SecondLevelWrap>
        <Container>
          <TabWrap>
            {
              menuItems.map(cat =>
                <div style={{ width: '100%' }}>
                  <TabCell>
                    <Tab
                      key={cat.id}
                      onClick={() => handleSecondLevel(cat.id)}
                    >
                      {cat.name}
                    </Tab>
                  </TabCell>
                  { secondLevelState === cat.id &&
                  <ThirdLevelWrapMobile>
                    <ThirdLevel
                      subItems={cat.subItems}
                      secondLevelState={secondLevelState}
                      firstLevelState={firstLevelState}
                    />
                  </ThirdLevelWrapMobile>
                  }
                </div>,
              )}
          </TabWrap>
        </Container>
        <div>
          {
            menuItems.map(cat =>
            secondLevelState === cat.id &&
            <ThirdLevelWrapDesktop>
              <ThirdLevel
                subItems={cat.subItems}
                secondLevelState={secondLevelState}
                firstLevelState={firstLevelState}
              />
            </ThirdLevelWrapDesktop>,
          )}
        </div>
      </SecondLevelWrap>
    )

    return (
      <Wrap>
        {
          this.props.firstLevelState === 'plissee' &&
          <SecondLevel
            menuItems={this.props.menuItems}
            handleFirstLevel={this.props.handleFirstLevel}
            handleSecondLevel={this.props.handleSecondLevel}
            firstLevelState={this.props.firstLevelState}
            secondLevelState={this.props.secondLevelState}
          />
        }

        {
          this.props.firstLevelState === 'rollos' &&
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
