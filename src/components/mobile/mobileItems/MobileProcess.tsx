import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
  ProcessListType,
  CarouselDataType,
} from 'types/index/carousel/CarouselData'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
  MobileItemsProps,
} from './MobileItems'

const MobileProcessBodyItems = styled.div`
  margin-bottom: 20px;
`

const MobileProcessBodyItemsTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[8]};
  margin-bottom: 8px;
`

const MobileProcessBodyItemsContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[7]};
`

const MobileProcess: FunctionComponent<MobileItemsProps> = function ({
  language,
}) {
  const {
    allProcessJson: { edges },
  }: ProcessListType = useStaticQuery(graphql`
    query getProcess {
      allProcessJson(sort: { order: ASC, fields: [seq] }) {
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

  const [processes, setProcesses] = useState<Array<CarouselDataType>>([])
  useEffect(() => {
    setProcesses(_ => edges.filter(({ node }) => node.language === language))
  }, [language])

  return (
    <MobileItem>
      <MobileItemTitleWrapper>Process</MobileItemTitleWrapper>
      <MobileItemBody>
        {processes.map(({ node: { title, content } }) => (
          <MobileProcessBodyItems>
            <MobileProcessBodyItemsTitle>{title}</MobileProcessBodyItemsTitle>
            <MobileProcessBodyItemsContent>
              {content}
            </MobileProcessBodyItemsContent>
          </MobileProcessBodyItems>
        ))}
      </MobileItemBody>
    </MobileItem>
  )
}

export default MobileProcess
