import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import CarouselItems from './CarouselItem'

const CarouselBlock = styled.div`
  height: 610px;
  transition: all 1500ms ease 0s;
`

const CarouselWrapper = styled.div`
  display: flex;
  padding-left: calc(50vw - 508px);
`

let isScrollable = true

const MainCarousel3: FunctionComponent = function () {
  const carouselBlock = useRef<HTMLDivElement>(null)
  const [carouselPage, setCarouselPage] = useState<number>(0)
  // const [isScrollable, setScrollable] = useState<boolean>(true)
  const [xTrans, setXTrans] = useState<number>(0)

  // const init = () => {
  //   // let totalWidth: number
  //   const pageWidth: number = 1016 + (window.innerWidth / 2 - 508 - 200)
  //   setXTrans(_ => pageWidth)
  //   // totalWidth = carouselBlock.current.getBoundingClientRect().width

  //   return pageWidth
  // }

  const prevPage = () => {
    if (carouselPage === 0) {
      return
    } else {
      setCarouselPage(cp => cp - 1)
    }
    console.log('이전')
  }

  const nextPage = () => {
    if (carouselPage === 6) {
      return
    } else {
      setCarouselPage(cp => cp + 1)
    }
    console.log('다음')
  }

  useEffect(() => {
    console.log(carouselPage)
    const widtttttt: number =
      carouselPage * (1016 + window.innerWidth / 2 - 508 - 200)
    setXTrans(_ => widtttttt)
    console.log(xTrans)
  }, [carouselPage, xTrans])

  useEffect(() => {
    carouselBlock.current.addEventListener('wheel', e => {
      e.preventDefault()
    })
  }, [])

  const scrollHandler = (e: React.WheelEvent) => {
    if (!isScrollable) {
      return
    }
    if (e.deltaY > 0) {
      nextPage()
    } else {
      prevPage()
    }
    isScrollable = false
    setTimeout(() => (isScrollable = true), 1500)
  }

  return (
    <CarouselBlock
      ref={carouselBlock}
      className="slider"
      onWheel={scrollHandler}
      style={{ transform: `translate3d(-${xTrans}px, 0px, 0px)` }}
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

export default MainCarousel3
