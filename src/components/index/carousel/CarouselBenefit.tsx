import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import palette from '../../../../lib/styles/palette'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselInnerScrollProps,
} from './CarouselItem'

const CarouselBody = styled.section`
  padding-left: 80px;
  padding-right: 110px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll !important;
  scroll-behavior: smooth;

  color: ${palette.gray[8]};

  @media (max-width: 1199px) {
    padding-left: 57px;
    padding-right: 57px;
    height: 250px;
  }
`

const CarouselBodyItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
  @media (max-width: 1199px) {
    margin-bottom: 45px;
  }
`

const CarouselBodyIcon: FunctionComponent = function () {
  return (
    <div style={{ width: 50, height: 50 }}>
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.33301 30.4563C5.33301 27.7072 7.56166 25.4785 10.3108 25.4785H17.7776C20.5268 25.4785 22.7554 27.7072 22.7554 30.4563V37.9231C22.7554 40.6723 20.5268 42.9009 17.7776 42.9009H10.3108C7.56166 42.9009 5.33301 40.6723 5.33301 37.9231V30.4563ZM17.7776 30.4563H10.3108V37.9231H17.7776V30.4563Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.2451 10.5462C25.2451 7.79701 27.4738 5.56836 30.2229 5.56836H37.6897C40.4389 5.56836 42.6675 7.79701 42.6675 10.5462V18.0129C42.6675 20.7621 40.4389 22.9907 37.6897 22.9907H30.2229C27.4738 22.9907 25.2451 20.7621 25.2451 18.0129V10.5462ZM37.6897 10.5462H30.2229V18.0129H37.6897V10.5462Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.33301 10.5462C5.33301 7.79701 7.56166 5.56836 10.3108 5.56836H17.7776C20.5268 5.56836 22.7554 7.79701 22.7554 10.5462V18.0129C22.7554 20.7621 20.5268 22.9907 17.7776 22.9907H10.3108C7.56166 22.9907 5.33301 20.7621 5.33301 18.0129V10.5462ZM17.7776 10.5462H10.3108V18.0129H17.7776V10.5462Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.2451 34.1897C25.2451 29.3787 29.1453 25.4785 33.9563 25.4785C38.7674 25.4785 42.6675 29.3787 42.6675 34.1897C42.6675 39.0008 38.7674 42.9009 33.9563 42.9009C29.1453 42.9009 25.2451 39.0008 25.2451 34.1897ZM33.9563 30.4563C31.8944 30.4563 30.2229 32.1278 30.2229 34.1897C30.2229 36.2516 31.8944 37.9231 33.9563 37.9231C36.0182 37.9231 37.6897 36.2516 37.6897 34.1897C37.6897 32.1278 36.0182 30.4563 33.9563 30.4563Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

const CarouselBodyItemsTextWrapper = styled.div`
  height: 89px;
  color: ${palette.gray[8]};
  @media (max-width: 1199px) {
    height: 64px;
  }
`

const CarouselBodyItemsTitle = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: -0.02em;
  @media (max-width: 1199px) {
    font-size: 26px;
  }
`

const CarouselBodyItemsContent = styled.h4`
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

const CarouselBenefit: FunctionComponent<CarouselInnerScrollProps> = function ({
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
    <CarouselItem style={{ opacity: page === 1 ? 1 : 0.2 }}>
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

      <CarouselBody
        ref={carouselBodyRef}
        onWheel={innerScrollHandler({
          innerScrollHeight,
          setInnerScroll,
          ref: carouselBodyRef,
        })}
      >
        <CarouselBodyItems>
          <CarouselBodyItemsTextWrapper>
            <CarouselBodyItemsTitle>CREAM Fields</CarouselBodyItemsTitle>
            <br />
            <CarouselBodyItemsContent>
              VIP Invitatation 및 Private Place
            </CarouselBodyItemsContent>
          </CarouselBodyItemsTextWrapper>
          <CarouselBodyIcon />
        </CarouselBodyItems>

        <CarouselBodyItems>
          <CarouselBodyItemsTextWrapper>
            <CarouselBodyItemsTitle>OKRA LOUNGE BAR</CarouselBodyItemsTitle>
            <br />
            <CarouselBodyItemsContent>
              VIP Invitatation 및 Private Place
            </CarouselBodyItemsContent>
          </CarouselBodyItemsTextWrapper>
          <CarouselBodyIcon />
        </CarouselBodyItems>

        <CarouselBodyItems>
          <CarouselBodyItemsTextWrapper>
            <CarouselBodyItemsTitle>OKRA 해변 파티</CarouselBodyItemsTitle>
            <br />
            <CarouselBodyItemsContent>
              VIP Invitatation 및 Private Place
            </CarouselBodyItemsContent>
          </CarouselBodyItemsTextWrapper>
          <CarouselBodyIcon />
        </CarouselBodyItems>

        <CarouselBodyItems>
          <CarouselBodyItemsTextWrapper>
            <CarouselBodyItemsTitle>CREAM Fields</CarouselBodyItemsTitle> <br />
            <CarouselBodyItemsContent>
              VIP Invitatation 및 Private Place
            </CarouselBodyItemsContent>
          </CarouselBodyItemsTextWrapper>
          <CarouselBodyIcon />
        </CarouselBodyItems>
      </CarouselBody>
    </CarouselItem>
  )
}

export default CarouselBenefit
