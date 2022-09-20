import React, { FunctionComponent } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import minting from '../../lib/styles/minting'
import { Global } from '@emotion/react'

import { useMediaQuery } from 'react-responsive'
import MobileHeader from 'components/common/MobileHeader'
import { Link } from 'gatsby'
import DropDown from 'components/index/DropDown'
import LanguageProvider from 'hooks/contexts/LanguageProvider'
import MintingPageBodyWrapper from 'components/minting/MintingPageBodyWrapper'

const Spacer = styled.div`
  height: 56px;
  @media (max-width: 767px) {
    height: 48px;
  }
`

const MintingPageButton = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 36px;
  right: calc(50vw - 845px / 2 + 1px);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 704px;
  height: 64px;
  padding: 0px 32px;

  background: #2e2d2d;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: #ffffff;

  cursor: pointer;

  @media (max-width: 900px) {
    width: calc(704px - calc(900px - 100vw));
    right: 30px;
  }

  @media (max-width: 767px) {
    width: calc(704px - calc(900px - 100vw) + 32px);

    right: 20px;
    bottom: 26px;
    height: 48px;

    font-size: 18px;
  }
`

const MintingPageBottomGradient = styled.div`
  position: fixed;
  width: 100vw;
  height: 72px;
  left: 0;
  bottom: 0;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-180deg);

  @media (max-width: 767px) {
    height: 52px;
  }
`

const MintingPage: FunctionComponent = function () {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  return (
    <LanguageProvider>
      <Global styles={minting} />
      {isPc && (
        <>
          <Header headerMode={'SIMPLE'} />
          <Spacer />
        </>
      )}

      {isMobile && (
        <>
          <MobileHeader headerMode={'SIMPLE'} />
          <Spacer />
        </>
      )}

      <MintingPageBodyWrapper isPc={isPc} isMobile={isMobile} />
      <DropDown dropDownMode={'MINTING'} />
      <MintingPageButton>
        {isPc && 'NFT 민팅하기'}
        {isMobile && '링크 공유하기'}
      </MintingPageButton>
      <MintingPageBottomGradient />
    </LanguageProvider>
  )
}

export default MintingPage
