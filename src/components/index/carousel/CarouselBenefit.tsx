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
  margin-top: 50px
  margin-left: 80px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${palette.gray[8]};

`

const CarouselBodyItems = styled.div`
  display: flex;
  justify-content: space-between;
`

const CarouselBodyItemsTextWrapper = styled.h3`
  height: 89px;
  display: flex;
`

const CarouselBodyItemsContent = styled.h4`
  opacity: 80%;
`

const CarouselBenefit: FunctionComponent<CarouselProps> = function ({ page }) {
  return (
    <CarouselItem style={{ opacity: page === 1 ? 1 : 0.3 }}>
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
              d="M41.4427 16.068C43.1968 14.2169 46.0407 14.2169 47.7947 16.068C49.5488 17.9191 49.5488 20.9203 47.7947 22.7714L38.7605 32.3054C35.5222 35.7229 31.13 37.6428 26.5503 37.6428H11.522C10.7273 37.6428 10.083 36.9629 10.083 36.1242C10.083 35.2856 10.7273 34.6057 11.522 34.6057H26.5503C30.3667 34.6057 34.0269 33.0057 36.7255 30.1578L45.7597 20.6238C46.3898 19.9588 46.3898 18.8806 45.7597 18.2156C45.1296 17.5506 44.1079 17.5506 43.4778 18.2156L37.4961 24.5282C35.0673 27.0913 31.7732 28.5313 28.3384 28.5313H24.4729C23.6782 28.5313 23.0339 27.8514 23.0339 27.0127C23.0339 26.174 23.6782 25.4941 24.4729 25.4941H28.3384C31.0099 25.4941 33.572 24.3741 35.4611 22.3806L41.4427 16.068Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7522 19.6295C15.1535 17.4759 19.3133 17.1241 22.9962 18.6788L23.7139 18.9817C24.3991 19.2709 25.1303 19.4195 25.8682 19.4195H30.2299C32.6141 19.4195 34.5469 21.4592 34.5469 23.9753C34.5469 26.4914 32.6141 28.5311 30.2299 28.5311H24.474V25.4939H30.2299C31.0247 25.4939 31.6689 24.814 31.6689 23.9753C31.6689 23.1366 31.0247 22.4567 30.2299 22.4567H25.8682C24.7641 22.4567 23.6702 22.2344 22.645 21.8017L21.9274 21.4987C19.0796 20.2966 15.863 20.5686 13.2329 22.2339L10.8245 23.7589L9.34375 21.1546L11.7522 19.6295Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.20564 20.9395C6.41091 20.9395 5.76665 21.6194 5.76665 22.4581V37.6441H8.64463V22.4581C8.64463 21.6194 8.00037 20.9395 7.20564 20.9395ZM2.88867 22.4581C2.88867 19.942 4.82144 17.9023 7.20564 17.9023C9.58983 17.9023 11.5226 19.942 11.5226 22.4581V38.2226C11.5226 39.5805 10.4795 40.6813 9.19281 40.6813H5.21846C3.93176 40.6813 2.88867 39.5805 2.88867 38.2226V22.4581Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>NFT Benefit</CarouselTitle>
      </CarouselTitleWrapper>
    </CarouselItem>
  )
}

export default CarouselBenefit
