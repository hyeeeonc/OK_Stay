import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import MobileBenefit from './mobileItems/MobileBenefit'
import { Language } from 'types/common/language'
import { ArticleType } from 'types/index/carousel/Article'
import MobileOkra from './mobileItems/MobileOkra'
import MobileProcess from './mobileItems/MobileProcess'
import MobileRoadmap from './mobileItems/MobileRoadmap'
import MobileQnA from './mobileItems/MobileQnA'
import MobileArticle from './mobileItems/MobileArticle'

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
  border-radius: 50%;
  @keyframes tutsFade {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(100vw, 10vh);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @keyframes bottomToHigh {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(50px, -30vh);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`

const BackgroundTri = styled.div`
  position: fixed;
  left: -100px;
  top: 230px;
  transition: all 1500ms ease 0s;
  opacity: 0.8;

  @keyframes topToBottom {
    0% {
      transform: rotate(0deg);
      top: 230px;
    }
    50% {
      transform: rotate(180deg);
      top: calc(100vh - 140px);
    }
    100% {
      transform: rotate(0deg);
      top: 230px;
    }
  }

  animation: topToBottom 100s infinite linear;
`

const Hider = styled.div``
const HiderBottom = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;

  width: 100%;
  height: 48px;

  background: #121212;
`

const HiderTop = styled.div`
  position: fixed;
  bottom: 48px;
  left: 0px;

  width: 100%;
  height: 26px;

  background: linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0) 100%);

  transform: rotate(-180deg);
`

const BottomSpacer = styled.div`
  width: 100%;
  height: 60px;
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
  articleModalOpenHandler(article: ArticleType): React.MouseEventHandler
}

const MobileMain: FunctionComponent<MobileMainProps> = function ({
  language,
  articleModalOpenHandler,
}) {
  return (
    <MobileMainContainer>
      <BackgroundCircle
        style={{
          backgroundColor: '#a058ed',
          left: '-100px',
          top: '-30px',
          animation: 'tutsFade 100s infinite linear',
        }}
      />

      <BackgroundCircle
        style={{
          backgroundColor: '#54FF7F',
          right: '-100px',
          bottom: '50px',
          animation: 'bottomToHigh 100s infinite linear',
          opacity: 0.8,
        }}
      />

      <BackgroundTri>
        <svg
          width="200"
          height="200"
          viewBox="0 0 144 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M143.437 141.58C144.181 145.009 140.935 147.958 137.593 146.888L3.40367 103.934C0.0619806 102.864 -0.868605 98.5781 1.72861 96.2189L106.023 1.4846C108.62 -0.874547 112.797 0.462561 113.542 3.89139L143.437 141.58Z"
            fill="#54FF7F"
          />
        </svg>
      </BackgroundTri>

      <MobileOkra language={language} />
      <MobileBenefit language={language} />
      <MobileRoadmap language={language} />
      <MobileProcess language={language} />
      <MobileQnA language={language} />
      <MobileArticle
        language={language}
        articleModalOpenHandler={articleModalOpenHandler}
      />

      <BottomSpacer />

      <Hider>
        <HiderTop />
        <HiderBottom />
      </Hider>
    </MobileMainContainer>
  )
}

export default MobileMain
