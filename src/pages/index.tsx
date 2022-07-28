import React, { FunctionComponent, useEffect, useRef } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import CarouselItems from 'components/index/CarouselItem'

const IndexWrapper = styled.main`
  height: calc(100vh - 56px);
  background-color: ${palette.gray[0]};
  overflow: hidden;
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
      <IndexWrapper></IndexWrapper>
    </>
  )
}

export default IndexPage
