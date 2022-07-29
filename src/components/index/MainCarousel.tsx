import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef } from 'react'

import CarouselItems from './CarouselItem'

const CarouselWrapper = styled.div`
  display: flex;
  width: calc((1016px * 7) + (50vw - 508px - 200px) * 6);
  margin-left: calc(50vw - 508px);
  overflow-x: scroll;
`

interface MainCarouselProps {
  cs: number
}

const MainCarousel: FunctionComponent<MainCarouselProps> = function ({ cs }) {
  let carouselScroll: number = cs
  const mainCarousel = useRef<HTMLDivElement>(null)

  // parallax.current.container.current.scrollLeft += evt.deltaY

  useEffect(() => {
    console.log(carouselScroll)
    console.log(mainCarousel.current.style.width)
    console.log(mainCarousel.current.scrollLeft)

    mainCarousel.current.scrollLeft = carouselScroll
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
      <CarouselItems title="Okra Seoul NFT" />
      <CarouselItems title="NFT Benefit" />
      <CarouselItems title="Roadmap" />
      <CarouselItems title="Infomation" />
      <CarouselItems title="QnA" />
      <CarouselItems title="Gallary" />
      <CarouselItems title="Partners" />
    </CarouselWrapper>
  )
}

export default MainCarousel
