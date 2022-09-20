import styled from '@emotion/styled'
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { GallaryListType, GallaryType } from 'types/index/carousel/CarouselData'
import { ArticleType } from 'types/index/carousel/Article'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
} from './MobileItems'
import { ArticleModalContext } from 'hooks/contexts/ArticleModalProvider'

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
}

const ArticleItems: FunctionComponent<MobileArticleItemsProps> = function ({
  article,
}) {
  const { openArticleModal } = useContext(ArticleModalContext)
  const _openArticleModal = useMemo(() => openArticleModal(article), [])
  return (
    <MobileArticleBodyItems onClick={_openArticleModal}>
      <MobileArticleBodyItemsTitle>{article.title}</MobileArticleBodyItemsTitle>
      <MobileArticleBodyItemsContent>
        {article.content}
      </MobileArticleBodyItemsContent>
    </MobileArticleBodyItems>
  )
}

const MobileArticle = ({ language }) => {
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
          />
        ))}
      </MobileItemBody>
    </MobileItem>
  )
}

export default MobileArticle
