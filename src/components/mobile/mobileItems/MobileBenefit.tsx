import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
  MobileItemsProps,
} from './MobileItems'

import { BenefitType, BenefitListType } from 'types/index/carousel/CarouselData'

const MobileBenefitBodyItems = styled.div`
  margin-bottom: 20px;
`

const MobileBenefitBodyItemTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 155%;
  letter-spacing: 0.002em;
  color: ${palette.gray[8]};

  margin-bottom: 8px;
`

const MobileBenefitBodyItemContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  letter-spacing: 0.002em;

  color: ${palette.gray[7]};
`

const MobileBenefit: FunctionComponent<MobileItemsProps> = function ({
  language,
}) {
  const {
    allBenefitJson: { edges },
  }: BenefitListType = useStaticQuery(graphql`
    query getBenefit {
      allBenefitJson(sort: { order: ASC, fields: [seq] }) {
        edges {
          node {
            language
            seq
            title
            content
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
    <MobileItem>
      <MobileItemTitleWrapper>NFT Benefit</MobileItemTitleWrapper>

      <MobileItemBody>
        {benefits.map(({ node: { title, content } }) => (
          <MobileBenefitBodyItems>
            <MobileBenefitBodyItemTitle>{title}</MobileBenefitBodyItemTitle>
            <MobileBenefitBodyItemContent>
              {content}
            </MobileBenefitBodyItemContent>
          </MobileBenefitBodyItems>
        ))}
      </MobileItemBody>
    </MobileItem>
  )
}

export default MobileBenefit
