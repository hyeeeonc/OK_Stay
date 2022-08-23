import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useState, useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { GallaryListType, GallaryType } from 'types/index/carousel/CarouselData'
import { ArticleType } from 'types/index/carousel/Article'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
  MobileArticleProps,
} from './MobileItems'

const MobileArticleBodyItems = styled.div`
  margin-bottom: 32px;
`

const MobileArticleBodyItemsTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[9]};

  flex: none;
`

const MobileArticleBodyItemsContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;

  margin-top: 8px;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: ${palette.gray[7]};
`

type MobileArticleItemsProps = {
  article: ArticleType
  articleModalOpenHandler(article: ArticleType): React.MouseEventHandler
}

const ArticleItems: FunctionComponent<MobileArticleItemsProps> = function ({
  article,
  articleModalOpenHandler,
}) {
  const _articleModalOpenHandler = articleModalOpenHandler(article)
  return (
    <MobileArticleBodyItems onClick={_articleModalOpenHandler}>
      <MobileArticleBodyItemsTitle>{article.title}</MobileArticleBodyItemsTitle>
      <MobileArticleBodyItemsContent>
        {article.content}
      </MobileArticleBodyItemsContent>
    </MobileArticleBodyItems>
  )
}

const MobileArticle: FunctionComponent<MobileArticleProps> = function ({
  language,
  articleModalOpenHandler,
}) {
  const {
    allGallaryJson: { edges },
  }: GallaryListType = useStaticQuery(graphql`
    query getGallary {
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
    <MobileItem>
      <MobileItemTitleWrapper>Article</MobileItemTitleWrapper>

      <MobileItemBody>
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
      </MobileItemBody>
    </MobileItem>
  )
}

export default MobileArticle
