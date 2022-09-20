import React, { FunctionComponent } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import MainCarousel from 'components/index/MainCarousel'
import MobileMain from 'components/mobile/MobileMain'
import DropDown from 'components/index/DropDown'
import ContactModal from 'components/index/modal/ContactModal'
import ArticleModal from 'components/index/modal/ArticleModal'
import QnAModal from 'components/index/modal/QnAModal'
import MintButton from 'components/index/MintButton'

import { useMediaQuery } from 'react-responsive'
import MobileHeader from 'components/common/MobileHeader'
import { Indicator } from 'components/index/Indicator'
import AppContextProvider from 'hooks/contexts/AppContextProvider'

const IndexWrapper = styled.main`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  height: calc(calc(100vh - calc(100vh - 100%)) - 56px);
  background-color: ${palette.gray[0]};
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`

const MobileIndexWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Spacer = styled.div`
  height: 56px;
  @media (max-width: 767px) {
    height: 48px;
  }
`

const IndexPage: FunctionComponent = function () {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  return (
    <AppContextProvider>
      <Global styles={reset} />
      {isPc && (
        <>
          <Header headerMode={'DETAIL'} />
          <Spacer />

          <IndexWrapper>
            <MainCarousel />
            <DropDown dropDownMode={'MAIN'} />
            <MintButton />
            <ContactModal />
            <QnAModal />
            <ArticleModal />
            <Indicator />
          </IndexWrapper>
        </>
      )}

      {isMobile && (
        <>
          <MobileHeader headerMode={'DETAIL'} />
          <Spacer />
          <MobileIndexWrapper>
            <ContactModal />
            <ArticleModal />
            <QnAModal />
            <MobileMain />
          </MobileIndexWrapper>
          <DropDown dropDownMode={'MAIN'} />
          <MintButton />
        </>
      )}
    </AppContextProvider>
  )
}

export default IndexPage
