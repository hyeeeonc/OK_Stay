import { graphql, Link, useStaticQuery } from 'gatsby'
import { LanguageContext } from 'hooks/contexts/LanguageProvider'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import palette from '../../../lib/styles/palette'
import {
  MintingGuideListType,
  MintingGuideType,
} from 'types/minting/MintingGuide'

const MintingPageBody = styled.div`
  overflow-x: hidden;
`
const MintingPageCardBlock = styled.div`
  width: 100vw;
  height: 550px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 60px;

  background-color: ${palette.gray[0]};

  @media (max-width: 767px) {
    height: 260px;
    margin-bottom: 15px;
  }
`
const BackgroundCircle = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
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
`

const MintingPageCard = styled.div`
  position: relative;

  width: 708px;
  height: 390px;
  border-radius: 40px;

  background: rgba(255, 255, 255, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.34);

  @media (max-width: 767px) {
    width: 320px;
    height: 180px;
    border-radius: 20px;
  }
`

const MintingPageCardTitle = styled.div`
  position: absolute;
  left: 9.04%;
  top: 12.82%;

  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 150%;

  color: ${palette.gray[9]};

  @media (max-width: 767px) {
    // left: 26px;
    // top: 23px;

    font-size: 20px;
  }
`

const MintingPageCardIconContainer = styled.div`
  position: absolute;
  right: 59px;
  top: 70px;

  width: 80px;
  height: 80px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;

    position: absolute;
    top: 31px;

    right: 30px;
    border-radius: 6px;
  }
`
const MintingPageCardLogoContainer = styled.div`
  position: absolute;
  left: 9.75%;
  right: 62.71%;
  top: 76.67%;
  bottom: 16.41%;

  @media (max-widht: 767px) {
    left: 8.12%;
    right: 64%;
    top: 76.06%;
    bottom: 17.07%;
  }
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

  @media (max-width: 767px) {
    left: 74.06%;
    right: 9.38%;
    top: 75.56%;
    bottom: 16.67%;

    font-size: 9.2px;
  }
`
const MintingPageContentBlock = styled.div`
  background: ${palette.gray[9]};
  max-width: 845px;
  padding: 60px 30px 0 30px;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 60px 20px 0 20px;
  }
`

const MintingPageContentTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${palette.gray[0]};

  margin-bottom: 24px;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`

const MintingPageContentContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${palette.gray[2]};

  margin-bottom: 24px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

const MintingPageContentImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-bottom: 24px;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

const MintingPageContentGoToKaikas = styled.a`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #2e2d2d;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

const MintingPageFooter = styled.div`
  max-width: 845px;
  padding: 60px 30px 0 30px;
  margin: 60px auto 200px auto;
`

const MintingPageFooterClickerContainer = styled.div`
  max-width: 700px;
  display: flex;

  margin-bottom: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 4px;
  }
`

const MintingPageFooterClicker = styled.span`
  cursor: pointer;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: #000000;

  margin-right: 20px;

  flex: none;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`

const MintingPageFooterClickerLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const MintingPageFooterContent = styled.div`
  max-width: 700px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: #4e4c4c;

  @media (max-width: 767px) {
  }
