import React, { FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'

const MouseIndicatorBlock = styled.div`
  position: fixed;
  right: calc(50vw - 1016px / 2 - 24px - 46px);
  top: calc(50vh + 56px);
  transition: opacity 1.2s;

  @media (max-width: 1199px) {
    right: calc(50vw - 730px / 2 - 24px - 46px);
    top: calc(50vh + 40px);
  }

  @media (max-height: 900px) {
    right: calc(50vw - 730px / 2 - 24px - 46px);
    top: calc(50vh + 40px);
  }
`

interface MouseIndicatorProps {
  carouselPage: number
}

const MouseIndicator: FunctionComponent<MouseIndicatorProps> = function ({
  carouselPage,
}) {
  return (
    <MouseIndicatorBlock style={{ opacity: `calc(1 - ${carouselPage})` }}>
      <svg
        width="46"
        height="24"
        viewBox="0 0 46 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="3"
          width="12"
          height="18"
          rx="6"
          stroke="white"
          stroke-width="2"
        />
        <rect
          x="11"
          y="7"
          width="2"
          height="5"
          rx="1"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M34.3598 7.76825C33.9356 7.41468 33.8782 6.78412 34.2318 6.35984C34.5854 5.93556 35.2159 5.87824 35.6402 6.2318L41.6402 11.2318C41.8682 11.4218 42 11.7032 42 12C42 12.2968 41.8682 12.5783 41.6402 12.7682L35.6402 17.7682C35.2159 18.1218 34.5854 18.0645 34.2318 17.6402C33.8782 17.2159 33.9356 16.5854 34.3598 16.2318L39.438 12L34.3598 7.76825Z"
          fill="white"
        />
        <path
          d="M26.3598 7.76825C25.9356 7.41468 25.8782 6.78412 26.2318 6.35984C26.5854 5.93556 27.2159 5.87824 27.6402 6.2318L33.6402 11.2318C33.8682 11.4218 34 11.7032 34 12C34 12.2968 33.8682 12.5783 33.6402 12.7682L27.6402 17.7682C27.2159 18.1218 26.5854 18.0645 26.2318 17.6402C25.8782 17.2159 25.9356 16.5854 26.3598 16.2318L31.438 12L26.3598 7.76825Z"
          fill="white"
        />
      </svg>
    </MouseIndicatorBlock>
  )
}

export default MouseIndicator
