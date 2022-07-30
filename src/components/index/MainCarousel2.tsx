import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import CarouselItems from './CarouselItem'

const CarouselBlock = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  // width: calc( 1016px*7 + (50vw - 508px - 200px) * 6 + 50vw - 508px)
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

  // let slider = carouselBlock.current
  let sliderWidth
  let current = 0
  let target = 0
  const ease = 0.3

  const setter = (start: number, end: number, t: number): number => {
    return start * (1 - t) + end * t
  }

  // const setTransform = (el, transform) => {
  //   el.style.transform = transform
  // }

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
    // console.log(current)
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    init()
    animate()
    console.log(carouselScroll)
  }, [])

  useEffect(() => {
    console.log(carouselScroll)
  }, [carouselScroll])

  return (
    <CarouselBlock
      ref={carouselBlock}
      style={{ transform: `translateX(-${carouselScroll}px)` }}
    >
      <CarouselWrapper>
        <CarouselItems title="Okra Seoul NFT" />
        <CarouselItems title="NFT Benefit" />
        <CarouselItems title="Roadmap" />
        <CarouselItems title="Infomation" />
        <CarouselItems title="QnA" />
        <CarouselItems title="Gallary" />
        <CarouselItems title="Partners" />
      </CarouselWrapper>
    </CarouselBlock>
  )
}

export default MainCarousel2
