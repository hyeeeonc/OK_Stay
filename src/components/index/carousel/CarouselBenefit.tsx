import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import {
  BenefitListType,
  BenefitType,
  CarouselDataType,
} from 'types/index/carousel/CarouselData'
import palette from '../../../../lib/styles/palette'
import { preventInnerScrollHandler } from '../../../common/InnerScroll'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselInnerScrollProps,
} from './CarouselItem'

const CarouselBody = styled.section`
  padding-left: 80px;
  padding-right: 110px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll !important;
  scroll-behavior: smooth;

  color: ${palette.gray[8]};

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 10px;
    background: white; /* 스크롤바의 색상 */

    border-radius: 31px;
  }

  ::-webkit-scrollbar-track {
    background: ${palette.gray[2]};
  }

  @media (max-width: 1199px) {
    padding-left: 57px;
    padding-right: 57px;
    height: 250px;
  }

  @media (max-height: 900px) {
    padding-left: 57px;
    padding-right: 57px;
    height: 250px;
  }
`

const CarouselBodyItems = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  @media (max-width: 1199px) {
    margin-bottom: 45px;
  }

  @media (max-height: 900px) {
    margin-bottom: 45px;
  }
`

const CarouselBodyIconContainer = styled.img`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  @media (max-width: 1199px) {
    width: 38px;
    height: 38px;
  }
`

const CarouselBodyIcon: FunctionComponent = function () {
  return (
    <CarouselBodyIconContainer>
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_686_285"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="54"
          height="54"
        >
          <rect width="54" height="54" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_686_285)"></g>
        <g clip-path="url(#clip0_686_285)">
          <path
            d="M51.0001 43.7465C50.9039 40.7678 48.7011 37.9438 45.8153 37.2959C44.6033 37.0251 43.3817 36.9767 42.1504 37.0541C41.073 37.1218 40.0149 36.9864 39.0049 36.5705C37.7929 36.0773 36.7444 35.3229 35.7536 34.4912C35.6766 34.4042 35.6093 34.3171 35.5324 34.2398C33.9356 32.673 32.7909 30.8258 32.1656 28.6788C31.4057 26.0966 31.3384 23.5241 32.3869 20.9806C33.1179 19.2011 33.5604 17.3345 33.8778 15.4487C34.1087 14.0657 34.2145 12.673 33.8586 11.2997C33.3199 9.23977 32.1368 7.69238 30.1937 6.75427C27.635 5.5357 25.2013 5.78715 23.0177 7.52797C20.7957 9.29779 19.9877 11.6769 20.5552 14.4912C20.8245 15.8162 21.4786 16.9767 22.2289 18.0889C22.7869 18.9109 23.3063 19.762 23.5564 20.7388C24.0374 22.673 23.8931 24.5783 23.3736 26.4931C22.0366 31.3771 18.2273 34.7233 13.3119 35.3713C10.9552 35.6808 8.67544 36.3481 6.59768 37.528C4.06782 38.969 2.8558 41.2224 3.02894 44.1237C3.19247 46.7833 4.54878 48.7369 6.92474 49.9458C7.53075 50.2552 8.16562 50.497 8.86782 50.5067C11.1668 50.8452 13.1099 50.1682 14.7067 48.4661C15.3993 47.7311 15.8995 46.8607 16.3516 45.9709C16.544 45.6034 16.746 45.2456 16.9384 44.8781C17.477 43.9013 18.1504 43.0599 19.0642 42.3926C20.6802 41.2224 22.4887 40.6324 24.4125 40.3326C26.0766 40.1392 27.7311 40.1972 29.3472 40.6808C31.5404 41.3384 33.4354 42.4603 34.8301 44.3461C36.4462 46.5415 38.3027 48.5048 40.6209 49.9651C42.1312 50.9226 43.7857 51.203 45.546 50.8355C48.9031 50.1585 51.1059 47.0154 51.0001 43.7465ZM15.9764 46.0193C16.063 45.9902 16.1592 45.9709 16.2554 45.9709C16.1592 45.9709 16.0726 45.9902 15.9764 46.0193ZM29.655 39.1431C29.0394 38.7079 28.4334 38.2726 27.7696 37.9148C26.8847 37.499 26.067 36.9574 25.1436 36.5995C22.3925 35.526 19.5548 34.9651 16.5921 35.0521C16.3997 35.0618 16.2073 35.0618 16.0149 35.0618C15.9861 35.0618 15.9572 35.0521 15.861 35.0231C17.2269 34.704 18.5159 34.3462 19.7568 33.8626C24.8454 31.88 28.6161 28.4274 31.1845 23.6015C31.271 23.4467 31.348 23.292 31.4346 23.1373C31.4634 23.1663 31.5019 23.2049 31.5308 23.234C31.0113 24.9361 30.5784 26.6672 30.3957 28.4467C30.0782 31.3868 30.2899 34.2785 31.1941 37.1024C31.6173 38.7465 32.3291 40.2746 33.1372 41.7639C33.2815 42.0251 33.4354 42.2959 33.5796 42.557C33.5508 42.5763 33.5219 42.5957 33.4931 42.6247C32.2907 41.3771 31.069 40.1585 29.655 39.1431ZM27.7312 38.0212C27.7312 38.0115 27.7408 38.0019 27.7408 38.0019C27.7408 38.0019 27.7312 38.0115 27.7312 38.0212Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_686_285">
            <rect
              width="48"
              height="45"
              fill="white"
              transform="translate(3 6)"
            />
          </clipPath>
        </defs>
      </svg>
    </CarouselBodyIconContainer>
  )
}

const CarouselBodyItemsTextWrapper = styled.div`
  height: 89px;
  color: ${palette.gray[8]};
  @media (max-width: 1199px) {
    height: 64px;
  }

  @media (max-height: 900px) {
    height: 64px;
  }
