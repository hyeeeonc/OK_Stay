import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import CarouselBenefit from './carousel/CarouselBenefit'
import CarouselGallary from './carousel/CarouselGallary'
import CarouselInfo from './carousel/CarouselInfo'
import CarouselOkra from './carousel/CarouselOkra'
import CarouselPartners from './carousel/CarouselPartners'
import CarouselQnA from './carousel/CarouselQnA'
import CarouselRoadmap from './carousel/CarouselRoadmap'

const CarouselBlock = styled.div`
  height: 610px;
  display: flex;
  align-items: center;
`

const CarouselWrapper = styled.div`
  display: flex;
  padding-left: calc(50vw - 508px);
`

const MainCarousel2: FunctionComponent = function () {
  const carouselBlock = useRef<HTMLDivElement>(null)
  const [carouselScroll, setCarouselScroll] = useState<number>(0)

  useEffect(() => {
    let sliderWidth
    let current = 0
    let target = 0
    const ease = 0.1

    const setter = (start: number, end: number, t: number): number => {
      return start * (1 - t) + end * t
    }

    const init = () => {
      sliderWidth = carouselBlock.current.getBoundingClientRect().width
      document.body.style.height = `${
        sliderWidth - (window.innerWidth - window.innerHeight)
      }px`
    }

    const animate = () => {
      current = Math.round(setter(current, target, ease) * 1e2) / 1e2
      target = window.scrollY
      setCarouselScroll(current)
      requestAnimationFrame(animate)
    }
    init()
    animate()
  }, [])

  return (
    <CarouselBlock
      ref={carouselBlock}
      className="slider"
      style={{ transform: `translateX(-${carouselScroll}px)` }}
    >
      <CarouselWrapper>
        <CarouselOkra page={carouselPage} />
        <CarouselBenefit page={carouselPage} />
        <CarouselRoadmap page={carouselPage} />
        <CarouselInfo page={carouselPage} />
        <CarouselQnA page={carouselPage} />
        <CarouselGallary page={carouselPage} />
        <CarouselPartners page={carouselPage} />
      </CarouselWrapper>
    </CarouselBlock>
  )
}

export default MainCarousel2
