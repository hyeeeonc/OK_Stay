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
  @media (max-width: 1199px) {
    width: 310px;
    height: 56px;
    border-radius: 9px;

    left: calc(50vw + 365px - 310px);
    top: calc(50vh + 210px + 22px);
  }
`

const MintButton: FunctionComponent<{ dday: number }> = function ({ dday }) {
  return (
    <MintButtonBlock>
      {dday === 0 ? `민팅하러가기` : `${dday}일 뒤 공개예정`}
    </MintButtonBlock>
  )
}

export default MintButton
