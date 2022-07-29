import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import MainCarousel from 'components/index/MainCarousel'

const IndexWrapper = styled.main`
  height: calc(100vh - 56px);
  background-color: ${palette.gray[0]};
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
`

const Spacer = styled.div`
  height: 56px;
`

const IndexPage: FunctionComponent = function () {
  const [mainScroll, setMainScroll] = useState<number>(0)
  // const [benefitScroll, setBenefitScroll] = useState<number>(0)
  // const [roadmapScroll, setRoadmapScroll] = useState<number>(0)

  const mainRef = useRef<HTMLDivElement>()

  useEffect(() => {
    mainRef.current.addEventListener('wheel', e => {
      e.preventDefault()
      if (mainScroll < 0) {
        setMainScroll(0)
      } else if (mainScroll > 1891) {
        setMainScroll(1891)
      } else {
        setMainScroll(ms => ms + e.deltaY)
      }
    })
  })

  return (
    <>
      <Global styles={reset} />
      <Header />
      <Spacer />
      <IndexWrapper ref={mainRef}>
        <MainCarousel cs={mainScroll} />
      </IndexWrapper>
    </>
  )
}

export default IndexPage
