import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../../lib/styles/palette'
import {
  Container,
  ModalTitle,
  ModalExit,
  ModalExitIcon,
} from '../../common/Modal'

import { ModalProps } from 'types/index/modal/Modal'

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
    top: calc(48px + 100px);
    left: calc(50vw - 250px);
    height: auto;

    max-width: 460px;

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

const ContactModalBodyWrapper = styled.div`
  max-width: 704px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const ContactModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContactModalTitle = styled.input`
  width: 664px;
  height: 48px;
  padding: 0px 20px;
  border: none;
  border: 0px;
  background-color: ${palette.gray[8]};
  border-radius: 6px;
  margin-bottom: 1.5rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[0]};

  :focus {
    outline: none;
  }

  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: ${palette.gray[5]};
  }

  @media (max-width: 767px) {
    width: calc(100% - 40px);
  }
`

const ContactModalContent = styled.textarea`
  width: 664px;
  height: 106px;
  border: none;
  padding: 16px 20px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[0]};

  background-color: ${palette.gray[8]};
  border-radius: 6px;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: ${palette.gray[5]};
  }

  @media (max-width: 767px) {
    width: calc(100% - 40px);
  }
`

const ContactModalButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 32px;
  width: 704px;
  height: 64px;
  background-color: ${palette.gray[0]};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-top: 24px;
  border: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: white;

  @media (max-width: 767px) {
    width: 100%;
    height: 48px;
    border-radius: 10px;
    margin-bottom: 16px;
  }
`

const ContactModal: FunctionComponent<ModalProps> = function ({
  modalOpened,
  modalCloseHandler,
}) {
  return (
    <>
      <Container
        style={{
          opacity: modalOpened == true ? 1 : 0,
          zIndex: modalOpened == true ? 100 : -10,
        }}
        onClick={modalCloseHandler}
      ></Container>
      <ContentArea
        style={{
          opacity: modalOpened == true ? 1 : 0,
          zIndex: modalOpened == true ? 101 : -11,
        }}
      >
        <ContactModalBodyWrapper>
          <ModalTitle>
            Contact Us
            <ModalExitIcon modalCloseHandler={modalCloseHandler} />
          </ModalTitle>
          <ContactModalForm
            className="gform"
            action="https://script.google.com/macros/s/AKfycbxBg-_4Vmd2r4Jd2PAqqnGwmjvWHhbbURIqsb__5V63uj2JNqTP11oyPyIpp5J4ErypGQ/exec"
            method="POST"
            data-email="minsuk4820@gmail.com"
          >
            <ContactModalTitle
              type="email"
              name="email"
              placeholder="답변받으실 이메일을 입력해주세요."
              required
            />

            <ContactModalTitle
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              required
            />
            <ContactModalContent
              cols={10}
              rows={10}
              name="message"
              placeholder="문의하실 내용을 입력해주세요."
              required
            ></ContactModalContent>
            <ContactModalButton type="submit">보내기</ContactModalButton>
          </ContactModalForm>
        </ContactModalBodyWrapper>
      </ContentArea>
    </>
  )
}

export default ContactModal
