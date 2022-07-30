import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import MainCarousel2 from 'components/index/MainCarousel2'

const IndexWrapper = styled.main`
  position: fixed;
  top: 56px;
  left: 0;
  height: calc(100vh - 56px);
  background-color: ${palette.gray[0]};
  overflow: hidden;
  display: flex;
  align-items: center;
`

const Spacer = styled.div`
  height: 56px;
`

const IndexPage: FunctionComponent = function () {
  const [mainScroll, setMainScroll] = useState<number>(0)
  // const [benefitScroll, setBenefitScroll] = useState<number>(0)
  // const [roadmapScroll, setRoadmapScroll] = useState<number>(0)

  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mainRef.current.addEventListener('wheel', e => e.preventDefault())
  }, [])

  const scrollHandler = (e: React.WheelEvent) => {
    const delta = Math.max(-1, Math.min(1, e.deltaY || -e.detail))
    const scrollSpeed = 60

    setMainScroll(ms => {
      const newMainScroll = ms + delta * scrollSpeed
      if (newMainScroll < 0) {
        return 0
      } else if (newMainScroll > 6000) {
        return 6000
      } else {
        return newMainScroll
      }
    })
  }
  // const scrollHandler = (e: React.WheelEvent) => {
  //   setMainScroll(ms => {
  //     const newMainScroll = ms + e.deltaY
  //     if (newMainScroll < 0) {
  //       return 0
  //     } else if (newMainScroll > 6000) {
  //       return 6000
  //     } else {
  //       return newMainScroll
  //     }
  //   })
  // }
  return (
    <>
      <Global styles={reset} />
      <Header />
      <Spacer />
      <IndexWrapper ref={mainRef} onWheel={scrollHandler}>
        <MainCarousel2 cs={mainScroll} />
      </IndexWrapper>
    </>
  )
}

export default IndexPage
