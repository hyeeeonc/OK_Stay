import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  RoadmapListType,
  CarouselDataType,
} from 'types/index/carousel/CarouselData'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
  MobileItemsProps,
} from './MobileItems'

const MobileRoadmapBodyLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 56px;
  margin-top: 10px;
  margin-right: 20px;
`

const MobileRoadmapBodyLine = styled.div`
  width: 1px;
  height: 65px;
  background-color: white;
  flex: none;
`

const MobileRoadmapBodySecondLine = styled.div`
  width: 1px;
  height: 99px;
  background-color: white;
  flex: none;

  @media (max-width: 380px) {
    height: 126px;
  }
`

const MobileRoadmapBodyBall = styled.div`
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  flex: none;
`

const MobileRoadmapBodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;

  :last-of-type {
    padding-bottom: 0px;
  }
`

const MobileRoadmapBodyTextItems = styled.div`
  word-break: break-all;
  margin-bottom: 20px;
`

const MobileRoadmapBodyTextTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;

  margin-bottom: 8px;

  color: ${palette.gray[8]};
`

const MobileRoadmapBodyTextContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[7]};
`

const MobileRoadmap: FunctionComponent<MobileItemsProps> = function ({
  language,
}) {
  const {
    allRoadmapJson: { edges },
  }: RoadmapListType = useStaticQuery(graphql`
    query getRoadmap {
      allRoadmapJson(sort: { order: ASC, fields: [seq] }) {
        edges {
          node {
            language
            seq
            title
            content
          }
        }
      }
    }
  `)

  const [roadmaps, setRoadmaps] = useState<Array<CarouselDataType>>([])
  useEffect(() => {
    setRoadmaps(_ => edges.filter(({ node }) => node.language === language))
  }, [language])

  return (
    <MobileItem>
      <MobileItemTitleWrapper>Roadmap</MobileItemTitleWrapper>
      <MobileItemBody
        style={{
          display: `flex`,
        }}
      >
        <MobileRoadmapBodyLineContainer>
          <MobileRoadmapBodyBall />
          <MobileRoadmapBodyLine />

          <MobileRoadmapBodyBall />
          <MobileRoadmapBodySecondLine />

          <MobileRoadmapBodyBall />
          <MobileRoadmapBodyLine />

          <MobileRoadmapBodyBall />
          <MobileRoadmapBodyLine />

          <MobileRoadmapBodyBall />
        </MobileRoadmapBodyLineContainer>

        <MobileRoadmapBodyTextContainer>
          {roadmaps.map(({ node: { title, content } }) => (
            <MobileRoadmapBodyTextItems>
              <MobileRoadmapBodyTextTitle>{title}</MobileRoadmapBodyTextTitle>
              <MobileRoadmapBodyTextContent>
                {content}
              </MobileRoadmapBodyTextContent>
            </MobileRoadmapBodyTextItems>
          ))}
        </MobileRoadmapBodyTextContainer>
      </MobileItemBody>
    </MobileItem>
  )
}

export default MobileRoadmap
