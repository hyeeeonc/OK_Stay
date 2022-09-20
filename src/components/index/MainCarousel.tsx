import styled from '@emotion/styled'
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import CarouselBenefit from './carousel/CarouselBenefit'
import CarouselProcess from './carousel/CarouselProcess'
import CarouselOkra from './carousel/CarouselOkra'
import CarouselPartners from './carousel/CarouselPartners'
import CarouselQnA from './carousel/CarouselQnA'
import CarouselRoadmap from './carousel/CarouselRoadmap'
import CarouselArticle from './carousel/CarouselArticle'

import MouseIndicator from './MouseIndicator'
import { Language } from 'types/common/language'
import { CarouselContext } from 'hooks/contexts/CarouselProvider'

const MainContainer = styled.div`
  height: 100%;
`

const CarouselBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1500ms ease 0s;
  will-change: content;
`

const CarouselWrapper = styled.div`
  display: flex;
  padding-left: calc(50vw - 508px);
  @media (max-width: 1199px) {
    padding-left: calc(50vw - 365px);
  }

  @media (max-height: 900px) {
    padding-left: calc(50vw - 365px);
  }
`

const BackgroundCircle = styled.div`
  position: fixed;
  background-color: #a058ed;
  border-radius: 50%;
  transition: all 1500ms ease 0s;
  will-change: content;
`

const BackgroundTri = styled.div`
  position: absolute;
  left: 100px;
  transition: all 1500ms ease 0s;
  will-change: content;
`

const MainCarousel = () => {
  const carouselBlock = useRef<HTMLDivElement>(null)
  const [xTrans, setXTrans] = useState<number>(0)
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: null,
    height: null,
  })

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calcPageWidth = useCallback(
    (cp: number) => {
      if (windowSize.height > 901) {
        if (windowSize.width > 1450) {
          return cp * (1016 + windowSize.width / 2 - 508 - 200)
        } else if (windowSize.width > 1199) {
          return cp * (1016 + windowSize.width / 2 - 508 - 80)
        } else if (windowSize.width > 970) {
          return cp * (730 + windowSize.width / 2 - 365 - 60)
        } else if (windowSize.width > 767) {
          return cp * (730 + windowSize.width / 2 - 365 - 15)
        }
      } else {
        if (windowSize.width > 970) {
          return cp * (730 + windowSize.width / 2 - 365 - 60)
        } else if (windowSize.width > 767) {
          return cp * (730 + windowSize.width / 2 - 365 - 15)
        }
      }
      return 0
    },
    [windowSize],
  )

  const { page } = useContext(CarouselContext)
  useEffect(() => {
    setXTrans(calcPageWidth(page))
  }, [page, xTrans, windowSize])

  return (
    <MainContainer>
      <BackgroundTri
        style={{
          top: `calc(100vh / 3)`,
          transform: `rotate(-${page * 20}deg) translate3d(-${
            xTrans / 10
          }px, -${xTrans / 10}px, 0px)`,
          opacity: `calc(1 - ${page}/4)`,
        }}
      >
        <svg
          width="373"
          height="373"
          viewBox="0 0 373 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M357.236 90.3387C372.107 94.3235 377.088 112.913 366.202 123.799L123.499 366.502C112.612 377.389 94.0231 372.408 90.0383 357.536L1.20298 25.9983C-2.7818 11.1269 10.8265 -2.48136 25.6979 1.50342L357.236 90.3387Z"
            fill="#F26638"
          />
        </svg>
      </BackgroundTri>

      <BackgroundTri
        style={{
          top: `calc(100vh / 2)`,
          left: `calc(100vw - 200px)`,
          transform: `rotate(${page * 52}deg) translate3d(0px, ${
            xTrans / 10
          }px, 0px) scale(${page / 3})`,
        }}
      >
        <svg
          width="144"
          height="148"
          viewBox="0 0 144 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M143.437 141.58C144.181 145.009 140.935 147.958 137.593 146.888L3.40367 103.934C0.0619806 102.864 -0.868605 98.5781 1.72861 96.2189L106.023 1.4846C108.62 -0.874547 112.797 0.462561 113.542 3.89139L143.437 141.58Z"
            fill="#F26638"
          />
        </svg>
      </BackgroundTri>

      <BackgroundCircle
        style={{
          width: 100,
          height: 100,
          top: `calc(20vh)`,
          left: `calc(20vw)`,
          opacity: `calc(${page} /2 - 1)`,
          transform: `rotate(-${page * 40}deg) translate3d(${xTrans / 10}px, ${
            xTrans / 10
          }px, 0px) scale(${page / 3})`,
        }}
      />

      <BackgroundCircle
        style={{
          width: 200,
          height: 200,
          top: `calc(70vh)`,
          left: `calc(30vw)`,
          transform: ` translate3d(${xTrans / 7}px, -${
            xTrans / 11
          }px, 0px) scale(-${page / 5})`,
        }}
      />

      <BackgroundCircle
        style={{
          width: 130,
          height: 130,
          top: `calc(60vh)`,
          left: `calc(90vw)`,
          transform: ` translate3d(-${xTrans / 7}px, -${
            xTrans / 20
          }px, 0px) scale(${page / 2})`,
        }}
      />

      <BackgroundCircle
        style={{
          width: 210,
          height: 210,
          top: `calc(50vh)`,
          left: `calc(70vw)`,
          transform: ` translate3d(${xTrans / 10}px, ${xTrans / 10}px, 0px) `,
        }}
      />

      <CarouselBlock
        ref={carouselBlock}
        style={{ transform: `translate3d(-${xTrans}px, 0px, 0px)` }}
      >
        <CarouselWrapper>
          <CarouselOkra />
          <CarouselBenefit />
          <CarouselRoadmap />
          <CarouselProcess />
          <CarouselQnA />
          <CarouselArticle />
          <CarouselPartners />
        </CarouselWrapper>
      </CarouselBlock>
      <MouseIndicator />
    </MainContainer>
  )
}

export default MainCarousel
