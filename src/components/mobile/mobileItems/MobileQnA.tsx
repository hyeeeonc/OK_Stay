import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
  MobileQnAProps,
} from './MobileItems'

import {
  QnAListType,
  CarouselDataType,
} from 'types/index/carousel/CarouselData'

const MobileQnAAccordionContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${palette.gray[4]};

  :first-of-type {
    margin-top: -30px;
  }
`

const MobileQnAAccordionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;

  /* dark/🌑 gray90 */
  color: ${palette.gray[8]};

  padding: 20px 0;
`

const MobileQnAAccordionTitleLogo = styled.div`
  width: 18px;
  height: 18px;
  transition: all 0.3s;
`

const MobileQnAAccordionContentContainer = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
`

const MobileQnAAccordionContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[8]};
  padding: 16px 0;
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

    const onclickHandler = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (selected) {
        setSelectedQnA(_ => -1)
      } else {
        setSelectedQnA(_ => seq)
      }
    }

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
      <MobileQnAAccordionContainer>
        <MobileQnAAccordionTitleContainer onClick={onclickHandler}>
          {title}
          <MobileQnAAccordionTitleLogo ref={contentLogo}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2929 9.70711C11.6834 9.31658 11.6834 8.68342 11.2929 8.29289L6.85355 3.85355C6.53857 3.53857 6 3.76165 6 4.20711L6 13.7929C6 14.2383 6.53857 14.4614 6.85355 14.1464L11.2929 9.70711Z"
                fill="white"
              />
            </svg>
          </MobileQnAAccordionTitleLogo>
        </MobileQnAAccordionTitleContainer>

        <MobileQnAAccordionContentContainer ref={contentContainer}>
          <MobileQnAAccordionContent ref={contentChild}>
            {content}
          </MobileQnAAccordionContent>
        </MobileQnAAccordionContentContainer>
      </MobileQnAAccordionContainer>
    )
  }

const ViewMoreContainer = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${palette.gray[8]};

  cursor: pointer;

  margin-top: 26px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
`

const ViewMoreIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18px;
  height: 18px;

  margin-left: 6px;
`

const MobileQnA: FunctionComponent<MobileQnAProps> = function ({
  language,
  qnaModalOpenHandler,
}) {
  const [selectedQnA, setSelectedQnA] = useState<number>(-1)

  const {
    allQnaJson: { edges },
  }: QnAListType = useStaticQuery(graphql`
    query getQnAs {
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

  const [qnas, setQnAs] = useState<Array<CarouselDataType>>([])
  useEffect(() => {
    const qnaSetter = edges.filter(({ node }) => node.language == language)
    setQnAs(qnaSetter.slice(0, 5))
  }, [language])

  return (
    <MobileItem>
      <MobileItemTitleWrapper>QnA</MobileItemTitleWrapper>
      <MobileItemBody>
        {qnas.map(({ node: { seq, title, content } }) => (
          <CarouselAccordionItems
            seq={seq}
            title={`${seq}. ${title}`}
            content={content}
            selected={seq === selectedQnA}
            setSelectedQnA={setSelectedQnA}
          />
        ))}
        <ViewMoreContainer onClick={qnaModalOpenHandler}>
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
      </MobileItemBody>
    </MobileItem>
  )
}

export default MobileQnA