`

const CarouselBodyItemsTitle = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: -0.02em;
  @media (max-width: 1199px) {
    font-size: 26px;
  }

  @media (max-height: 900px) {
    font-size: 26px;
  }
`

const CarouselBodyItemsContent = styled.h4`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;
  @media (max-width: 1199px) {
    font-size: 18px;
    padding-bottom: 5px;
  }

  @media (max-height: 900px) {
    font-size: 18px;
    padding-bottom: 5px;
  }
`

const CarouselBenefit: FunctionComponent<CarouselInnerScrollProps> = function ({
  page,
  touchStart,
  touchEnd,
  scrollHandler,
  innerScrollHandler,
  language,
}) {
  const carouselBodyRef = useRef<HTMLDivElement>(null)
  useEffect(preventInnerScrollHandler(page, 1, carouselBodyRef), [page])
  const {
    allBenefitJson: { edges },
  }: BenefitListType = useStaticQuery(graphql`
    query getBenefits {
      allBenefitJson(sort: { order: ASC, fields: [seq] }) {
        edges {
          node {
            language
            seq
            title
            content
            icon {
              publicURL
            }
          }
        }
      }
    }
  `)

  const [benefits, setBenefits] = useState<Array<BenefitType>>([])
  useEffect(() => {
    setBenefits(_ => edges.filter(({ node }) => node.language === language))
  }, [language])
  return (
    <CarouselItem style={{ opacity: page === 1 ? 1 : 0.2 }}>
      <CarouselTitleWrapper
        onWheel={scrollHandler(carouselBodyRef)}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
      >
        <CarouselIcon>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M41.4427 16.068C43.1968 14.2169 46.0407 14.2169 47.7947 16.068C49.5488 17.9191 49.5488 20.9203 47.7947 22.7714L38.7605 32.3054C35.5222 35.7229 31.13 37.6428 26.5503 37.6428H11.522C10.7273 37.6428 10.083 36.9629 10.083 36.1242C10.083 35.2856 10.7273 34.6057 11.522 34.6057H26.5503C30.3667 34.6057 34.0269 33.0057 36.7255 30.1578L45.7597 20.6238C46.3898 19.9588 46.3898 18.8806 45.7597 18.2156C45.1296 17.5506 44.1079 17.5506 43.4778 18.2156L37.4961 24.5282C35.0673 27.0913 31.7732 28.5313 28.3384 28.5313H24.4729C23.6782 28.5313 23.0339 27.8514 23.0339 27.0127C23.0339 26.174 23.6782 25.4941 24.4729 25.4941H28.3384C31.0099 25.4941 33.572 24.3741 35.4611 22.3806L41.4427 16.068Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7522 19.6295C15.1535 17.4759 19.3133 17.1241 22.9962 18.6788L23.7139 18.9817C24.3991 19.2709 25.1303 19.4195 25.8682 19.4195H30.2299C32.6141 19.4195 34.5469 21.4592 34.5469 23.9753C34.5469 26.4914 32.6141 28.5311 30.2299 28.5311H24.474V25.4939H30.2299C31.0247 25.4939 31.6689 24.814 31.6689 23.9753C31.6689 23.1366 31.0247 22.4567 30.2299 22.4567H25.8682C24.7641 22.4567 23.6702 22.2344 22.645 21.8017L21.9274 21.4987C19.0796 20.2966 15.863 20.5686 13.2329 22.2339L10.8245 23.7589L9.34375 21.1546L11.7522 19.6295Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.20564 20.9395C6.41091 20.9395 5.76665 21.6194 5.76665 22.4581V37.6441H8.64463V22.4581C8.64463 21.6194 8.00037 20.9395 7.20564 20.9395ZM2.88867 22.4581C2.88867 19.942 4.82144 17.9023 7.20564 17.9023C9.58983 17.9023 11.5226 19.942 11.5226 22.4581V38.2226C11.5226 39.5805 10.4795 40.6813 9.19281 40.6813H5.21846C3.93176 40.6813 2.88867 39.5805 2.88867 38.2226V22.4581Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>NFT Benefit</CarouselTitle>
      </CarouselTitleWrapper>

      <CarouselBody
        ref={carouselBodyRef}
        onWheel={innerScrollHandler(carouselBodyRef)}
      >
        {benefits.map(({ node: { title, content, icon } }) => (
          <CarouselBodyItems>
            <CarouselBodyIconContainer src={icon.publicURL} />
            <CarouselBodyItemsTextWrapper>
              <CarouselBodyItemsTitle>{title}</CarouselBodyItemsTitle>
              <br />
              <CarouselBodyItemsContent>{content}</CarouselBodyItemsContent>
            </CarouselBodyItemsTextWrapper>
          </CarouselBodyItems>
        ))}
      </CarouselBody>
    </CarouselItem>
  )
}

export default CarouselBenefit
