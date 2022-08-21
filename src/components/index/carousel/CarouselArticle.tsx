import styled from '@emotion/styled'
import React, {
  FunctionComponent,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react'
import palette from '../../../../lib/styles/palette'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
} from './CarouselItem'

import { CarouselArticleProps } from 'types/index/carousel/CarouselProps'

import { GallaryListType, GallaryType } from 'types/index/carousel/CarouselData'
import { ArticleType } from 'types/index/carousel/Article'

import { preventInnerScrollHandler } from '../../../common/InnerScroll'
import { useStaticQuery, graphql } from 'gatsby'

const ArticleBody = styled.div`
  margin-right: 40px;
  padding: 0 80px;
  height: 340px;
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
    background: ${palette.gray[4]};
    border-radius: 31px;
  }

  @media (max-width: 1199px) {
    padding: 0 30px 0 57px;
    height: 250px;
  }

  @media (max-height: 900px) {
    padding: 0 30px 0 57px;
    height: 250px;
  }
`

const ArticleItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 1199px) {
    margin-bottom: 28px;
  }

  @media (max-height: 900px) {
    margin-bottom: 28px;
  }
`

const ArticleItemImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 12px;
  filter: grayscale(100%);

  @media (max-width: 1199px) {
    width: 128px;
    height: 128px;
    border-radius: 8px;
  }

  @media (max-height: 900px) {
    width: 128px;
    height: 128px;
    border-radius: 8px;
  }
`

const ArticleItemTextWrapper = styled.div`
  margin-left: 40px;
`

const ArticleItemTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.02em;

  margin-bottom: 8px;

  color: ${palette.gray[9]};
  @media (max-width: 1199px) {
    font-size: 23px;
    margin-bottom: 0px;
  }

  @media (max-height: 900px) {
    font-size: 23px;
    padding-bottom: 0px;
  }
`

const ArticleitemContent = styled.div`
  width: 100%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[7]};

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  overflow: hidden;

  @media (max-width: 1199px) {
    font-size: 16px;
  }

  @media (max-height: 900px) {
    font-size: 16px;
  }
`

type ArticleItemsProps = {
  article: ArticleType
  articleModalOpenHandler(article: ArticleType): React.MouseEventHandler
}

const ArticleItems: FunctionComponent<ArticleItemsProps> = function ({
  article,
  articleModalOpenHandler,
}) {
  const _articleModalOpenHandler = useMemo(
    () => articleModalOpenHandler(article),
    [],
  )
  return (
    <ArticleItem onClick={_articleModalOpenHandler}>
      <ArticleItemImage src={article.modalImage}></ArticleItemImage>
      <ArticleItemTextWrapper>
        <ArticleItemTitle>{article.title}</ArticleItemTitle>
        <ArticleitemContent>{article.content}</ArticleitemContent>
      </ArticleItemTextWrapper>
    </ArticleItem>
  )
}

const CarouselArticle: FunctionComponent<CarouselArticleProps> = function ({
  page,
  touchStart,
  touchEnd,
  language,
  scrollHandler,
  innerScrollHandler,
  articleModalOpenHandler,
}) {
  const carouselBodyRef = useRef<HTMLDivElement>(null)
  useEffect(preventInnerScrollHandler(page, 5, carouselBodyRef), [page])

  const _innerScrollHandler = useMemo(
    () => innerScrollHandler(carouselBodyRef),
    [page],
  )
  const _scrollHandler = useMemo(() => scrollHandler(carouselBodyRef), [page])

  const {
    allGallaryJson: { edges },
  }: GallaryListType = useStaticQuery(graphql`
    query getGallarys {
      allGallaryJson(sort: { order: ASC, fields: [seq] }) {
        edges {
          node {
            language
            seq
            img {
              publicURL
            }
            modalImg {
              publicURL
            }
            title
            content
          }
        }
      }
    }
  `)

  const [articles, setArticles] = useState<Array<GallaryType>>([])
  useEffect(() => {
    setArticles(_ => edges.filter(({ node }) => node.language === language))
  }, [language])
  console.log('article')

  return (
    <CarouselItem style={{ opacity: page === 5 ? 1 : 0.2 }}>
      <CarouselTitleWrapper
        onWheel={_scrollHandler}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
      >
        <CarouselIcon>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.889 11.5557C13.4958 11.5557 11.5557 13.4958 11.5557 15.889V33.2223C11.5557 37.2111 14.7892 40.4446 18.7779 40.4446H37.5557C40.7466 40.4446 43.3334 37.8578 43.3334 34.6668V26.0001H34.6668V15.889C34.6668 13.4958 32.7267 11.5557 30.3334 11.5557H15.889ZM32.5509 37.5557H18.7779C16.3847 37.5557 14.4446 35.6156 14.4446 33.2223V15.889C14.4446 15.0913 15.0913 14.4446 15.889 14.4446H30.3334C31.1312 14.4446 31.7779 15.0913 31.7779 15.889V26.0001V34.6668C31.7779 35.7192 32.0592 36.7058 32.5509 37.5557ZM37.5557 37.5557C39.1512 37.5557 40.4446 36.2623 40.4446 34.6668V28.889H34.6668V34.6668C34.6668 36.2623 35.9602 37.5557 37.5557 37.5557ZM17.3334 21.6668C17.3334 20.869 17.9801 20.2223 18.7779 20.2223H27.4446C28.2423 20.2223 28.889 20.869 28.889 21.6668C28.889 22.4645 28.2423 23.1112 27.4446 23.1112H18.7779C17.9801 23.1112 17.3334 22.4645 17.3334 21.6668ZM18.7779 26.0001C17.9801 26.0001 17.3334 26.6468 17.3334 27.4446C17.3334 28.2423 17.9801 28.889 18.7779 28.889H27.4446C28.2423 28.889 28.889 28.2423 28.889 27.4446C28.889 26.6468 28.2423 26.0001 27.4446 26.0001H18.7779Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>Article</CarouselTitle>
      </CarouselTitleWrapper>

      <ArticleBody ref={carouselBodyRef} onWheel={_innerScrollHandler}>
        {articles.map(({ node: { img, modalImg, title, content } }) => (
          <ArticleItems
            article={{
              title,
              content,
              image: img?.publicURL,
              modalImage: modalImg?.publicURL,
            }}
            articleModalOpenHandler={articleModalOpenHandler}
          />
        ))}
      </ArticleBody>
    </CarouselItem>
  )
}

export default CarouselArticle
