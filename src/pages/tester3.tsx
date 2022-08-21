import React, { FunctionComponent } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import reset from '../../lib/styles/global'

const HH = styled.div`
  height: 56px;
  width: 100%;
  background-color: yellow;
`

const Container = styled.div`
  width: 100%:
  height: calc(100vh - calc(100vh - 100%));
`

const Top50 = styled.div`
  position: fixed;
  width: 100%;
  height: 5px;
  background-color: blue;
  left: 0;
  top: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 + 56px);
`

const Bottom50 = styled.div`
  position: fixed;
  width: 100%;
  height: 5px;
  background-color: red;
  left: 0;
  bottom: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2);
`
const Tester: FunctionComponent = function () {
  return (
    <>
      <Global styles={reset} />

      <Container>
        <HH />
        <Top50 />
        <Bottom50 />
      </Container>
    </>
  )
}

export default Tester
