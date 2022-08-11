import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import MobileBenefit from './mobileItems/MobileBenefit'
import { Language } from 'types/common/language'
import MobileOkra from './mobileItems/MobileOkra'
import MobileProcess from './mobileItems/MobileProcess'
import MobileRoadmap from './mobileItems/MobileRoadmap'

const MobileMainContainer = styled.div`
  width: 500px;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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

// const Footer = styled.div`
//   position: fixed;
//   background-color: black;
//   width: 100%;
//   height: 100px;
//   left: 0;
//   bottom: 0;
// `

interface MobileMainProps {
  language: Language
}

const MobileMain: FunctionComponent<MobileMainProps> = function ({ language }) {
  return (
    <MobileMainContainer>
      <BackgroundCircle />
      <MobileOkra />
      <MobileBenefit language={language} />
      <MobileRoadmap language={language} />
      <MobileProcess language={language} />
    </MobileMainContainer>
  )
}

export default MobileMain
