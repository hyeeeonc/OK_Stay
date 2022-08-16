import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../../lib/styles/palette'
import {
  Container,
  ContentArea,
  ModalContactWrapper,
  ModalTitle,
  ModalExit,
  ModalProps,
} from '../../common/Modal'

const ArticleModalImg = styled.img`
  max-width: 704px;
  height: 300px;
  margin: 24px 0;

  border-radius: 11px;
`

const ArticleModalBodyContent = styled.div`
  max-width: 704px;
`

type ArticleModalProps = ModalProps & {
  title: string
  content: string
  image: string
}

const ArticleModal: FunctionComponent<ArticleModalProps> = function ({
  modalOpened,
  modalCloseHandler,
  title,
  content,
  image,
}) {
  return (
    <>
      <Container
        style={{
          zIndex: modalOpened == true ? 100 : -10,
          opacity: modalOpened == true ? 1 : 0,
        }}
        onClick={modalCloseHandler}
      ></Container>
      <ContentArea
        style={{
          zIndex: modalOpened == true ? 101 : -11,
          opacity: modalOpened == true ? 1 : 0,
        }}
      >
        <ModalContactWrapper>
          <ModalTitle>{title}</ModalTitle>
          <ArticleModalImg src={image} />
          <ArticleModalBodyContent>{content}</ArticleModalBodyContent>
        </ModalContactWrapper>
      </ContentArea>
      <ModalExit
        style={{
          zIndex: modalOpened == true ? 100 : -10,
          opacity: modalOpened == true ? 1 : 0,
        }}
        onClick={modalCloseHandler}
      >
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_590_4424)">
            <rect
              x="20"
              y="82"
              width="64"
              height="64"
              rx="32"
              transform="rotate(-90 20 82)"
              fill="#2E2D2D"
              shape-rendering="crispEdges"
            />
            <mask
              id="mask0_590_4424"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="34"
              y="32"
              width="36"
              height="36"
            >
              <rect x="34" y="32" width="36" height="36" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_590_4424)"></g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38.5858 36.5858C39.3668 35.8047 40.6332 35.8047 41.4142 36.5858L52 47.1716L62.5858 36.5858C63.3668 35.8047 64.6332 35.8047 65.4142 36.5858C66.1953 37.3668 66.1953 38.6332 65.4142 39.4142L54.8284 50L65.4142 60.5858C66.1953 61.3668 66.1953 62.6332 65.4142 63.4142C64.6332 64.1953 63.3668 64.1953 62.5858 63.4142L52 52.8284L41.4142 63.4142C40.6332 64.1953 39.3668 64.1953 38.5858 63.4142C37.8047 62.6332 37.8047 61.3668 38.5858 60.5858L49.1716 50L38.5858 39.4142C37.8047 38.6332 37.8047 37.3668 38.5858 36.5858Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_590_4424"
              x="0"
              y="0"
              width="104"
              height="104"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_590_4424"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_590_4424"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </ModalExit>
    </>
  )
}

export default ArticleModal
