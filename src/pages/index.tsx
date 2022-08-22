import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
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
import { ArticleModalProps } from 'types/index/modal/Modal'
import useQueryString from 'hooks/useQueryString'

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

const IndicatorBlock = styled.div`
  position: fixed;
  top: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 305px);
  left: calc(50vw - 450px);
  display: flex;
  align-items: center;

  @media (max-width: 1199px) {
    top: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 210px);
    left: calc(50vw - 330px);
  }
  @media (max-height: 900px) {
    top: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 210px);
    left: calc(50vw - 330px);
  }

  z-index: 10;
`

const IndicatorItems = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: white;
  margin-right: 13px;

  transition: 1.5s;
  cursor: pointer;
`

const IndexPage: FunctionComponent = function () {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  const [carouselPageController, setCarouselPageController] =
    useState<number>(null)

  const [indexCarouselPage, setIndexCarouselPage] = useState(0)

  const getHeaderPageData = useCallback((page: number) => {
    setCarouselPageController(page)
  }, [])

  const getIndexCarouselPage = useCallback((page: number) => {
    setIndexCarouselPage(page)
  }, [])

  useEffect(() => {
    if (carouselPageController === 0) {
      setCarouselPageController(null)
    }
  }, [carouselPageController])

  const [dropDownOpened, setDropDownOpened] = useState<boolean>(false)

  const dropDownButtonHandler: React.MouseEventHandler = useCallback(() => {
    setDropDownOpened(!dropDownOpened)
  }, [dropDownOpened])

  const [modalOpened, setModalOpened] = useState<boolean>(false)

  const modalCloseHandler: React.MouseEventHandler = useCallback(
    () => setModalOpened(_ => false),
    [],
  )
  const modalOpenHandler: React.MouseEventHandler = useCallback(
    () => setModalOpened(_ => true),
    [],
  )

  const [articleModal, setArticleModal] = useState<ArticleModalProps>({
    article: {
      title: '',
      content: '',
      image: '',
    },
    modalOpened: false,
  })

  const articleModalOpenHandler = useCallback(
    (article: ArticleType) => () => {
      setArticleModal(_ => ({ article, modalOpened: true }))
    },
    [],
  )

  const articleModalCloseHandler: React.MouseEventHandler = useCallback(
    () => setArticleModal(a => ({ ...a, modalOpened: false })),
    [],
  )

  const [dday, setDday] = useState<number>(0)
  useEffect(() => {
    setDday(_ => {
      const today = new Date()
      const std = new Date('2022-08-30')
      const diff = std.getTime() - today.getTime()
      return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0
    })
  }, [])

  const [language, setLanguage] = useQueryString<Language>('lang', 'KOR')
  const changeLanguage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (language === 'KOR') {
        setLanguage('ENG')
      } else if (language === 'ENG') {
        setLanguage('KOR')
      }
    },
    [language],
  )

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

          <IndicatorBlock>
            <IndicatorItems
              style={{
                opacity: indexCarouselPage === 0 ? 1 : 0.2,
              }}
              onClick={() => setCarouselPageController(0)}
            />
            <IndicatorItems
              style={{ opacity: indexCarouselPage === 1 ? 1 : 0.2 }}
              onClick={() => setCarouselPageController(1)}
            />

            <IndicatorItems
              style={{ opacity: indexCarouselPage === 2 ? 1 : 0.2 }}
              onClick={() => setCarouselPageController(2)}
            />

            <IndicatorItems
              style={{ opacity: indexCarouselPage === 3 ? 1 : 0.2 }}
              onClick={() => setCarouselPageController(3)}
            />

            <IndicatorItems
              style={{ opacity: indexCarouselPage === 4 ? 1 : 0.2 }}
              onClick={() => setCarouselPageController(4)}
            />

            <IndicatorItems
              style={{ opacity: indexCarouselPage === 5 ? 1 : 0.2 }}
              onClick={() => setCarouselPageController(5)}
            />

            <IndicatorItems
              style={{ opacity: indexCarouselPage === 6 ? 1 : 0.2 }}
              onClick={() => setCarouselPageController(6)}
            />
          </IndicatorBlock>

          <IndexWrapper>
            <ContactModal
              modalCloseHandler={modalCloseHandler}
              modalOpened={modalOpened}
            ></ContactModal>
            <ArticleModal
              {...{
                ...articleModal,
                modalCloseHandler: articleModalCloseHandler,
              }}
            ></ArticleModal>
            <MainCarousel
              headerPage={carouselPageController}
              language={language}
              articleModalOpenHandler={articleModalOpenHandler}
              getIndexCarouselPage={getIndexCarouselPage}
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
            headerMode={'DETAIL'}
          />
          <Spacer />
          <MobileIndexWrapper>
            <ContactModal
              modalCloseHandler={modalCloseHandler}
              modalOpened={modalOpened}
            />

            <ArticleModal
              {...{
                ...articleModal,
                modalCloseHandler: articleModalCloseHandler,
              }}
            />

            <MobileMain
              language={language}
              articleModalOpenHandler={articleModalOpenHandler}
            />
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
