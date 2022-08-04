import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../lib/styles/palette'

const HeaderBlock = styled.div`
  width: 100vw;
  height: 56px;
  background-color: ${palette.gray[1]};
  position: fixed;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderWrapper = styled.header`
  width: 1280px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1280px) {
    width: 100%;
  }
`

const Logo = styled.div`
  margin-left: 20px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: 0.3s linear;
  :hover {
    opacity: 70%;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavItems = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.002em;
  color: white;
  margin: 0 16px;
  cursor: pointer;
  transition: 0.3s linear;
  :hover {
    opacity: 70%;
  }
`

const NavArrow = styled.div`
  margin: 0 23px 0 -5px;
  cursor: pointer;
  transition: 0.3s linear;
  :hover {
    opacity: 70%;
  }
`

interface HeaderProps {
  getHeaderPageData(e: number): void
  modalOpenHandler: React.MouseEventHandler
}

const Header: FunctionComponent<HeaderProps> = function ({
  getHeaderPageData,
  modalOpenHandler,
}) {
  const headerPageControl = (page: number) => {
    getHeaderPageData(page)
  }

  return (
    <HeaderBlock>
      <HeaderWrapper>
        <Logo onClick={() => headerPageControl(0)}>
          <svg
            width="145"
            height="20"
            viewBox="0 0 145 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_401_1482)">
              <path
                d="M4.88268 10.6398H0V5.83984H4.88268V10.6398ZM4.88268 19.6398H0V14.8798H4.88268V19.6398Z"
                fill="white"
              />
              <path
                d="M21.2918 17.68C19.9311 19.24 17.89 20 15.2885 20C12.6871 20 10.686 19.24 9.32526 17.68C7.72439 15.88 7.2041 13.32 7.2041 10C7.2041 6.72 7.72439 4.16 9.32526 2.36C10.646 0.76 12.6871 0 15.2885 0C17.89 0 19.9311 0.76 21.2918 2.32C22.8527 4.12 23.373 6.72 23.373 9.96C23.373 13.28 22.8527 15.88 21.2918 17.68ZM17.3697 5.2C16.8494 4.48 16.209 4.16 15.2485 4.16C14.328 4.16 13.6476 4.48 13.1674 5.2C12.567 6.08 12.3669 7.4 12.3669 10C12.3669 12.64 12.567 13.96 13.1674 14.84C13.6877 15.56 14.328 15.88 15.2485 15.88C16.169 15.88 16.8494 15.56 17.3697 14.84C17.93 13.96 18.1301 12.64 18.1301 10C18.1701 7.4 17.97 6.04 17.3697 5.2Z"
                fill="white"
              />
              <path
                d="M36.1799 9.76031L41.3828 19.6803H35.7797L31.9376 11.8403H30.5769V19.6803H25.374V0.320312H30.5769V7.68031H31.9376L35.1394 0.320312H40.6624L36.1799 9.76031Z"
                fill="white"
              />
              <path
                d="M51.7079 15.4403C51.6279 13.7203 51.0276 13.1603 49.6268 13.1603H47.6257V19.6403H42.4229V0.320312H50.7874C54.9897 0.320312 57.1909 2.68031 57.1909 6.24031C57.1909 8.84031 55.9102 10.5203 53.9091 11.0803C55.9102 11.4403 56.7107 12.6803 56.8708 15.2003L57.0309 17.8003C57.0709 18.6003 57.231 19.1603 57.4311 19.6403H52.2282C52.0281 19.2403 51.9081 18.4803 51.868 17.8403L51.7079 15.4403ZM49.7469 9.04031C51.2277 9.04031 51.9881 8.36031 51.9881 6.76031C51.9881 5.12031 51.2277 4.44031 49.7469 4.44031H47.6257V9.04031H49.7469Z"
                fill="white"
              />
              <path
                d="M69.6778 0.320312L75.7611 19.6403H70.5182L69.7178 16.5603H64.3148L63.5144 19.6403H58.3115L64.4349 0.320312H69.6778ZM67.0763 5.96031L65.3554 12.6803H68.7973L67.0763 5.96031Z"
                fill="white"
              />
              <path
                d="M91.3298 20C86.6072 20 84.0458 17.56 84.0458 14.16V13.76H89.2487V14.2C89.2487 15.32 89.9291 16.08 91.3298 16.08C92.7306 16.08 93.411 15.32 93.411 14.2C93.411 13.08 92.7706 12.4 90.9296 12.04L89.4488 11.72C86.127 11.08 83.8857 9.28 83.8857 5.76C83.8857 2.44 86.4872 0 90.8896 0C95.4121 0 97.8934 2.56 97.8934 5.52V5.84H92.6906V5.52C92.6906 4.52 92.0502 3.92 90.8896 3.92C89.7289 3.92 89.0886 4.52 89.0886 5.52C89.0886 6.6 89.809 7.2 91.65 7.6L93.1308 7.88C96.6527 8.6 98.6138 10.56 98.6138 13.96C98.6138 17.44 96.2125 20 91.3298 20Z"
                fill="white"
              />
              <path
                d="M99.0146 0.320312H113.903V4.44031H109.06V19.6403H103.857V4.44031H99.0146V0.320312Z"
                fill="white"
              />
              <path
                d="M124.348 0.320312L130.471 19.6403H125.228L124.428 16.5603H119.025L118.224 19.6403H113.021L119.105 0.320312H124.348ZM121.746 5.96031L120.025 12.6803H123.467L121.746 5.96031Z"
                fill="white"
              />
              <path
                d="M140.677 0.320312H146L140.156 12.0403V19.6403H134.914V12.0403L129.11 0.320312H134.433L137.595 7.76031L140.677 0.320312Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_401_1482">
                <rect width="145" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Logo>
        <NavWrapper>
          <NavItems onClick={() => headerPageControl(0)}>INFORMATION</NavItems>
          <NavItems onClick={() => headerPageControl(5)}>LIBRARY</NavItems>
          <NavItems onClick={modalOpenHandler}>CONTACT</NavItems>
          <NavItems>ENG</NavItems>
          <NavArrow>
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11.1464 0.853554C11.4614 0.538571 11.2383 0 10.7929 0L1.20711 0C0.761654 0 0.538571 0.538571 0.853553 0.853553L5.29289 5.29289Z"
                fill="white"
              />
            </svg>
          </NavArrow>
        </NavWrapper>
      </HeaderWrapper>
    </HeaderBlock>
  )
}

export default Header
