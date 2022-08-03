import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import palette from '../../../lib/styles/palette'

const MintButtonBlock = styled.div`
  position: absolute;
  left: calc(50vw + 508px - 400px);
  top: calc(50vh + 310px + 13px);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 400px;
  height: 64px;

  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  flex: none;
  order: 1;
  flex-grow: 0;
`

const MintButton: FunctionComponent = function () {
  return <MintButtonBlock>몇일뒤 공개예정</MintButtonBlock>
}

export default MintButton
