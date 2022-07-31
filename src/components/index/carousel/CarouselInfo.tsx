import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselProps,
} from './CarouselItem'

const CarouselInfo: FunctionComponent<CarouselProps> = function ({ page }) {
  return (
    <CarouselItem style={{ opacity: page === 3 ? 1 : 0.3 }}>
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
        <CarouselTitle>Infomation</CarouselTitle>
      </CarouselTitleWrapper>
    </CarouselItem>
  )
}

export default CarouselInfo
