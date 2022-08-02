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
  left: calc();
  top: calc();
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
              type="text"
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
    </>
  )
}

export default Modal
