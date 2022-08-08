import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import MobileItems from './MobileItems'

const MobileMainContainer = styled.div`
  width: 500px;
  max-width: 500px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const BackgroundCircle = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  background-color: #a058ed;
  border-radius: 50%;
  @keyframes tutsFade {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(700px, 70px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  animation: tutsFade 100s infinite linear;
`

const BackgroundTri = styled.div`
  position: absolute;
  left: 100px;
  transition: all 1500ms ease 0s;
`

const BackgroundRec = styled.div`
  position: absolute;
  transition: all 1500ms ease 0s;
`

const Footer = styled.div`
  position: fixed;
  background-color: black;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: 0;
`

const MobileMain: FunctionComponent = function () {
  return (
    <MobileMainContainer>
      <BackgroundCircle />
      <MobileItems
        title="Okra Seoul Nft"
        content="다수의 페스티벌 파티의 인프라를 가진 OKRASEOUL이 제공하는 
Festival, Party, Lounge 에서 프라이빗한 공간을 독점적으로 사용할 수 있는 Membership NFT 입니다."
      />
      <Footer />
    </MobileMainContainer>
  )
}

export default MobileMain
