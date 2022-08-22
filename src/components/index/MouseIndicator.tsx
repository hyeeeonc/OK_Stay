import React, { FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'

const MouseIndicatorBlock = styled.div`
  position: fixed;
  right: calc(50vw - 1016px / 2 - 24px - 46px);
  top: calc(50vh + 56px - 12px);
  transition: opacity 1.2s;
  display: flex;
  align-items: center;

  @media (max-width: 1199px) {
    right: calc(50vw - 730px / 2 - 24px - 46px);
    top: calc(50vh + 40px - 12px);
  }

  @media (max-height: 900px) {
    right: calc(50vw - 730px / 2 - 24px - 46px);
    top: calc(50vh + 40px - 12px);
  }
`

const MouseIndicatorMouseSvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;
`

const MouseIndicatorFlagSvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;

  @keyframes flagMove {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(-2px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  animation: flagMove 2s infinite linear;
`

interface MouseIndicatorProps {
  carouselPage: number
}

const MouseIndicator: FunctionComponent<MouseIndicatorProps> = function ({
  carouselPage,
}) {
  return (
    <MouseIndicatorBlock style={{ opacity: `calc(1 - ${carouselPage})` }}>
      <MouseIndicatorMouseSvgContainer>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
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
        </svg>
      </MouseIndicatorMouseSvgContainer>
      <MouseIndicatorFlagSvgContainer>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3598 7.76825C11.9356 7.41468 11.8782 6.78412 12.2318 6.35984C12.5854 5.93556 13.2159 5.87824 13.6402 6.2318L19.6402 11.2318C19.8682 11.4218 20 11.7032 20 12C20 12.2968 19.8682 12.5783 19.6402 12.7682L13.6402 17.7682C13.2159 18.1218 12.5854 18.0645 12.2318 17.6402C11.8782 17.2159 11.9356 16.5854 12.3598 16.2318L17.438 12L12.3598 7.76825Z"
            fill="white"
          />
          <path
            d="M4.35984 7.76825C3.93556 7.41468 3.87824 6.78412 4.2318 6.35984C4.58537 5.93556 5.21593 5.87824 5.64021 6.2318L11.6402 11.2318C11.8682 11.4218 12 11.7032 12 12C12 12.2968 11.8682 12.5783 11.6402 12.7682L5.64021 17.7682C5.21593 18.1218 4.58537 18.0645 4.2318 17.6402C3.87824 17.2159 3.93556 16.5854 4.35984 16.2318L9.43797 12L4.35984 7.76825Z"
            fill="white"
          />
        </svg>
      </MouseIndicatorFlagSvgContainer>
    </MouseIndicatorBlock>
  )
}

export default MouseIndicator
