import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef } from 'react'

import CarouselItems from './CarouselItem'

const CarouselBlock = styled.div`
  overflow-x: scroll;
  // scroll-behavior: smooth;
  height: calc(100vh - 56px);
  display: flex;
  align-items: center;
`

const CarouselWrapper = styled.div`
  display: flex;
  padding-left: calc(50vw - 508px);
  // scroll-snap-type: x proximity;
  // transition: 0.3s linear;
  // transition-delay: 0.05s;
  overflow-x: scroll;
`

interface MainCarouselProps {
  cs: number
}

const MainCarousel: FunctionComponent<MainCarouselProps> = function ({ cs }) {
  let carouselScroll: number = cs
  const mainCarousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(carouselScroll)
  })

  useEffect(() => {
    console.log(carouselScroll)
    console.log(mainCarousel.current.style.width)
    console.log(mainCarousel.current.scrollLeft)

    mainCarousel.current.scrollLeft = cs
    // mainCarousel.current.scrollTo({ left: cs, behavior: 'smooth' })
    console.log(mainCarousel.current.scrollLeft)
    // mainCarousel.current.style.transform = `translateX(-${cs})`

    if (carouselScroll < 0) {
      carouselScroll = 0
    } else if (carouselScroll > mainCarousel.current.offsetWidth) {
      carouselScroll = mainCarousel.current.offsetWidth
    }
  }, [carouselScroll])

  return (
    <CarouselWrapper ref={mainCarousel}>
      {/* <CarouselWrapper
        style={{ transform: `translateX(${-(carouselScroll / 6000) * 100}%)` }}
      > */}
      <CarouselItems title="Okra Seoul NFT" />
      <CarouselItems title="NFT Benefit" />
      <CarouselItems title="Roadmap" />
      <CarouselItems title="Infomation" />
      <CarouselItems title="QnA" />
      <CarouselItems title="Gallary" />
      <CarouselItems title="Partners" />
      {/* </CarouselWrapper> */}
    </CarouselWrapper>
  )
}

export default MainCarousel
