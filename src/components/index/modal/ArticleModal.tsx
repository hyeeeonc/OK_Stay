import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../../lib/styles/palette'
import {
  Container,
  ModalContactWrapper,
  ModalTitle,
  ModalExitIcon,
} from '../../common/Modal'

import { ArticleModalProps } from 'types/index/modal/Modal'

const ArticleModalContentBlock = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  width: 870px;
  height: 520px;
  background-color: ${palette.gray[9]};
  transition: opacity 0.3s, z-index 0.3s cubic-bezier(0, 1, 1, 0);
  border-radius: 10px;
`

const ContentArea = styled.div`
  position: absolute;
  width: 870px;
  height: 520px;
  left: calc(50vw - 435px);
  background-color: ${palette.gray[9]};
  transition: opacity 0.3s, z-index 0.3s cubic-bezier(0, 1, 1, 0);
  display: flex;
  justify-content: center;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 900px) {
    width: 760px;
    left: calc(50vw - 380px);
  }

  @media (max-width: 767px) {
    position: fixed;
    top: calc(48px + 50px);
    left: calc(50vw - 250px);
    max-width: 460px;
    height: calc(calc(100vh - calc(100vh - 100%)) - 48px - 100px - 40px);
    padding: 0 20px;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 500px) {
    width: calc(100vw - 32px - 40px);
    top: calc(48px + 50px);

    left: 16px;
  }
`

const ArticleModalImgContainer = styled.div`
  max-width: 790px;
  height: 300px;
  margin: 24px 0;
  overflow: hidden;
  flex: none;

  display: flex;
  align-items: center;

  border-radius: 11px;

  @media (max-width: 900px) {
    max-width: 704px;
  }

  @media (max-width: 767px) {
    height: 200px;
  }

  @media (max-width: 500px) {
    height: 150px;
  }
`

const ArticleModalImg = styled.img`
  max-width: 100%;
  height: auto;
`

const ArticleModalBodyContent = styled.div`
  max-width: 790px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[4]};

  padding-bottom: 50px;

  @media (max-width: 900px) {
    max-width: 704px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const ArticleModal: FunctionComponent<ArticleModalProps> = function ({
  modalOpened,
  modalCloseHandler,
  article: { image, title, content, modalImage },
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
          <ModalTitle>
            {title}
            <ModalExitIcon modalCloseHandler={modalCloseHandler} />
          </ModalTitle>
          <ArticleModalImgContainer>
            <ArticleModalImg src={modalImage} />
          </ArticleModalImgContainer>
          <ArticleModalBodyContent>
            {content.split('\n').map(line => {
              return (
                <span>
                  {line}
                  <br />
                  <br />
                </span>
              )
            })}
          </ArticleModalBodyContent>
        </ModalContactWrapper>
      </ContentArea>
    </>
  )
}

export default ArticleModal
