import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import palette from '../../../../lib/styles/palette'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselProps,
} from './CarouselItem'

const CarouselBody = styled.section`
  margin-top: 175px;
  margin-left: 80px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;
  opacity: 85%;

  color: ${palette.gray[8]};
  @media (max-width: 1199px) {
    margin-top: 120px;
    margin-left: 57px;
    font-size: 23px;
  }

  @media (max-height: 900px) {
    margin-top: 120px;
    margin-left: 57px;
    font-size: 23px;
  }
`
const CarouselOkra: FunctionComponent<CarouselProps> = function ({
  page,
  touchStart,
  touchEnd,
  scrollHandler,
}) {
  return (
    <CarouselItem
      style={{ opacity: page === 0 ? 1 : 0.2 }}
      onWheel={scrollHandler}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
    >
      <CarouselTitleWrapper>
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
              d="M25.9998 10.3457C26.5387 10.3457 27.0327 10.6457 27.2813 11.1237L33.0591 22.2349C33.4158 22.9208 33.1691 23.766 32.4994 24.1524L26.7216 27.4858C26.2749 27.7435 25.7247 27.7435 25.278 27.4858L19.5002 24.1524C18.8305 23.766 18.5838 22.9208 18.9405 22.2349L24.7183 11.1237C24.9669 10.6457 25.4609 10.3457 25.9998 10.3457ZM22.1414 22.341L25.9998 24.567L29.8582 22.341L25.9998 14.921L22.1414 22.341Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.2189 28.0847C19.6731 27.6464 20.3594 27.5538 20.9135 27.8561L25.9996 30.6303L31.0857 27.8561C31.6399 27.5538 32.3261 27.6464 32.7804 28.0847C33.2346 28.523 33.3516 29.2055 33.0693 29.7701L27.2916 41.3257C27.0469 41.815 26.5467 42.1242 25.9996 42.1242C25.4525 42.1242 24.9523 41.815 24.7077 41.3257L18.9299 29.7701C18.6476 29.2055 18.7646 28.523 19.2189 28.0847ZM23.5736 32.5977L25.9996 37.4498L28.4257 32.5977L26.6913 33.5437C26.2602 33.7789 25.7391 33.7789 25.3079 33.5437L23.5736 32.5977Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.9996 43.5673C35.5725 43.5673 43.3329 35.8069 43.3329 26.2339C43.3329 16.661 35.5725 8.90061 25.9996 8.90061C16.4266 8.90061 8.66623 16.661 8.66623 26.2339C8.66623 35.8069 16.4266 43.5673 25.9996 43.5673ZM25.9996 46.4562C37.168 46.4562 46.2218 37.4024 46.2218 26.2339C46.2218 15.0655 37.168 6.01172 25.9996 6.01172C14.8311 6.01172 5.77734 15.0655 5.77734 26.2339C5.77734 37.4024 14.8311 46.4562 25.9996 46.4562Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>Okra Seoul NFT</CarouselTitle>
      </CarouselTitleWrapper>
      <CarouselBody>
        다수의 페스티벌 파티의 인프라를 가진 OKRASEOUL이 제공하는
        <br />
        Festival, Party, Lounge 에서 프라이빗한 공간을
        <br />
        독점적으로 사용할 수 있는 Membership NFT 입니다.
      </CarouselBody>
    </CarouselItem>
  )
}

export default CarouselOkra
