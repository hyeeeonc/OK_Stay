import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react'
import palette from '../../../../lib/styles/palette'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselInnerScrollProps,
} from './CarouselItem'

import { preventInnerScrollHandler } from '../../../common/InnerScroll'
import {
  RoadmapListType,
  CarouselDataType,
} from 'types/index/carousel/CarouselData'
import { graphql, useStaticQuery } from 'gatsby'
import { CarouselProps } from 'types/index/carousel/CarouselProps'

const RoadmapBody = styled.div<{ page: number }>`
  padding-left: 60px;
  padding-right: 20px;
  margin-right: 40px;
  height: 330px;
  display: flex;
  overflow-y: scroll !important;

  scroll-behavior: smooth;
  color: ${palette.gray[8]};
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 10px;
    background: white; /* 스크롤바의 색상 */

    border-radius: 31px;
  }

  ::-webkit-scrollbar-track {
    background: ${palette.gray[4]};
    border-radius: 31px;
  }

  @media (max-width: 1199px) {
    padding-left: 30px;
    height: 250px;
  }

  @media (max-height: 900px) {
    padding-left: 30px;
    height: 250px;
  }
`

const RoadmapBodyLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 42px;
  width: 120px;
  @media (max-width: 1199px) {
    padding-top: 30px;
    width: 95px;
  }

  @media (max-height: 900px) {
    padding-top: 30px;
    width: 95px;
  }
`

const RoadmapBodyLine = styled.div`
  width: 2px;
  height: 100px;
  background-color: white;
  flex: none;
  @media (max-width: 1199px) {
    width: 1.6px;
    height: 80px;
  }

  @media (max-height: 900px) {
    width: 1.6px;
    height: 80px;
  }
`

const RoadmapBodySecondLine = styled.div`
  width: 2px;
  height: 100px;
  background-color: white;
  flex: none;
  @media (max-width: 1199px) {
    width: 1.6px;
    height: 80px;
  }

  @media (max-height: 900px) {
    width: 1.6px;
    height: 80px;
  }
`

const RoadmapBodyBall = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  flex: none;
  @media (max-width: 1199px) {
    width: 15px;
    height: 15px;
  }

  @media (max-height: 900px) {
    width: 15px;
    height: 15px;
  }
`

const RoadmapBodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
  @media (max-width: 1199px) {
    padding-bottom: 35px;
  }

  @media (max-height: 900px) {
    padding-bottom: 35px;
  }
