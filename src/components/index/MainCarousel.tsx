import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import CarouselBenefit from './carousel/CarouselBenefit'
import CarouselGallary from './carousel/CarouselGallary'
import CarouselProcess from './carousel/CarouselProcess'
import CarouselOkra from './carousel/CarouselOkra'
import CarouselPartners from './carousel/CarouselPartners'
import CarouselQnA from './carousel/CarouselQnA'
import CarouselRoadmap from './carousel/CarouselRoadmap'
import {
  InnerScrollHandlerParams,
  InnerCarouselPageHandlerParams,
} from './carousel/CarouselItem'

const MainContainer = styled.div`
  height: 100%;
`

const CarouselBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1500ms ease 0s;
`

const CarouselWrapper = styled.div`
  display: flex;
  padding-left: calc(50vw - 508px);
  @media (max-width: 1199px) {
    padding-left: calc(50vw - 365px);
  }
`

const BackgroundCircle = styled.div`
  position: fixed;
  background-color: #a058ed;
  border-radius: 50%;
  transition: all 1500ms ease 0s;
`

const BackgroundTri = styled.div`
  position: absolute;
  left: 100px;
  transition: all 1500ms ease 0s;
`

const BackgroundRec = styled.div`
  position: absolute;
  transition: all 1500ms ease 0s;