`

type MintingPageBodyWrapperProps = {
  isPc: boolean
  isMobile: boolean
}

const MintingPageBodyWrapper = ({
  isPc,
  isMobile,
}: MintingPageBodyWrapperProps) => {
  const { language } = useContext(LanguageContext)
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
  return (
    <MintingPageBody>
      <MintingPageCardBlock>
        <BackgroundCircle
          style={{
            backgroundColor: '#a058ed',
            left: '-70px',
            top: '-10px',
            animation: 'tutsFade 150s infinite linear',
          }}
        />

        <MintingPageCard>
          <MintingPageCardTitle>
            MEMERSHIP
            <br />
            NFT
          </MintingPageCardTitle>
          <MintingPageCardIconContainer>
            {isPc && (
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.88867 11.5557C3.33639 11.5557 2.88867 12.0034 2.88867 12.5557V21.7902C2.88867 22.3425 3.33639 22.7902 3.88867 22.7902H4.43629C6.28013 22.7902 7.53153 24.088 7.53153 26.0001C7.53153 27.9122 6.28013 29.21 4.43629 29.21H3.88867C3.33639 29.21 2.88867 29.6577 2.88867 30.21V39.4446C2.88867 39.9968 3.33639 40.4446 3.88867 40.4446H45.222C45.7743 40.4446 46.222 39.9968 46.222 39.4446V30.21C46.222 29.6577 45.7743 29.21 45.222 29.21H44.6744C42.8305 29.21 41.5791 27.9122 41.5791 26.0001C41.5791 24.088 42.8305 22.7902 44.6744 22.7902H45.222C45.7743 22.7902 46.222 22.3425 46.222 21.7902V12.5557C46.222 12.0034 45.7743 11.5557 45.222 11.5557H3.88867ZM5.98391 14.7655H43.1268V19.8813C40.4728 20.6023 38.4839 23.0222 38.4839 26.0001C38.4839 28.978 40.4728 31.398 43.1268 32.1189V37.2347H5.98391V32.1189C8.63784 31.398 10.6268 28.978 10.6268 26.0001C10.6268 23.0222 8.63784 20.6023 5.98391 19.8813V14.7655Z"
                  fill="white"
                />
                <path
                  d="M17.3356 26.5674H14.4443V23.7891H17.3356V26.5674ZM17.3356 31.7768H14.4443V29.0216H17.3356V31.7768Z"
                  fill="white"
                />
                <path
                  d="M27.5876 30.4222C26.7359 31.3221 25.4585 31.7606 23.8303 31.7606C22.2022 31.7606 20.9497 31.3221 20.0981 30.4222C19.0961 29.3838 18.7705 27.9069 18.7705 25.9916C18.7705 24.0994 19.0961 22.6225 20.0981 21.5841C20.9247 20.6611 22.2022 20.2227 23.8303 20.2227C25.4585 20.2227 26.7359 20.6611 27.5876 21.5611C28.5645 22.5995 28.8901 24.0994 28.8901 25.9685C28.8901 27.8838 28.5645 29.3838 27.5876 30.4222ZM25.1328 23.2225C24.8072 22.8071 24.4064 22.6225 23.8053 22.6225C23.2291 22.6225 22.8033 22.8071 22.5027 23.2225C22.127 23.7302 22.0018 24.4917 22.0018 25.9916C22.0018 27.5146 22.127 28.2761 22.5027 28.7838C22.8284 29.1991 23.2291 29.3838 23.8053 29.3838C24.3814 29.3838 24.8072 29.1991 25.1328 28.7838C25.4835 28.2761 25.6087 27.5146 25.6087 25.9916C25.6338 24.4917 25.5086 23.7071 25.1328 23.2225Z"
                  fill="white"
                />
                <rect
                  x="31.7773"
                  y="11.5557"
                  width="2.88889"
                  height="8.66667"
                  rx="1.44444"
                  fill="white"
                />
                <rect
                  x="31.7773"
                  y="23.1113"
                  width="2.88889"
                  height="5.77778"
                  rx="1.44444"
                  fill="white"
                />
                <rect
                  x="31.7773"
                  y="31.7773"
                  width="2.88889"
                  height="8.66666"
                  rx="1.44444"
                  fill="white"
                />
              </svg>
            )}
            {isMobile && (
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.44433 5.77734C1.89205 5.77734 1.44434 6.22506 1.44434 6.77734V10.6208C1.44434 11.0482 1.79078 11.3946 2.21815 11.3946C3.14007 11.3946 3.76576 12.0435 3.76576 12.9996C3.76576 13.9556 3.14007 14.6045 2.21815 14.6045C1.79078 14.6045 1.44434 14.951 1.44434 15.3783V19.2218C1.44434 19.7741 1.89205 20.2218 2.44434 20.2218H22.111C22.6633 20.2218 23.111 19.7741 23.111 19.2218V15.3783C23.111 14.951 22.7646 14.6045 22.3372 14.6045C21.4153 14.6045 20.7896 13.9556 20.7896 12.9996C20.7896 12.0435 21.4153 11.3946 22.3372 11.3946C22.7646 11.3946 23.111 11.0482 23.111 10.6208V6.77734C23.111 6.22506 22.6633 5.77734 22.111 5.77734H2.44433ZM2.99196 7.38228H21.5634V9.94015C20.2364 10.3006 19.242 11.5106 19.242 12.9996C19.242 14.4885 20.2364 15.6985 21.5634 16.059V18.6168H2.99196V16.059C4.31892 15.6985 5.31338 14.4885 5.31338 12.9996C5.31338 11.5106 4.31892 10.3006 2.99196 9.94015V7.38228Z"
                  fill="white"
                />
                <path
                  d="M8.66782 13.2837H7.22217V11.8945H8.66782V13.2837ZM8.66782 15.8884H7.22217V14.5108H8.66782V15.8884Z"
                  fill="white"
                />
                <path
                  d="M13.7938 15.2111C13.368 15.6611 12.7292 15.8803 11.9152 15.8803C11.1011 15.8803 10.4749 15.6611 10.049 15.2111C9.54807 14.6919 9.38525 13.9535 9.38525 12.9958C9.38525 12.0497 9.54807 11.3113 10.049 10.7921C10.4623 10.3305 11.1011 10.1113 11.9152 10.1113C12.7292 10.1113 13.368 10.3305 13.7938 10.7805C14.2822 11.2997 14.4451 12.0497 14.4451 12.9843C14.4451 13.9419 14.2822 14.6919 13.7938 15.2111ZM12.5664 11.6113C12.4036 11.4036 12.2032 11.3113 11.9026 11.3113C11.6146 11.3113 11.4017 11.4036 11.2514 11.6113C11.0635 11.8651 11.0009 12.2458 11.0009 12.9958C11.0009 13.7573 11.0635 14.1381 11.2514 14.3919C11.4142 14.5996 11.6146 14.6919 11.9026 14.6919C12.1907 14.6919 12.4036 14.5996 12.5664 14.3919C12.7418 14.1381 12.8044 13.7573 12.8044 12.9958C12.8169 12.2458 12.7543 11.8536 12.5664 11.6113Z"
                  fill="white"
                />
                <rect
                  x="15.8887"
                  y="5.77734"
                  width="1.44444"
                  height="4.33333"
                  rx="0.722222"
                  fill="white"
                />
                <rect
                  x="15.8887"
                  y="11.5557"
                  width="1.44444"
                  height="2.88889"
                  rx="0.722222"
                  fill="white"
                />
                <rect
                  x="15.8887"
                  y="15.8887"
                  width="1.44444"
                  height="4.33333"
                  rx="0.722222"
                  fill="white"
                />
              </svg>
            )}
          </MintingPageCardIconContainer>

          <MintingPageCardLogoContainer>
            {isPc && (
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
            )}
            {isMobile && (
              <svg
                width="90"
                height="14"
                viewBox="0 0 90 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_824_406)">
                  <g clip-path="url(#clip1_824_406)">
                    <path
                      d="M3.00374 7.48572H0V4.52148H3.00374V7.48572ZM3.00374 13.0437H0V10.1041H3.00374V13.0437Z"
                      fill="#939393"
                    />
                    <path
                      d="M13.0987 11.8333C12.2616 12.7967 11.0059 13.266 9.40554 13.266C7.80518 13.266 6.57414 12.7967 5.73703 11.8333C4.7522 10.7217 4.43213 9.1408 4.43213 7.09054C4.43213 5.06497 4.7522 3.48405 5.73703 2.37246C6.54952 1.38438 7.80518 0.915039 9.40554 0.915039C11.0059 0.915039 12.2616 1.38438 13.0987 2.34775C14.0589 3.45934 14.379 5.06497 14.379 7.06584C14.379 9.1161 14.0589 10.7217 13.0987 11.8333ZM10.6858 4.1263C10.3658 3.68166 9.97182 3.48405 9.38092 3.48405C8.81464 3.48405 8.39609 3.68166 8.10063 4.1263C7.73132 4.66974 7.60822 5.48491 7.60822 7.09054C7.60822 8.72087 7.73132 9.53603 8.10063 10.0795C8.42071 10.5241 8.81464 10.7217 9.38092 10.7217C9.9472 10.7217 10.3658 10.5241 10.6858 10.0795C11.0305 9.53603 11.1536 8.72087 11.1536 7.09054C11.1782 5.48491 11.0551 4.64504 10.6858 4.1263Z"
                      fill="#939393"
                    />
                    <path
                      d="M22.257 6.94198L25.4577 13.0681H22.0108L19.6472 8.22648H18.8101V13.0681H15.6094V1.1123H18.8101V5.65747H19.6472L21.6169 1.1123H25.0145L22.257 6.94198Z"
                      fill="#939393"
                    />
                    <path
                      d="M31.8102 10.4497C31.7609 9.38747 31.3916 9.04165 30.5299 9.04165H29.2989V13.0434H26.0981V1.1123H31.2439C33.8291 1.1123 35.1832 2.56972 35.1832 4.7682C35.1832 6.37383 34.3954 7.41131 33.1643 7.75714C34.3954 7.97946 34.8878 8.74522 34.9863 10.3014L35.0848 11.9071C35.1094 12.4011 35.2079 12.7469 35.331 13.0434H32.1303C32.0071 12.7963 31.9333 12.327 31.9087 11.9318L31.8102 10.4497ZM30.6038 6.49734C31.5147 6.49734 31.9825 6.07741 31.9825 5.08933C31.9825 4.07654 31.5147 3.65661 30.6038 3.65661H29.2989V6.49734H30.6038Z"
                      fill="#939393"
                    />
                    <path
                      d="M42.8649 1.1123L46.6072 13.0434H43.3819L42.8895 11.1413H39.5657L39.0733 13.0434H35.8726L39.6395 1.1123H42.8649ZM41.2645 4.59529L40.2058 8.74522H42.3232L41.2645 4.59529Z"
                      fill="#939393"
                    />
                    <path
                      d="M56.1849 13.266C53.2797 13.266 51.704 11.7592 51.704 9.65955V9.41253H54.9047V9.68425C54.9047 10.3759 55.3232 10.8452 56.1849 10.8452C57.0467 10.8452 57.4652 10.3759 57.4652 9.68425C57.4652 8.99259 57.0713 8.57266 55.9387 8.35034L55.0278 8.15272C52.9842 7.75749 51.6055 6.6459 51.6055 4.47213C51.6055 2.42186 53.2058 0.915039 55.9141 0.915039C58.6963 0.915039 60.2228 2.49597 60.2228 4.32391V4.52153H57.0221V4.32391C57.0221 3.70636 56.6281 3.33583 55.9141 3.33583C55.2001 3.33583 54.8062 3.70636 54.8062 4.32391C54.8062 4.99087 55.2494 5.3614 56.3819 5.60842L57.2929 5.78133C59.4595 6.22597 60.6659 7.43637 60.6659 9.53604C60.6659 11.6851 59.1887 13.266 56.1849 13.266Z"
                      fill="#939393"
                    />
                    <path
                      d="M60.9121 1.1123H70.0711V3.65661H67.0919V13.0434H63.8912V3.65661H60.9121V1.1123Z"
                      fill="#939393"
                    />
                    <path
                      d="M76.497 1.1123L80.264 13.0434H77.0387L76.5462 11.1413H73.2224L72.73 13.0434H69.5293L73.2717 1.1123H76.497ZM74.8966 4.59529L73.8379 8.74522H75.9553L74.8966 4.59529Z"
                      fill="#939393"
                    />
                    <path
                      d="M86.5422 1.1123H89.8168L86.2221 8.34999V13.0434H82.9968V8.34999L79.4268 1.1123H82.7013L84.6464 5.70688L86.5422 1.1123Z"
                      fill="#939393"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_824_406">
                    <rect
                      width="89.2016"
                      height="12.351"
                      fill="white"
                      transform="translate(0 0.915039)"
                    />
                  </clipPath>
                  <clipPath id="clip1_824_406">
                    <rect
                      width="89.8168"
                      height="12.351"
                      fill="white"
                      transform="translate(0 0.915039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </MintingPageCardLogoContainer>

          <MintingPageCardOrderContainer>
            No.&nbsp;00001
          </MintingPageCardOrderContainer>
        </MintingPageCard>
      </MintingPageCardBlock>

      {guides.map(({ node: { title, content, seq, img } }) => (
        <MintingPageContentBlock>
          <MintingPageContentImgContainer>
            <img src={img.publicURL} alt={title} />
          </MintingPageContentImgContainer>

          <MintingPageContentTitle>{title}</MintingPageContentTitle>
          <MintingPageContentContent>{content}</MintingPageContentContent>
          {seq === 1 ? (
            <MintingPageContentGoToKaikas href="">
              {'카이카스 설치하러 가기'}
            </MintingPageContentGoToKaikas>
          ) : (
            <div></div>
          )}
        </MintingPageContentBlock>
      ))}

      <MintingPageFooter>
        <MintingPageFooterClickerContainer>
          <MintingPageFooterClicker>
            <MintingPageFooterClickerLink to={`/?lang=${language}`}>
              NFT Information
            </MintingPageFooterClickerLink>
          </MintingPageFooterClicker>
          <MintingPageFooterClicker>Minting</MintingPageFooterClicker>
          <MintingPageFooterClicker>개인정보 약관</MintingPageFooterClicker>
          <MintingPageFooterClicker>이용 약관</MintingPageFooterClicker>
        </MintingPageFooterClickerContainer>
        <MintingPageFooterContent>
          (주) 오크라서울
          <br />
          대표이사: 노영신
          <br />
          개인정보책임관리자: 노영신
          <br />
          사업자번호 : 000-00-000
          <br />
          사무실 : 서울특별시 송파구 충민로 66, L동 8층 8149호, 7층
          <br />
        </MintingPageFooterContent>
      </MintingPageFooter>
    </MintingPageBody>
  )
}
export default MintingPageBodyWrapper
