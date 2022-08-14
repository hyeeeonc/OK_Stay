import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../lib/styles/palette'
import { Language } from 'types/common/language'

import Hamburger from './Hamburger'

const HeaderBlock = styled.div`
  width: 100vw;
  height: 48px;
  background-color: ${palette.gray[1]};
  position: fixed;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  margin-left: 20px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 55;
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
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 70%;
  }
`

interface HeaderProps {
  getHeaderPageData(e: number): void
  modalOpenHandler: React.MouseEventHandler
  dday: number
  changeLanguage: React.MouseEventHandler
  language: Language
}

const MobileHeader: FunctionComponent<HeaderProps> = function ({
  getHeaderPageData,
  modalOpenHandler,
  dday,
  changeLanguage,
  language,
}) {
  const headerPageControl = (page: number) => {
    getHeaderPageData(page)
  }

  return (
    <HeaderBlock>
      <Logo onClick={() => headerPageControl(0)}>
        <svg
          width="116"
          height="16"
          viewBox="0 0 116 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_218_2874)">
            <g clip-path="url(#clip1_218_2874)">
              <path
                d="M3.90614 8.51187H0V4.67188H3.90614V8.51187ZM3.90614 15.7119H0V11.9039H3.90614V15.7119Z"
                fill="white"
              />
              <path
                d="M17.0329 14.144C15.9443 15.392 14.3114 16 12.2302 16C10.1491 16 8.54822 15.392 7.45963 14.144C6.17892 12.704 5.7627 10.656 5.7627 8C5.7627 5.376 6.17892 3.328 7.45963 1.888C8.5162 0.608 10.1491 0 12.2302 0C14.3114 0 15.9443 0.608 17.0329 1.856C18.2816 3.296 18.6978 5.376 18.6978 7.968C18.6978 10.624 18.2816 12.704 17.0329 14.144ZM13.8952 4.16C13.4789 3.584 12.9666 3.328 12.1982 3.328C11.4618 3.328 10.9175 3.584 10.5333 4.16C10.053 4.864 9.89296 5.92 9.89296 8C9.89296 10.112 10.053 11.168 10.5333 11.872C10.9495 12.448 11.4618 12.704 12.1982 12.704C12.9346 12.704 13.4789 12.448 13.8952 11.872C14.3434 11.168 14.5035 10.112 14.5035 8C14.5355 5.92 14.3754 4.832 13.8952 4.16Z"
                fill="white"
              />
              <path
                d="M28.9436 7.80786L33.1058 15.7439H28.6234L25.5497 9.47186H24.4611V15.7439H20.2988V0.255859H24.4611V6.14386H25.5497L28.1111 0.255859H32.5295L28.9436 7.80786Z"
                fill="white"
              />
              <path
                d="M41.3665 12.3519C41.3025 10.9759 40.8222 10.5279 39.7016 10.5279H38.1008V15.7119H33.9385V0.255859H40.6301C43.992 0.255859 45.7529 2.14386 45.7529 4.99186C45.7529 7.07186 44.7284 8.41586 43.1275 8.86386C44.7284 9.15186 45.3687 10.1439 45.4968 12.1599L45.6249 14.2399C45.6569 14.8799 45.785 15.3279 45.9451 15.7119H41.7828C41.6227 15.3919 41.5266 14.7839 41.4946 14.2719L41.3665 12.3519ZM39.7977 7.23186C40.9823 7.23186 41.5907 6.68786 41.5907 5.40786C41.5907 4.09586 40.9823 3.55186 39.7977 3.55186H38.1008V7.23186H39.7977Z"
                fill="white"
              />
              <path
                d="M55.7424 0.255859L60.6091 15.7119H56.4148L55.7744 13.2479H51.452L50.8117 15.7119H46.6494L51.5481 0.255859H55.7424ZM53.6613 4.76786L52.2845 10.1439H55.038L53.6613 4.76786Z"
                fill="white"
              />
              <path
                d="M73.0637 16C69.2856 16 67.2365 14.048 67.2365 11.328V11.008H71.3987V11.36C71.3987 12.256 71.943 12.864 73.0637 12.864C74.1843 12.864 74.7286 12.256 74.7286 11.36C74.7286 10.464 74.2163 9.92 72.7435 9.632L71.5588 9.376C68.9014 8.864 67.1084 7.424 67.1084 4.608C67.1084 1.952 69.1895 0 72.7115 0C76.3295 0 78.3145 2.048 78.3145 4.416V4.672H74.1523V4.416C74.1523 3.616 73.64 3.136 72.7115 3.136C71.783 3.136 71.2707 3.616 71.2707 4.416C71.2707 5.28 71.847 5.76 73.3198 6.08L74.5045 6.304C77.322 6.88 78.8909 8.448 78.8909 11.168C78.8909 13.952 76.9698 16 73.0637 16Z"
                fill="white"
              />
              <path
                d="M79.2109 0.255859H91.1215V3.55186H87.2473V15.7119H83.0851V3.55186H79.2109V0.255859Z"
                fill="white"
              />
              <path
                d="M99.4789 0.255859L104.378 15.7119H100.183L99.543 13.2479H95.2206L94.5803 15.7119H90.418L95.2846 0.255859H99.4789ZM97.3978 4.76786L96.021 10.1439H98.7746L97.3978 4.76786Z"
                fill="white"
              />
              <path
                d="M112.542 0.255859H116.8L112.126 9.63186V15.7119H107.932V9.63186L103.289 0.255859H107.547L110.077 6.20786L112.542 0.255859Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_218_2874">
              <rect width="116" height="16" fill="white" />
            </clipPath>
            <clipPath id="clip1_218_2874">
              <rect width="116.8" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Logo>
      <Hamburger language={language} changeLanguage={changeLanguage} />
    </HeaderBlock>
  )
}

export default MobileHeader
