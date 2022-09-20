import styled from '@emotion/styled'
import { CarouselContext } from 'hooks/contexts/CarouselProvider'
import {LanguageContext} from 'hooks/contexts/LanguageProvider'
import React, { useContext } from 'react'
import palette from '../../../../lib/styles/palette'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
} from './CarouselItem'

const CarouselBody = styled.section`
  margin-top: 175px;
  margin-left: 80px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;
  opacity: 85%;

  color: ${palette.gray[8]};
  @media (max-width: 1199px) {
    margin-top: 120px;
    margin-left: 57px;
    font-size: 23px;
  }

  @media (max-height: 900px) {
    margin-top: 120px;
    margin-left: 57px;
    font-size: 23px;
  }
`
const CarouselOkra = () => {
  const { page, scrollHandler, touchStartHandler, touchEndHandler } =
    useContext(CarouselContext)
  const {language} = useContext(LanguageContext)
  return (
    <CarouselItem
      style={{ opacity: page === 0 ? 1 : 0.2 }}
      onWheel={scrollHandler()}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
    >
      <CarouselTitleWrapper>
        <CarouselIcon>
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
        </CarouselIcon>
        <CarouselTitle>Okra Seoul NFT</CarouselTitle>
      </CarouselTitleWrapper>
      {language === 'KOR' ? (
        <CarouselBody>
          해외 유명 페스티벌, 공연, 클럽 등 다양한 문화 공간을
          <br />
          기획, 제작한 멤버가 모인 OKRASEOUL이 제공하는 문화행사를
          <br />더 특별하게 즐길 수 있는 Culture Membership NFT
        </CarouselBody>
      ) : (
        <CarouselBody>
          eng
          <br />
          test
          <br />중
        </CarouselBody>
      )}
    </CarouselItem>
  )
}

export default CarouselOkra
