import React from 'react'
import { array, string } from 'prop-types'
import styled, { css } from 'styled-components'
import Img from '../atoms/Img'
import Container from '../atoms/Container'
import { media } from '../atoms/Media'
import * as palette from '../../variables'

const Wrap = styled.div`
  ${media.desktop`
  border-bottom: 1px solid ${palette.border};
  `}
`

const Cell = styled.div`
  display: flex;
  flex: 0 0 50%;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  ${media.tablet`
    flex: 0 0 33.33%;
  `}
  ${media.desktop`
    flex: 0 0 25%;
  `}
  &:hover {
    color: ${palette.orange};
  }
`

const RaumCell = styled.div`
  display: flex;
  flex: 0 0 100%;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  padding: 25px 10px;
  ${media.tablet`
    flex: 0 0 50%;
  `}
  ${media.desktop`
    flex: 0 0 33.33%;
  `}
  &:hover {
    ${props => props.orange && css` color: ${palette.orange}; `}
    ${props => props.blue && css` color: ${palette.blue}; `}
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
`

const Label = styled.div`
  padding: 10px;
  text-align: center;
  ${props => props.orange && css` color: ${palette.orange}; `}
  ${props => props.blue && css` color: ${palette.blue}; `}
`

const Desc = styled.div`
  text-align: center;
`

const Link = styled.a`
  color: #000;
  &:hover {
    ${props => props.orange && css` color: ${palette.orange}; `}
    ${props => props.blue && css` color: ${palette.blue}; `}
  }
`

const Random = styled.div`
  display:flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid ${palette.orange};
  ${media.desktop`
    border-top: 0px solid ${palette.orange};
  `}
`

export default class ThirdLevel extends React.Component {
  render() {
    const CellRaum = ({ firstLevelState, subItems }) => (
      <Wrap>
        <Random>
          {
            subItems.map(item =>
              <RaumCell>
                {
                  firstLevelState === 'plissee' &&
                  <div>
                    <ImgWrap>
                      <Img src={item.imgPlissee} />
                    </ImgWrap>
                    <Label orange>{item.name}</Label>
                    <Desc>{item.desc}</Desc>
                  </div>
                }
                {
                  firstLevelState === 'rollos' &&
                  <div>
                    <ImgWrap>
                      <Img src={item.imgRollos} />
                    </ImgWrap>
                    <Label blue>{item.name}</Label>
                    <Desc>{item.desc}</Desc>
                  </div>
                }
              </RaumCell>,
          )}
        </Random>
      </Wrap>
    )

    const Bla = ({ firstLevelState, item }) => (
      <Cell>
        {
          firstLevelState === 'plissee' &&
          <Link orange src={item.linkPlissee}>
            <ImgWrap>
              <Img src={item.imgPlissee} />
            </ImgWrap>
            <Label>{item.namePlissee}</Label>
          </Link>
        }
        {
          firstLevelState === 'rollos' &&
          <Link blue src={item.linkRollos}>
            <ImgWrap>
              <Img src={item.imgRollos} />
            </ImgWrap>
            <Label>{item.nameRollos}</Label>
          </Link>
        }
      </Cell>
    )

    const CellNormal = ({ firstLevelState, subItems }) => (
      <Wrap>
        <Container>
          {firstLevelState === 'plissee' &&
          <Random>
            {
              subItems.filter(items => items.plissee === true).map(item =>
                <Bla firstLevelState={firstLevelState} item={item} />,
            )}
          </Random>
          }
          {firstLevelState === 'rollos' &&
          <Random>
            {
              subItems.filter(items => items.rollos === true).map(item =>
                <Bla firstLevelState={firstLevelState} item={item} />,
            )}
          </Random>
          }
        </Container>
      </Wrap>
    )

    return (
      <div>
        {
          this.props.secondLevelState === 3
        ?
          <CellRaum
            subItems={this.props.subItems}
            firstLevelState={this.props.firstLevelState}
          />
        : <CellNormal
            subItems={this.props.subItems}
            firstLevelState={this.props.firstLevelState}
          />
        }
      </div>
    )
  }
}

