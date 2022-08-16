import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import minting from '../../lib/styles/minting'
import { Global } from '@emotion/react'

import {
  MintingGuideListType,
  MintingGuideType,
} from 'types/minting/MintingGuide'

import { useMediaQuery } from 'react-responsive'
import { Language } from 'types/common/language'
import MobileHeader from 'components/common/MobileHeader'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'

const MintingPageBody = styled.div``
const MintingPageCardBlock = styled.div`
  width: 100vw;
  height: 550px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${palette.gray[0]};
`

const MintingPageCard = styled.div`
  width: 708px;
  height: 390px;
  border-radius: 40px;

  background: rgba(255, 255, 255, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.34);
`

const MintingPageCardTitle = styled.div`
  position: absolute;
  left: 9.04%;
  right: 31.36%;
  top: 12.82%;
  bottom: 47.18%;

  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 150%;

  color: ${palette.gray[9]};
`

const MintingPageCardIconContainer = styled.div`
  position: absolute;
  left: 80.37%;
  right: 8.33%;
  top: 17.95%;
  bottom: 61.54%;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const MintingPageCardLogoContainer = styled.div`
  position: absolute;
  left: 9.75%;
  right: 62.71%;
  top: 76.67%;
  bottom: 16.41%;
`

const MintingPageCardOrderContainer = styled.div`
  position: absolute;
  left: 75.14%;
  right: 8.47%;
  top: 76.15%;
  bottom: 16.15%;

  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;

  /* dark/🌑 gray60 */
  color: ${palette.gray[5]};
`

const Spacer = styled.div`
  height: 56px;
  @media (max-width: 767px) {
    height: 48px;
  }
`

const MintingPageContentBlock = styled.div`
  background: ${palette.gray[9]};
  max-width: 845px;
  padding: 120px 30px 30px 120px;
`

const MintingPageContentTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[0]};
`

const MintingPageContentContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[2]};
`

type MintingPageProps = {
  language: Language
  changeLanguage: React.MouseEventHandler
}

const MintingPage: FunctionComponent<MintingPageProps> = function ({
  language,
  changeLanguage,
}) {
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

  const [modalOpened, setModalOpened] = useState<boolean>(false)

  const modalCloseHandler: React.MouseEventHandler = () =>
    setModalOpened(_ => false)
  const modalOpenHandler: React.MouseEventHandler = () =>
    setModalOpened(_ => true)

  const [dday, setDday] = useState<number>(0)
  useEffect(() => {
    setDday(_ => {
      const today = new Date()
      const std = new Date('2022-08-30')
      const diff = std.getTime() - today.getTime()
      return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0
    })
  }, [])

  const {
    allMintingJson: { edges },
  }: MintingGuideListType = useStaticQuery(graphql`
    query getMintingGuides {
      allMintingJson(sort: { order: ASC, fields: [seq] }) {
        edges {
          node {
            language
            seq
            title
            content
            img {
              publicURL
            }
          }
        }
      }
    }
  `)

  const [guides, setGuides] = useState<Array<MintingGuideType>>([])
  useEffect(() => {
    setGuides(_ => edges.filter(({ node }) => node.language === language))
  }, [language])

  const [민팅하러가기, set민팅하러가기] = useState<string>('민팅하러가기')
  useEffect(() => {
    if (language === 'KOR') {
      set민팅하러가기(_ => '민팅하러가기')
    } else if (language === 'ENG') {
      set민팅하러가기(_ => 'Go Minting')
    }
  }, [language])

  return (
    <>
      <Global styles={minting} />
      {isPc && (
        <>
          <Header
            getHeaderPageData={getHeaderPageData}
            modalOpenHandler={modalOpenHandler}
            dday={dday}
            changeLanguage={changeLanguage}
            language={language}
            headerMode={'SIMPLE'}
          />
          <Spacer />
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
        </>
      )}

      <MintingPageBody>
        <MintingPageCardBlock>
          <MintingPageCard>
            <MintingPageCardTitle>
              MEMERSHIP
              <br />
              NFT
            </MintingPageCardTitle>
            <MintingPageCardIconContainer>
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.9998 10.1113C26.5387 10.1113 27.0327 10.4113 27.2813 10.8894L33.0591 22.0005C33.4158 22.6865 33.1691 23.5317 32.4994 23.918L26.7216 27.2514C26.2749 27.5091 25.7247 27.5091 25.278 27.2514L19.5002 23.918C18.8305 23.5317 18.5838 22.6865 18.9405 22.0005L24.7183 10.8894C24.9669 10.4113 25.4609 10.1113 25.9998 10.1113ZM22.1414 22.1066L25.9998 24.3326L29.8582 22.1066L25.9998 14.6867L22.1414 22.1066Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.2189 27.8494C19.6731 27.4111 20.3594 27.3185 20.9135 27.6207L25.9996 30.395L31.0857 27.6207C31.6399 27.3185 32.3261 27.4111 32.7804 27.8494C33.2346 28.2877 33.3516 28.9702 33.0693 29.5348L27.2916 41.0903C27.0469 41.5797 26.5467 41.8888 25.9996 41.8888C25.4525 41.8888 24.9523 41.5797 24.7077 41.0903L18.9299 29.5348C18.6476 28.9702 18.7646 28.2877 19.2189 27.8494ZM23.5736 32.3624L25.9996 37.2145L28.4257 32.3624L26.6913 33.3084C26.2602 33.5436 25.7391 33.5436 25.3079 33.3084L23.5736 32.3624Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.1109 25.9998C49.1109 38.7637 38.7637 49.1109 25.9998 49.1109C13.2359 49.1109 2.88867 38.7637 2.88867 25.9998C2.88867 13.2359 13.2359 2.88867 25.9998 2.88867C38.7637 2.88867 49.1109 13.2359 49.1109 25.9998ZM25.9998 46.222C37.1682 46.222 46.222 37.1682 46.222 25.9998C46.222 14.8314 37.1682 5.77756 25.9998 5.77756C14.8314 5.77756 5.77756 14.8314 5.77756 25.9998C5.77756 37.1682 14.8314 46.222 25.9998 46.222Z"
                  fill="white"
                />
              </svg>
            </MintingPageCardIconContainer>

            <MintingPageCardLogoContainer>
              <svg
                width="195"
                height="27"
                viewBox="0 0 195 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.56636 14.3638H0V7.88379H6.56636V14.3638ZM6.56636 26.5138H0V20.0878H6.56636V26.5138Z"
                  fill="#939393"
                />
                <path
                  d="M28.634 23.868C26.8041 25.974 24.0591 27 20.5606 27C17.0622 27 14.371 25.974 12.5411 23.868C10.3882 21.438 9.68848 17.982 9.68848 13.5C9.68848 9.072 10.3882 5.616 12.5411 3.186C14.3172 1.026 17.0622 0 20.5606 0C24.0591 0 26.8041 1.026 28.634 3.132C30.7331 5.562 31.4328 9.072 31.4328 13.446C31.4328 17.928 30.7331 21.438 28.634 23.868ZM23.3594 7.02C22.6597 6.048 21.7986 5.616 20.5068 5.616C19.2689 5.616 18.3539 6.048 17.708 7.02C16.9007 8.208 16.6316 9.99 16.6316 13.5C16.6316 17.064 16.9007 18.846 17.708 20.034C18.4077 21.006 19.2689 21.438 20.5068 21.438C21.7447 21.438 22.6597 21.006 23.3594 20.034C24.1129 18.846 24.382 17.064 24.382 13.5C24.4359 9.99 24.1668 8.154 23.3594 7.02Z"
                  fill="#939393"
                />
                <path
                  d="M48.6551 13.1756L55.6521 26.5676H48.1169L42.95 15.9836H41.12V26.5676H34.123V0.431641H41.12V10.3676H42.95L47.2558 0.431641H54.6833L48.6551 13.1756Z"
                  fill="#939393"
                />
                <path
                  d="M69.5386 20.8436C69.431 18.5216 68.6236 17.7656 66.7398 17.7656H64.0487V26.5136H57.0518V0.431641H68.3007C73.9521 0.431641 76.9123 3.61764 76.9123 8.42364C76.9123 11.9336 75.19 14.2016 72.4988 14.9576C75.19 15.4436 76.2664 17.1176 76.4817 20.5196L76.697 24.0296C76.7508 25.1096 76.9661 25.8656 77.2352 26.5136H70.2383C69.9692 25.9736 69.8077 24.9476 69.7539 24.0836L69.5386 20.8436ZM66.9013 12.2036C68.8927 12.2036 69.9154 11.2856 69.9154 9.12564C69.9154 6.91164 68.8927 5.99364 66.9013 5.99364H64.0487V12.2036H66.9013Z"
                  fill="#939393"
                />
                <path
                  d="M93.7055 0.431641L101.887 26.5136H94.8358L93.7594 22.3556H86.4933L85.4169 26.5136H78.4199L86.6548 0.431641H93.7055ZM90.2071 8.04564L87.8927 17.1176H92.5214L90.2071 8.04564Z"
                  fill="#939393"
                />
                <path
                  d="M122.823 27C116.472 27 113.028 23.706 113.028 19.116V18.576H120.025V19.17C120.025 20.682 120.94 21.708 122.823 21.708C124.707 21.708 125.622 20.682 125.622 19.17C125.622 17.658 124.761 16.74 122.285 16.254L120.294 15.822C115.827 14.958 112.812 12.528 112.812 7.776C112.812 3.294 116.311 0 122.231 0C128.313 0 131.65 3.456 131.65 7.452V7.884H124.653V7.452C124.653 6.102 123.792 5.292 122.231 5.292C120.671 5.292 119.809 6.102 119.809 7.452C119.809 8.91 120.778 9.72 123.254 10.26L125.246 10.638C129.982 11.61 132.619 14.256 132.619 18.846C132.619 23.544 129.39 27 122.823 27Z"
                  fill="#939393"
                />
                <path
                  d="M133.157 0.431641H153.179V5.99364H146.667V26.5136H139.67V5.99364H133.157V0.431641Z"
                  fill="#939393"
                />
                <path
                  d="M167.227 0.431641L175.462 26.5136H168.411L167.335 22.3556H160.069L158.992 26.5136H151.995L160.176 0.431641H167.227ZM163.728 8.04564L161.414 17.1176H166.043L163.728 8.04564Z"
                  fill="#939393"
                />
                <path
                  d="M189.187 0.431641H196.345L188.487 16.2536V26.5136H181.436V16.2536L173.632 0.431641H180.79L185.042 10.4756L189.187 0.431641Z"
                  fill="#939393"
                />
              </svg>
            </MintingPageCardLogoContainer>

            <MintingPageCardOrderContainer>
              No. 00001
            </MintingPageCardOrderContainer>
          </MintingPageCard>
        </MintingPageCardBlock>

        {guides.map(({ node: { title, content, seq, img } }) => (
          <MintingPageContentBlock>
            <img src={img.publicURL} alt={title} />
            <MintingPageContentTitle>{title}</MintingPageContentTitle>
            <MintingPageContentContent>{content}</MintingPageContentContent>
            {seq === 1 ? <a href="">{민팅하러가기}</a> : <></>}
          </MintingPageContentBlock>
        ))}
      </MintingPageBody>
    </>
  )
}

export default MintingPage
