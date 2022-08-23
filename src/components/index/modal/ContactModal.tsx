import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../../lib/styles/palette'
import { Container, ModalTitle, ModalExit } from '../../common/Modal'

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
        <ContactModalBodyWrapper>
          <ModalTitle>Contact Us</ModalTitle>
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

export default ContactModal
