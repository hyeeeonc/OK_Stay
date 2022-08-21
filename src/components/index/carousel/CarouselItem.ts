import styled from '@emotion/styled'
// import React from 'react'
import { Language } from 'types/common/language'
import { ArticleType } from 'types/index/carousel/Article'

export const CarouselItem = styled.div`
  background: rgba(255, 255, 255, 0.26);
  border-radius: 58px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.34);

  flex: none;
  width: 1014px;
  height: 610px;
  margin-right: calc(50vw - 508px - 200px);
  overflow: hidden;
  transition: opacity 1.5s linear;
  @media (max-width: 1450px) {
    margin-right: calc(50vw - 508px - 80px);
  }

  @media (max-width: 1199px) {
    width: 728px;
    height: 438px;
    margin-right: calc(50vw - 365px - 60px);
    border-radius: 41px;
  }


  @media (max-height: 900px) {
    width: 728px;
    height: 438px;
    margin-right: calc(50vw - 365px - 60px);
    border-radius: 41px;
  }

  @media (max-width: 970px) {
    margin-right: calc(50vw - 365px - 15px);
  }

`

export const CarouselTitleWrapper = styled.div`
  height: 80px;
  padding: 112px 0px 50px 80px;
  display: flex;
  align-items: center;
  @media (max-width: 1199px) {
    height: 57px;
    padding: 65px 0 55px 57px;
  }

  @media (max-height: 900px) {
    height: 57px;
    padding: 65px 0 55px 57px;
  }
`

export const CarouselIcon = styled.div`
  width: 80px;
  height: 80px;
  left: 80px;
  top: 112px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1199px) {
    width: 70px;
    height: 70px;
    left: 57px;
    top: 80px;
  }

  @media (max-height: 900px) {
    width: 70px;
    height: 70px;
    left: 57px;
    top: 80px;
  }
`

export const CarouselTitle = styled.h2`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 150%;

  margin-left: 40px;
  color: white;
  @media (max-width: 1199px) {
    font-size: 44px;
  }

  @media (max-height: 900px) {
    font-size: 44px;
  }
`

export const CarouselBody = styled.section`
  width: 100%;
`

export interface CarouselProps {
  page: number
  touchStart: React.TouchEventHandler
  touchEnd: React.TouchEventHandler
  scrollHandler: React.WheelEventHandler
  language: Language
}

export interface CarouselInnerScrollProps {
  page: number
  touchStart: React.TouchEventHandler
  touchEnd: React.TouchEventHandler
  scrollHandler(ref: React.RefObject<HTMLDivElement>): React.WheelEventHandler
  innerScrollHandler(
    ref: React.RefObject<HTMLDivElement>,
  ): React.WheelEventHandler
  language: Language
}

export interface CarouselArticleProps extends CarouselInnerScrollProps {
  articleModalOpenHandler(article: ArticleType): React.MouseEventHandler
}

export interface CarouselInnerCarouselProps {
  page: number
  touchStart: React.TouchEventHandler
  touchEnd: React.TouchEventHandler
  language: Language
  scrollHandler(ref: React.RefObject<HTMLDivElement>): React.WheelEventHandler
  prevInnerPage({
    innerPage,
    setInnerPage,
    end,
  }: InnerCarouselPageHandlerParams): Function
  nextInnerPage({
    innerPage,
    setInnerPage,
    end,
  }: InnerCarouselPageHandlerParams): Function
}

export interface InnerScrollHandlerParams {
  innerScrollHeight: number
  setInnerScroll: React.Dispatch<React.SetStateAction<number>>
  ref: React.RefObject<HTMLDivElement>
}

export interface InnerCarouselPageHandlerParams {
  innerPage: number
  setInnerPage: React.Dispatch<React.SetStateAction<number>>
  end: number
}
