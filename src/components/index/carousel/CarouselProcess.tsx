import styled from '@emotion/styled'
import React, { FunctionComponent, useRef, useState, useEffect } from 'react'
import palette from '../../../../lib/styles/palette'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselInnerScrollProps,
} from './CarouselItem'

const ProcessBody = styled.div`
  padding: 0 80px;
  height: 340px;
  overflow-y: scroll !important;
  scroll-behavior: smooth;

  color: ${palette.gray[8]};
  @media (max-width: 1199px) {
    padding: 0 57px;
    height: 250px;
  }
`

const ProcessItem = styled.div`
  margin-bottom: 32px;
  @media (max-width: 1199px) {
    margin-bottom: 26px;
  }
`

const ProcessItemTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;
  @media (max-width: 1199px) {
    font-size: 26px;
    padding-bottom: 5px;
  }
`

const ProcessItemContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;
  @media (max-width: 1199px) {
    font-size: 18px;
    padding-bottom: 5px;
  }
`

interface ProcessItemProps {
  title: string
  content: string
}

const ProcessItems: FunctionComponent<ProcessItemProps> = function ({
  title,
  content,
}) {
  return (
    <ProcessItem>
      <ProcessItemTitle>{title}</ProcessItemTitle>
      <ProcessItemContent>{content}</ProcessItemContent>
    </ProcessItem>
  )
}

const CarouselInfo: FunctionComponent<CarouselInnerScrollProps> = function ({
  page,
  touchStart,
  touchEnd,
  scrollHandler,
  innerScrollHandler,
}) {
  const carouselBodyRef = useRef<HTMLDivElement>(null)
  const [innerScrollHeight, setInnerScrollHeight] = useState<number>(0)
  useEffect(() => {
    setInnerScrollHeight(_ => carouselBodyRef.current.scrollHeight)
  }, [])
  const [_, setInnerScroll] = useState<number>(0)
  return (
    <CarouselItem style={{ opacity: page === 3 ? 1 : 0.2 }}>
      <CarouselTitleWrapper
        onWheel={scrollHandler(carouselBodyRef)}
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
              d="M23.9871 11.1203L13.7734 21.3341C13.2093 21.8982 13.2093 22.8128 13.7734 23.3768L17.8589 27.4624C18.423 28.0264 19.3376 28.0264 19.9016 27.4624L30.1154 17.2486C30.6795 16.6845 30.6795 15.7699 30.1154 15.2058L26.0299 11.1203C25.4658 10.5562 24.5512 10.5562 23.9871 11.1203ZM11.7306 19.2913C10.0384 20.9836 10.0384 23.7273 11.7306 25.4196L15.8161 29.5051C17.5084 31.1974 20.2521 31.1974 21.9444 29.5051L32.1582 19.2913C33.8504 17.5991 33.8504 14.8554 32.1582 13.1631L28.0727 9.07758C26.3804 7.3853 23.6367 7.3853 21.9444 9.07758L11.7306 19.2913Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.0086 22.3557C23.8804 23.4839 23.8804 25.313 25.0086 26.4412L37.2651 38.6977C38.3933 39.8259 40.2224 39.8259 41.3506 38.6977C42.4788 37.5695 42.4788 35.7404 41.3506 34.6122L29.0941 22.3557C27.9659 21.2275 26.1368 21.2275 25.0086 22.3557Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.9998 37.7912H11.5554L11.5554 40.6801H25.9998V37.7912ZM11.5554 34.9023C9.9599 34.9023 8.6665 36.1957 8.6665 37.7912V40.6801C8.6665 42.2756 9.9599 43.569 11.5554 43.569H25.9998C27.5953 43.569 28.8887 42.2756 28.8887 40.6801V37.7912C28.8887 36.1957 27.5953 34.9023 25.9998 34.9023H11.5554Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>Process</CarouselTitle>
      </CarouselTitleWrapper>

      <ProcessBody
        ref={carouselBodyRef}
        onWheel={innerScrollHandler({
          innerScrollHeight,
          setInnerScroll,
          ref: carouselBodyRef,
        })}
      >
        <ProcessItems
          title="Step.01 카이카스 설치하기"
          content="크롬 웹 스토어에서 카이카스 설치 후 계정을 생성합니다."
        />
        <ProcessItems
          title="Step.02 클레이튼 전송하기"
          content="거래소에서 클레이튼을 구매하여, 지갑에 전송합니다. 이때, 송금 수수료와 민팅 수수료를 생각하여, 민팅가격보다 약간 더 많은 클레이튼을 전송합니다."
        />
        <ProcessItems
          title="Step.03 민팅 준비하기"
          content="민팅 페이지에 접속 해 ‘NFT 민팅 하기’ 버튼을 누른 후 우측 상단 카이카스를 통해 내 지갑을 연결합니다."
        />
        <ProcessItems
          title="Step.04 민팅하기"
          content="민팅 페이지에 다시 돌아와 ‘NFT 민팅 하기' 버튼을 눌러 페이지 이동을 한 후 시간에 맞춰 버튼을 누르면 성공적으로 민팅이 완료됩니다."
        />
      </ProcessBody>
    </CarouselItem>
  )
}

export default CarouselInfo
