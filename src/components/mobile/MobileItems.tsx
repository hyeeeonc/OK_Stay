import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

const MobileItem = styled.section`
  background: rgba(255, 255, 255, 0.26);
  border-radius: 34px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.34);

  flex: none;
  width: calc(100% - 40px);
  margin-top: 32px;
`

const MobileItemTitleWrapper = styled.div`
  margin: 60px 24px 0px 24px;
  flex: none;
  width: 100%;

  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const MobileItemBody = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;

  margin: 32px 24px 0px 24px;

  color: #c9c9c9;

  flex: none;
`

interface MobileItemsProps {
  title: string
  content: string
}

const MobileItems: FunctionComponent<MobileItemsProps> = function ({
  title,
  content,
}) {
  return (
    <MobileItem>
      <MobileItemTitleWrapper>{title}</MobileItemTitleWrapper>
      <MobileItemBody>{content}</MobileItemBody>
    </MobileItem>
  )
}

export default MobileItems
