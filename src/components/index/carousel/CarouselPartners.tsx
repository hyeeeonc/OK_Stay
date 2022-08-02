import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselProps,
} from './CarouselItem'

const CarouselPartners: FunctionComponent<CarouselProps> = function ({
  page,
  touchStart,
  touchEnd,
  scrollHandler,
}) {
  return (
    <CarouselItem
      style={{ opacity: page === 6 ? 1 : 0.2 }}
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
              d="M18.3479 17.6399L28.8889 28.7557L39.4299 17.6399H18.3479ZM15.0903 18.6328C13.6442 17.1078 14.7845 14.6777 16.9463 14.6777H40.8315C42.9933 14.6777 44.1336 17.1078 42.6875 18.6328L30.7448 31.2266C29.753 32.2726 28.0248 32.2726 27.033 31.2266L15.0903 18.6328Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.2222 42.1222C20.2222 41.3244 20.8689 40.6777 21.6667 40.6777L36.1111 40.6777C36.9089 40.6777 37.5556 41.3244 37.5556 42.1222C37.5556 42.9199 36.9089 43.5666 36.1111 43.5666H21.6667C20.8689 43.5666 20.2222 42.9199 20.2222 42.1222Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.5215 30.5664L30.5215 43.5664L27.6326 43.5664L27.6326 30.5664L30.5215 30.5664Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5193 10.3713C12.9731 9.94516 10.5635 11.6638 10.1374 14.2101C9.71122 16.7563 11.4299 19.1659 13.9761 19.592C14.8249 19.7341 15.3978 20.5373 15.2557 21.386C15.1137 22.2348 14.3105 22.8077 13.4617 22.6656C9.21799 21.9554 6.35354 17.9394 7.06379 13.6957C7.77403 9.45194 11.79 6.58748 16.0337 7.29773C18.3289 7.68186 20.2218 9.03514 21.361 10.8631C21.8161 11.5934 21.593 12.5544 20.8627 13.0096C20.1324 13.4647 19.1714 13.2416 18.7162 12.5113C18.0298 11.4099 16.8961 10.6017 15.5193 10.3713Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>Partners</CarouselTitle>
      </CarouselTitleWrapper>
    </CarouselItem>
  )
}

export default CarouselPartners
