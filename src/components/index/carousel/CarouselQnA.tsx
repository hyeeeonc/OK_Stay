import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import palette from '../../../../lib/styles/palette'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselInnerScrollProps,
} from './CarouselItem'

const QnABody = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll !important;

  color: ${palette.gray[8]};
`

const CarouselQnA: FunctionComponent<CarouselInnerScrollProps> = function ({
  page,
  scroll1,
  scroll2,
  scroll3,
}) {
  return (
    <CarouselItem style={{ opacity: page === 4 ? 1 : 0.3 }}>
      <CarouselTitleWrapper
        onWheel={scroll2}
        onTouchStart={scroll1}
        onTouchEnd={scroll3}
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
    </CarouselItem>
  )
}

export default CarouselQnA