`

const RoadmapBodyTextItem = styled.div`
  word-break: break-all;


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 35px;

  @media (max-width: 1199px) {
    margin-bottom: 34px;
    :last-of-type {
      padding-bottom: 60px;
    }


  @media (max-height: 900px) {
    margin-bottom: 34px;
    :last-of-type {
      padding-bottom: 60px;
    }
`

const RoadmapBodyTextItemTitle = styled.div`
  width: 100%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;
  white-space: normal;
  @media (max-width: 1199px) {
    font-size: 26px;
  }

  @media (max-height: 900px) {
    font-size: 26px;
  }
`

const RoadmapBodyTextItemDate = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;
  @media (max-width: 1199px) {
    font-size: 18px;
  }

  @media (max-height: 900px) {
    font-size: 18px;
  }
`

interface RoadmapBodyTextComponentProps {
  title: string
  date: string
}

const RoadmapBodyTextItems: FunctionComponent<RoadmapBodyTextComponentProps> =
  function ({ title, date }) {
    return (
      <RoadmapBodyTextItem>
        <RoadmapBodyTextItemTitle>{title}</RoadmapBodyTextItemTitle>
        <RoadmapBodyTextItemDate>{date}</RoadmapBodyTextItemDate>
      </RoadmapBodyTextItem>
    )
  }

const CarouselRoadmap: FunctionComponent<CarouselProps> = function ({
  page,
  touchStart,
  touchEnd,
  language,
  scrollHandler,
  innerScrollHandler,
}) {
  const carouselBodyRef = useRef<HTMLDivElement>(null)
  useEffect(preventInnerScrollHandler(page, 2, carouselBodyRef), [page])

  const _innerScrollHandler = useMemo(
    () => innerScrollHandler(carouselBodyRef),
    [],
  )
  const _scrollHandler = useMemo(() => scrollHandler(carouselBodyRef), [])

  const {
    allRoadmapJson: { edges },
  }: RoadmapListType = useStaticQuery(graphql`
    query getRoadmaps {
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

  console.log('roadmap')
  const [roadmaps, setRoadmaps] = useState<Array<CarouselDataType>>([])
  useEffect(() => {
    setRoadmaps(_ => edges.filter(({ node }) => node.language === language))
  }, [language])

  return (
    <CarouselItem style={{ opacity: page === 2 ? 1 : 0.2 }}>
      <CarouselTitleWrapper
        onWheel={_scrollHandler}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
      >
        <CarouselIcon>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.6668 42.1233H11.5557V39.2344H34.6668V42.1233Z"
              fill="white"
            />
            <path
              d="M14.4448 40.6779C14.4448 42.2734 13.1514 43.5668 11.5559 43.5668C9.96039 43.5668 8.66699 42.2734 8.66699 40.6779C8.66699 39.0825 9.96039 37.7891 11.5559 37.7891C13.1514 37.7891 14.4448 39.0825 14.4448 40.6779Z"
              fill="white"
            />
            <path
              d="M37.5551 40.6779C37.5551 42.2734 36.2617 43.5668 34.6662 43.5668C33.0707 43.5668 31.7773 42.2734 31.7773 40.6779C31.7773 39.0825 33.0707 37.7891 34.6662 37.7891C36.2617 37.7891 37.5551 39.0825 37.5551 40.6779Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.025 32.5272C38.6903 33.7889 36.875 34.9006 34.6669 34.9006C32.4588 34.9006 30.6435 33.7889 29.3088 32.5272C27.961 31.253 26.8505 29.598 25.9761 27.9184C24.2537 24.6096 23.1113 20.5401 23.1113 17.5673C23.1113 11.1853 28.2849 6.01172 34.6669 6.01172C41.0488 6.01172 46.2224 11.1853 46.2224 17.5673C46.2224 20.5401 45.0801 24.6096 43.3576 27.9184C42.4833 29.598 41.3728 31.253 40.025 32.5272ZM34.6669 32.0117C39.4534 32.0117 43.3335 22.3537 43.3335 17.5673C43.3335 12.7808 39.4534 8.90061 34.6669 8.90061C29.8804 8.90061 26.0002 12.7808 26.0002 17.5673C26.0002 22.3537 29.8804 32.0117 34.6669 32.0117Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.6664 20.4557C36.2619 20.4557 37.5553 19.1623 37.5553 17.5668C37.5553 15.9714 36.2619 14.678 34.6664 14.678C33.071 14.678 31.7776 15.9714 31.7776 17.5668C31.7776 19.1623 33.071 20.4557 34.6664 20.4557ZM34.6664 23.3446C37.8574 23.3446 40.4442 20.7578 40.4442 17.5668C40.4442 14.3759 37.8574 11.7891 34.6664 11.7891C31.4755 11.7891 28.8887 14.3759 28.8887 17.5668C28.8887 20.7578 31.4755 23.3446 34.6664 23.3446Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>Roadmap</CarouselTitle>
      </CarouselTitleWrapper>

      <RoadmapBody
        ref={carouselBodyRef}
        onWheel={_innerScrollHandler}
        page={page}
      >
        <RoadmapBodyLineContainer>
          {roadmaps.map((_, index) =>
            index === roadmaps.length - 1 ? (
              <RoadmapBodyBall />
            ) : (
              <>
                <RoadmapBodyBall />
                <RoadmapBodyLine />
              </>
            ),
          )}
        </RoadmapBodyLineContainer>

        <RoadmapBodyTextContainer>
          {roadmaps.map(({ node: { title, content } }) => (
            <RoadmapBodyTextItems title={title} date={content} />
          ))}
        </RoadmapBodyTextContainer>
      </RoadmapBody>
    </CarouselItem>
  )
}

export default CarouselRoadmap
