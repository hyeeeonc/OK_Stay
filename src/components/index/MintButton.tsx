import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import palette from '../../../lib/styles/palette'

const MintButtonBlock = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[0]};

  position: fixed;
  right: calc(50vw - 508px);
  bottom: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 310px - 105px);

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

    right: calc(50vw - 365px);
    bottom: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 220px - 97px);
    font-size: 16px;
  }

  @media (max-height: 900px) {
    width: 310px;
    height: 56px;
    border-radius: 9px;

    right: calc(50vw - 365px);
    bottom: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 220px - 97px);
    font-size: 16px;
  }

  @media (max-width: 767px) {
    width: 380px;
    height: 48px;

    bottom: 23px;
    right: calc(50vw - 231px);

    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    width: calc(100vw - 32px - 88px);
    right: 20px;
  }
`

const MintButton = () => {
  const [dday, setDday] = useState<number>(0)
  useEffect(() => {
    setDday(_ => {
      const today = new Date()
      const std = new Date('2022-10-30')
      const diff = std.getTime() - today.getTime()
      return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0
    })
  }, [])
  return (
    <MintButtonBlock>
      {dday === 0 ? `민팅하러가기` : `${dday}일 뒤 공개예정`}
    </MintButtonBlock>
  )
}

export default MintButton
