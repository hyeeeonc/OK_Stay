import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
  MobileItemsProps,
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

const MobileQnA: FunctionComponent<MobileItemsProps> = function ({ language }) {
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
    setQnAs(_ => edges.filter(({ node }) => node.language == language))
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
      </MobileItemBody>
    </MobileItem>
  )
}

export default MobileQnA
