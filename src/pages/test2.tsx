import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import CarouselItems from 'components/index/CarouselItem'

const IndexWrapper = styled.main`
  height: calc(100vh - 56px);
  background-color: ${palette.gray[0]};
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
`

const Spacer = styled.div`
  height: 56px;
`

const IndexPage: FunctionComponent = function () {
  const mainRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    mainRef.current.addEventListener(
      'wheel',
      e => {
        e.preventDefault()
      },
      { passive: false },
    )
  }, [scroll])

  return (
    <>
      <Global styles={reset} />
      <Header />
      <Spacer />
      <IndexWrapper ref={mainRef}>
        <CarouselItems></CarouselItems>
        <CarouselItems></CarouselItems>
      </IndexWrapper>
    </>
  )
}

export default IndexPage
