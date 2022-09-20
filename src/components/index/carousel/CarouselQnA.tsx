import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, {
  FunctionComponent,
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
import palette from '../../../../lib/styles/palette'
import { preventInnerScrollHandler } from '../../../common/InnerScroll'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
} from './CarouselItem'

import {
  QnAListType,
  CarouselDataType,
} from 'types/index/carousel/CarouselData'
import { CarouselContext } from 'hooks/contexts/CarouselProvider'
import { QnAModalContext } from 'hooks/contexts/QnAModalProvider'
import { LanguageContext } from 'hooks/contexts/LanguageProvider'

const QnABody = styled.div`
  padding-left: 80px;
  padding-right: 40px;
  margin-right: 40px;
  height: 325px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll !important;
  scroll-behavior: smooth;
  transition: 0.3s;

  color: ${palette.gray[8]};

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 10px;
    background: white;

    border-radius: 31px;
  }

  ::-webkit-scrollbar-track {
    background: ${palette.gray[4]};
    border-radius: 31px;
  }

  @media (max-width: 1199px) {
    padding: 0 30px 0 57px;
    height: 250px;
  }

  @media (max-height: 900px) {
    padding: 0 30px 0 57px;
    height: 250px;
  }
`

const QnABodyAccordionItemContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${palette.gray[4]};

  :first-of-type {
    margin-top: -30px;
  }

  @media (max-width: 1199px) {
    :first-of-type {
      margin-top: -22px;
    }
  }

  @media (max-height: 900px) {
    :first-of-type {
      margin-top: -22px;
    }
  }
`

const QnABodyAccordionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[8]};

  flex: none;

  padding: 30px 0;

  @media (max-width: 1199px) {
    font-size: 22px;
    padding: 22px 0;
  }

  @media (max-height: 900px) {
    font-size: 22px;
    padding: 22px 0;
  }
`
const QnABodyAccordionTitleLogo = styled.div`
  width: 40px;
  height: 40px;
  transition: all 0.3s;
  @media (max-width: 1199px) {
    width: 30px;
    height: 30px;
  }

  @media (max-height: 900px) {
    width: 30px;
    height: 30px;
  }
`

const QnABodyAccordionContentContainer = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
`

const QnABodyAccordionContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[8]};
  padding-bottom: 20px;

  @media (max-width: 1199px) {
    font-size: 20px;
    padding-bottom: 15px;
  }

  @media (max-height: 900px) {
    font-size: 20px;
    padding-bottom: 15px;
  }
`

interface CarouselAccordionItemsProps {
  seq: number
  title?: string
  content?: string
  selected: boolean
  setSelectedQnA: React.Dispatch<React.SetStateAction<number>>
}

const CarouselAccordionItems: FunctionComponent<CarouselAccordionItemsProps> =
  function ({ seq, title, content, selected, setSelectedQnA }) {
    const contentContainer = useRef<HTMLDivElement>(null)
    const contentChild = useRef<HTMLDivElement>(null)
    const contentLogo = useRef<HTMLDivElement>(null)

    const onclickHandler = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selected) {
          setSelectedQnA(_ => -1)
        } else {
          setSelectedQnA(_ => seq)
        }
      },
      [selected],
    )

    useEffect(() => {
      if (contentContainer.current === null || contentChild.current === null) {
        return
      }
      if (!selected) {
        contentContainer.current.style.height = '0'
        contentLogo.current.style.transform = 'rotate(0)'
      } else {
        contentContainer.current.style.height = `${contentChild.current.clientHeight}px`
        contentLogo.current.style.transform = 'rotate(90deg)'
      }
    }, [selected])

    return (
      <QnABodyAccordionItemContainer>
        <QnABodyAccordionTitleContainer onClick={onclickHandler}>
          {title}
          <QnABodyAccordionTitleLogo ref={contentLogo}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2929 18.7071C23.6834 18.3166 23.6834 17.6834 23.2929 17.2929L12.8536 6.85355C12.5386 6.53857 12 6.76165 12 7.20711L12 28.7929C12 29.2383 12.5386 29.4614 12.8536 29.1464L23.2929 18.7071Z"
                fill="white"
              />
            </svg>
          </QnABodyAccordionTitleLogo>
        </QnABodyAccordionTitleContainer>

        <QnABodyAccordionContentContainer ref={contentContainer}>
          <QnABodyAccordionContent ref={contentChild}>
            {content}
          </QnABodyAccordionContent>
        </QnABodyAccordionContentContainer>
      </QnABodyAccordionItemContainer>
    )
  }

const ViewMoreContainer = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${palette.gray[8]};

  cursor: pointer;

  margin-top: 26px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  @media (max-width: 1199px) {
    font-size: 22px;
  }

  @media (max-height: 900px) {
    font-size: 22px;
  }