`

let isScrollable = true

type TouchPosition = {
  x: number
  y: number
}

interface MainCarouselProps {
  headerPage: number
}

const MainCarousel: FunctionComponent<MainCarouselProps> = function ({
  headerPage,
}) {
  const carouselBlock = useRef<HTMLDivElement>(null)
  const [touchPos, setTouchPos] = useState<TouchPosition>({ x: 0, y: 0 })
  const [carouselPage, setCarouselPage] = useState<number>(0)
  const [xTrans, setXTrans] = useState<number>(0)
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: null,
    height: null,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const nextInnerPage =
    ({ innerPage, setInnerPage, end }: InnerCarouselPageHandlerParams) =>
    () => {
      if (!isScrollable) return
      if (innerPage >= end) {
        nextPage()
        setInnerPage(_ => 0)
        isScrollable = false
        setTimeout(() => (isScrollable = true), 1500)
      } else {
        setInnerPage(ip => ip + 1)
        isScrollable = false
        setTimeout(() => (isScrollable = true), 300)
      }
    }

  const prevInnerPage =
    ({ innerPage, setInnerPage, end }: InnerCarouselPageHandlerParams) =>
    () => {
      if (!isScrollable) return
      if (innerPage <= 0) {
        prevPage()
        isScrollable = false
        setTimeout(() => (isScrollable = true), 1500)
      } else {
        setInnerPage(ip => ip - 1)
        isScrollable = false
        setTimeout(() => (isScrollable = true), 300)
      }
    }

  const [scrollTimeChecker, setScrollTimeChecker] = useState<Date>(new Date())
  const innerScrollHandler =
    ({ innerScrollHeight, setInnerScroll, ref }: InnerScrollHandlerParams) =>
    (e: React.WheelEvent) => {
      setInnerScroll(is => {
        const newInnerScroll = is + e.deltaY
        const now = new Date()
        const timeDiff: number = now.getTime() - scrollTimeChecker.getTime()

        setScrollTimeChecker(_ => now)

        if (newInnerScroll >= innerScrollHeight) {
          if (is >= innerScrollHeight && timeDiff >= 100) {
            if (!isScrollable) {
              return innerScrollHeight
            }
            ref.current.scrollTo(0, 0)
            nextPage()
            return 0
          } else {
            return innerScrollHeight
          }
        } else if (newInnerScroll <= 0) {
          if (is <= 0 && timeDiff >= 100) {
            if (!isScrollable) {
              return 0
            }
            ref.current.scrollTo(0, 0)
            prevPage()
            return 0
          } else {
            return 0
          }
        }

        return newInnerScroll
      })
    }

  const nextPage = () => {
    if (carouselPage === 6) {
      return
    } else {
      setCarouselPage(cp => cp + 1)
      isScrollable = false
      setTimeout(() => (isScrollable = true), 1500)
    }
  }

  const prevPage = () => {
    if (carouselPage === 0) {
      return
    } else {
      setCarouselPage(cp => cp - 1)
      isScrollable = false
      setTimeout(() => (isScrollable = true), 1500)
    }
  }

  const getIsScrollable = (bool: boolean) => {
    isScrollable = bool
  }

  useEffect(() => {
    if (headerPage != null) {
      const pageSet = headerPage
      setCarouselPage(pageSet)
    }
  }, [headerPage])

  useEffect(() => {
    let nowPageWidth: number

    if (windowSize.width > 1450) {
      nowPageWidth = carouselPage * (1016 + windowSize.width / 2 - 508 - 200)
    } else if (windowSize.width > 1199) {
      nowPageWidth = carouselPage * (1016 + windowSize.width / 2 - 508 - 80)
    } else if (windowSize.width > 970) {
      nowPageWidth = carouselPage * (730 + windowSize.width / 2 - 365 - 60)
    } else if (windowSize.width > 767) {
      nowPageWidth = carouselPage * (730 + windowSize.width / 2 - 365 - 15)
    }
    setXTrans(_ => nowPageWidth)
  }, [carouselPage, xTrans, windowSize])

  const scrollHandler =
    (ref: React.RefObject<HTMLDivElement>) => (e: React.WheelEvent) => {
      if (!isScrollable) return

      if (e.deltaY > 15) {
        nextPage()
      } else if (e.deltaY < -15) {
        prevPage()
      } else {
        return
      }
      ref.current.scrollTo(0, 0)
    }

  const defaultScrollHandler = (e: React.WheelEvent) => {
    if (!isScrollable) return

    if (e.deltaY > 15) {
      nextPage()
    } else if (e.deltaY < -15) {
      prevPage()
    } else {
      return
    }
  }

  const touchStart = (e: React.TouchEvent) => {
    if (!isScrollable) return
    setTouchPos({
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY,
    })
  }

  const touchEnd = (e: React.TouchEvent) => {
    if (!isScrollable) return

    const changedX: number = touchPos.x - e.changedTouches[0].pageX
    const changedY: number = touchPos.y - e.changedTouches[0].pageY

    if (changedX > 30) {
      nextPage()
      isScrollable = false
      setTimeout(() => (isScrollable = true), 1500)
    } else if (changedX < -30) {
      prevPage()
      isScrollable = false
      setTimeout(() => (isScrollable = true), 1500)
    }
  }

  return (
    <MainContainer>
      <BackgroundTri
        style={{
          top: `calc(100vh / 3)`,
          transform: `rotate(-${carouselPage * 20}deg) translate3d(-${
            xTrans / 10
          }px, -${xTrans / 10}px, 0px)`,
          opacity: `calc(1 - ${carouselPage}/4)`,
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
          transform: `rotate(${carouselPage * 52}deg) translate3d(0px, ${
            xTrans / 10
          }px, 0px) scale(${carouselPage / 3})`,
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
          opacity: `calc(${carouselPage} /2 - 1)`,
          transform: `rotate(-${carouselPage * 40}deg) translate3d(${
            xTrans / 10
          }px, ${xTrans / 10}px, 0px) scale(${carouselPage / 3})`,
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
          }px, 0px) scale(-${carouselPage / 5})`,
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
          }px, 0px) scale(${carouselPage / 2})`,
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
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        style={{ transform: `translate3d(-${xTrans}px, 0px, 0px)` }}
      >
        <CarouselWrapper>
          <CarouselOkra
            page={carouselPage}
            scrollHandler={defaultScrollHandler}
            touchStart={touchStart}
            touchEnd={touchEnd}
          />

          <CarouselBenefit
            touchStart={touchStart}
            touchEnd={touchEnd}
            scrollHandler={scrollHandler}
            page={carouselPage}
            innerScrollHandler={innerScrollHandler}
          />

          <CarouselRoadmap
            touchStart={touchStart}
            touchEnd={touchEnd}
            scrollHandler={scrollHandler}
            page={carouselPage}
            innerScrollHandler={innerScrollHandler}
          />

          <CarouselProcess
            touchStart={touchStart}
            touchEnd={touchEnd}
            scrollHandler={scrollHandler}
            page={carouselPage}
            innerScrollHandler={innerScrollHandler}
          />

          <CarouselQnA
            page={carouselPage}
            touchStart={touchStart}
            touchEnd={touchEnd}
            scrollHandler={scrollHandler}
            innerScrollHandler={innerScrollHandler}
          />

          <CarouselGallary
            touchStart={touchStart}
            touchEnd={touchEnd}
            scrollHandler={scrollHandler}
            page={carouselPage}
            nextInnerPage={nextInnerPage}
            prevInnerPage={prevInnerPage}
          />

          <CarouselPartners
            touchStart={touchStart}
            touchEnd={touchEnd}
            scrollHandler={defaultScrollHandler}
            page={carouselPage}
          />
        </CarouselWrapper>
      </CarouselBlock>
    </MainContainer>
  )
}

export default MainCarousel
