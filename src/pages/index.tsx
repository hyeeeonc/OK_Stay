import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import MainCarousel3 from 'components/index/MainCarousel3'

const IndexWrapper = styled.main`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 56px);
  background-color: ${palette.gray[0]};
  display: flex;
  align-items: center;
`

const Spacer = styled.div`
  height: 56px;
`

const IndexPage: FunctionComponent = function () {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <Spacer />
      <IndexWrapper>
        <MainCarousel3 />
      </IndexWrapper>
    </>
  )
}

export default IndexPage