`

const ViewMoreIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 6px;
`

const Spacer = styled.div`
  margin: 30px 0;
  @media (max-width: 1199px) {
    margin: 10px 0;
  }

  @media (max-height: 900px) {
    margin: 10px 0;
  }
`

const CarouselQnA = () => {
  const {
    page,
    scrollHandler,
    innerScrollHandler,
    touchStartHandler,
    touchEndHandler,
  } = useContext(CarouselContext)
  const { language } = useContext(LanguageContext)
  const { toggleQnAModal } = useContext(QnAModalContext)
  const carouselBodyRef = useRef<HTMLDivElement>(null)
  useEffect(preventInnerScrollHandler(page, 4, carouselBodyRef), [page])
  const [selectedQnA, setSelectedQnA] = useState<number>(-1)

  const {
    allQnaJson: { edges },
  }: QnAListType = useStaticQuery(graphql`
    query getQnA {
      allQnaJson(sort: { order: ASC, fields: [seq] }) {
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

  const [_, setQnAs] = useState<Array<CarouselDataType>>([])
  const [cardQnAs, setCardQnAs] = useState<Array<CarouselDataType>>([])
  useEffect(() => {
    const qnasSetter = edges.filter(({ node }) => node.language == language)
    setQnAs(_ => qnasSetter)
    setCardQnAs(_ => qnasSetter.slice(0, 5))
  }, [language])

  return (
    <>
      <CarouselItem style={{ opacity: page === 4 ? 1 : 0.2 }}>
        <CarouselTitleWrapper
          onWheel={scrollHandler(carouselBodyRef)}
          onTouchStart={touchStartHandler}
          onTouchEnd={touchEndHandler}
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
                d="M7.22238 14.679C7.22238 13.8813 7.86908 13.2346 8.66683 13.2346H26.0002C26.7979 13.2346 27.4446 13.8813 27.4446 14.679V22.6712C27.4446 22.9148 27.3843 23.1444 27.2778 23.3457H30.2813C30.3157 23.1259 30.3335 22.9006 30.3335 22.6712V14.679C30.3335 12.2858 28.3934 10.3457 26.0002 10.3457H8.66683C6.2736 10.3457 4.3335 12.2858 4.3335 14.679V28.5252C4.3335 31.0989 7.44524 32.3878 9.26514 30.5679L12.8285 27.0045H23.1113V26.2346C23.1113 25.3973 23.4674 24.6433 24.0365 24.1157H11.6319L7.22238 28.5252V14.679Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.3332 24.7893C44.1309 24.7893 44.7776 25.436 44.7776 26.2337V40.0799L40.3681 35.6703H25.9998C25.2021 35.6703 24.5554 35.0236 24.5554 34.2259V26.2337C24.5554 25.436 25.2021 24.7893 25.9998 24.7893H43.3332ZM47.6665 26.2337C47.6665 23.8405 45.7264 21.9004 43.3332 21.9004H25.9998C23.6066 21.9004 21.6665 23.8405 21.6665 26.2337V34.2259C21.6665 36.6191 23.6066 38.5592 25.9998 38.5592H39.1715L42.7349 42.1226C44.5548 43.9425 47.6665 42.6536 47.6665 40.0799V26.2337Z"
                fill="white"
              />
            </svg>
          </CarouselIcon>
          <CarouselTitle>QnA</CarouselTitle>
        </CarouselTitleWrapper>
        <QnABody
          ref={carouselBodyRef}
          onWheel={innerScrollHandler(carouselBodyRef)}
        >
          {cardQnAs.map(({ node: { seq, title, content } }) => (
            <CarouselAccordionItems
              seq={seq}
              title={`${seq}. ${title}`}
              content={content}
              selected={seq === selectedQnA}
              setSelectedQnA={setSelectedQnA}
            />
          ))}
          <ViewMoreContainer onClick={toggleQnAModal}>
            더보기
            <ViewMoreIcon>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_616_21419"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="25"
                >
                  <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_616_21419)"></g>
                <g clip-path="url(#clip0_616_21419)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.2318 6.85984C7.87824 7.28412 7.93556 7.91468 8.35984 8.26825L13.438 12.5L8.35984 16.7318C7.93556 17.0854 7.87824 17.7159 8.2318 18.1402C8.58537 18.5645 9.21593 18.6218 9.64021 18.2682L15.6402 13.2682C15.8682 13.0783 16 12.7968 16 12.5C16 12.2032 15.8682 11.9218 15.6402 11.7318L9.64021 6.7318C9.21593 6.37824 8.58537 6.43556 8.2318 6.85984Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_616_21419">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ViewMoreIcon>
          </ViewMoreContainer>
          <Spacer />
        </QnABody>
      </CarouselItem>
    </>
  )
}

export default CarouselQnA
