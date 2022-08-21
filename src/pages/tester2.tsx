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

const Top50 = styled.div`
  position: fixed;
  width: 100%;
  height: 5px;
  background-color: blue;
  left: 0;
  top: 50vh;
`

const Bottom50 = styled.div`
  position: fixed;
  width: 100%;
  height: 5px;
  background-color: red;
  left: 0;
  bottom: 50vh;
`
const Tester2: FunctionComponent = function () {
  return (
    <>
      <Global styles={reset} />

      <HH />
      <Top50 />
      <Bottom50 />
    </>
  )
}

export default Tester2
