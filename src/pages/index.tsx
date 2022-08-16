import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
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
import MintButton from 'components/index/MintButton'

import { useMediaQuery } from 'react-responsive'
import { Language } from 'types/common/language'
import MobileHeader from 'components/common/MobileHeader'
import { ArticleType } from 'types/index/carousel/Article'

const IndexWrapper = styled.main`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 56px);
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

type ArticleModalType = ArticleType & { modalOpened: boolean }

const IndexPage: FunctionComponent = function () {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  const [carouselPageController, setCarouselPageController] =
    useState<number>(null)

  const getHeaderPageData = (page: number) => {
    setCarouselPageController(page)
  }

  useEffect(() => {
    if (carouselPageController === 0) {
      setCarouselPageController(null)
    }
  }, [carouselPageController])

  useEffect(() => {
    console.log(carouselPageController)
  }, [carouselPageController])

  const [dropDownOpened, setDropDownOpened] = useState<boolean>(false)

  const dropDownButtonHandler: React.MouseEventHandler = () => {
    setDropDownOpened(ddo => !ddo)
  }

  const [modalOpened, setModalOpened] = useState<boolean>(false)

  const modalCloseHandler: React.MouseEventHandler = () =>
    setModalOpened(_ => false)
  const modalOpenHandler: React.MouseEventHandler = () =>
    setModalOpened(_ => true)

  const [articleModal, setArticleModal] = useState<ArticleModalType>({
    title: '',
    content: '',
    image: '',
    modalOpened: false,
  })
  const articleModalOpenHandler =
    (article: ArticleType) => (e: React.MouseEvent) => {
      setArticleModal(_ => ({ ...article, modalOpened: true }))
    }

  const articleModalCloseHandler: React.MouseEventHandler = () =>
    setArticleModal(a => ({ ...a, modalOpened: false }))

  const [dday, setDday] = useState<number>(0)
  useEffect(() => {
    setDday(_ => {
      const today = new Date()
      const std = new Date('2022-08-30')
      const diff = std.getTime() - today.getTime()
      return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0
    })
  }, [])

  const [language, setLanguage] = useState<Language>('KOR')
  const changeLanguage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (language === 'KOR') {
      setLanguage(_ => 'ENG')
    } else if (language === 'ENG') {
      setLanguage(_ => 'KOR')
    }
  }

  return (
    <>
      <Global styles={reset} />
      {isPc && (
        <>
          <Header
            getHeaderPageData={getHeaderPageData}
            modalOpenHandler={modalOpenHandler}
            dday={dday}
            changeLanguage={changeLanguage}
            language={language}
            headerMode={'DETAIL'}
          />
          <Spacer />
          <IndexWrapper>
            <ContactModal
              modalCloseHandler={modalCloseHandler}
              modalOpened={modalOpened}
            ></ContactModal>
            <ArticleModal
              modalOpened={articleModal.modalOpened}
              modalCloseHandler={articleModalCloseHandler}
              title={articleModal.title}
              content={articleModal.content}
              image={articleModal.image}
            ></ArticleModal>
            <MainCarousel
              headerPage={carouselPageController}
              language={language}
              articleModalOpenHandler={articleModalOpenHandler}
            />
            <DropDown
              dropDownOpened={dropDownOpened}
              dropDownButtonHandler={dropDownButtonHandler}
            />
            <MintButton dday={dday} />
          </IndexWrapper>
        </>
      )}

      {isMobile && (
        <>
          <MobileHeader
            getHeaderPageData={getHeaderPageData}
            modalOpenHandler={modalOpenHandler}
            dday={dday}
            changeLanguage={changeLanguage}
            language={language}
          />
          <Spacer />
          <MobileIndexWrapper>
            <MobileMain language={language} />
          </MobileIndexWrapper>
          <DropDown
            dropDownOpened={dropDownOpened}
            dropDownButtonHandler={dropDownButtonHandler}
          />
          <MintButton dday={dday} />
        </>
      )}
    </>
  )
}

export default IndexPage
