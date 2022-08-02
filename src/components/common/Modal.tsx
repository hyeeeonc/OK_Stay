import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../lib/styles/palette'

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0px;
  overflow: hidden;
  background-color: rgba(18, 18, 18, 0.8);
  width: 100vw;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
`

const ContentArea = styled.div`
  position: absolute;
  width: 870px;
  height: 520px;
  left: calc(50vw - 435px);
  background-color: ${palette.gray[9]};
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const ModalContactWrapper = styled.section`
  width: 704px;
  display: flex;
  flex-direction: column;
`
const ModalTitle = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  color: ${palette.gray[0]};
  margin-bottom: 24px;
`

const ModalContactTitle = styled.input`
  width: 664px;
  height: 48px;
  padding: 0px 20px;
  border: none;
  background-color: ${palette.gray[8]};
  border-radius: 6px;
  margin-bottom: 1.5rem;
`

const ModalContactContent = styled.textarea`
  width: 664px;
  height: 106px;
  border: none;
  padding: 16px 20px;

  background-color: ${palette.gray[8]};
  border-radius: 6px;
`

const ModalContactButton = styled.button`
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
`

const ModalExit = styled.div`
  position: absolute;
  left: calc(50vw + 435px + 5px);
  top: calc(50vh - 260px - 56px + 8px);
`

type ModalProps = {
  modalOpened: boolean
  modalCloseHandler: React.MouseEventHandler
}

const Modal: FunctionComponent<ModalProps> = function ({
  modalOpened,
  modalCloseHandler,
}) {
  return (
    <>
      <Container
        style={{
          zIndex: modalOpened == true ? 40 : -10,
          opacity: modalOpened == true ? 1 : 0,
        }}
        onClick={modalCloseHandler}
      ></Container>
      <ContentArea
        style={{
          zIndex: modalOpened == true ? 41 : -11,
          opacity: modalOpened == true ? 1 : 0,
        }}
      >
        <ModalContactWrapper>
          <ModalTitle>Contact Us</ModalTitle>
          <form
            className="gform"
            action="https://script.google.com/macros/s/AKfycbxBg-_4Vmd2r4Jd2PAqqnGwmjvWHhbbURIqsb__5V63uj2JNqTP11oyPyIpp5J4ErypGQ/exec"
            method="POST"
            data-email="minsuk4820@gmail.com"
          >
            <ModalContactTitle
              type="email"
              name="email"
              placeholder="E-Mail"
              required
            />

            <ModalContactTitle
              type="text"
              name="title"
              placeholder="제목을 입력해주세요"
              required
            />
            <ModalContactContent
              cols={10}
              rows={10}
              name="message"
              placeholder="문의하실 내용을 입력해주세요."
              required
            ></ModalContactContent>
            <ModalContactButton type="submit">보내기</ModalContactButton>
          </form>
        </ModalContactWrapper>
      </ContentArea>
      <ModalExit
        style={{
          zIndex: modalOpened == true ? 40 : -10,
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

export default Modal
