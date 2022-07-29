import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'
import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import CarouselItems from 'components/index/CarouselItem'

import { useSpringCarousel } from 'react-spring-carousel'

const IndexWrapper = styled.main`
  height: calc(100vh - 56px);
  background-color: ${palette.gray[0]};
  // background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spacer = styled.div`
  height: 56px;
`

const TestPage: FunctionComponent = function () {
  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    ref.current.addEventListener('wheel', e => {
      e.preventDefault()
    })
  }, [])

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      gutter: 36,
      itemsPerSlide: 1,
      startEndGutter: 36,
      items: Array.from({ length: 7 }).map((_, index) => ({
        id: index.toString(),
        renderItem: <CarouselItems></CarouselItems>,
      })),
    })

  const [scroll, setScroll] = useState<number>(0)

  const scrollHandler = (e: React.WheelEvent) => {
    e.preventDefault()
    setScroll(sc => sc + e.deltaY)
    console.log(scroll)
    if (scroll > 520) {
      slideToNextItem()
      setScroll(_ => 0)
    } else if (scroll < -300) {
      slideToPrevItem()
      setScroll(_ => 0)
    }
  }

  return (
    <>
      <Global styles={reset} />
      <Header />
      <Spacer />
      <IndexWrapper ref={ref} onWheel={scrollHandler}>
        {carouselFragment}
      </IndexWrapper>
    </>
  )
}

export default TestPage
