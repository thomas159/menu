import React, { Component } from 'react'
import styled from 'styled-components'
import { number } from 'prop-types'
// import MediaQuery from 'react-responsive';
import Container from '../atoms/Container'
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
  width: 100%
`

const TabWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 0 0 0;
  border-bottom: 1px solid ${palette.orange};
  ${media.desktop`
    flex-direction: row;
    border-bottom: 0px solid ${palette.orange};
  `}
`

const TabBig = styled.button`
  width: 100%;
  outline: 0;
  border: 0;
  height: 100%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  line-height: 0.2;
  z-index: 1;
  ${media.desktop`
  flex-direction: row;
  border-bottom: 1px solid ${palette.orange};
    ${({ active }) => active && `
      border-top: 1px solid ${palette.orange};
      border-right: 1px solid ${palette.orange};
      border-left: 1px solid ${palette.orange};
      border-bottom: 0px solid ${palette.orange};
    `}
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
  cursor: pointer;
  ${({ active }) => active && `
      border-top: 0px solid ${palette.border};
      border-right: 0px solid ${palette.border};
    `}
  ${media.desktop`
    flex-direction: row;
    ${({ active }) => active && `
      border-top: 1px solid ${palette.border};
      border-right: 1px solid ${palette.border};
    `}
  `}
`

const TabInner = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.orange};
  ${media.desktop`
    border-top: 0px solid ${palette.orange};
  `}
  &:nth-child(1) ${TabBig} {
    padding: 5px 5px 5px 0;
  }
  &:nth-child(5) ${TabBig} {
    padding: 5px 0px 5px 5px;
  }
`

const TabCell = styled.div`
  display: flex;
  flex: 0 0 100%;
  padding: 0;
  height: 50px;
  justify-content: center;
  align-items: center;
  line-height: 0.2;
  ${media.desktop`
    flex: 0 0 20%;
    justify-content: center;
    align-items: center;
    height: 40px;
    line-height: 1;
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
  state = {
    active: 1,
  }

  handleButton = (id) => {
    this.setState({ active: id })
  }

  render() {
    const SecondLevel = ({ handleSecondLevel, firstLevelState, menuItems, secondLevelState }) => (
      <SecondLevelWrap>
        <Container>
          <TabWrap>
            {
              menuItems.map(cat =>
                <TabInner>
                  <TabCell>
                    <TabBig
                      onClick={() => this.handleButton(cat.id)}
                      active={this.state.active === cat.id}
                    >
                    <Tab
                      active={this.state.active !== cat.id}
                      key={cat.id}
                      onClick={() => handleSecondLevel(cat.id)}
                    >
                      {cat.name}
                    </Tab>
                    </TabBig>
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
                </TabInner>,
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
