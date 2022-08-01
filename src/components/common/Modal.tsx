import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../lib/styles/palette'

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0px;
  z-index: 40;
  overscroll: hidden;
  background-color: rgba(18, 18, 18, 0.8);
  width: 100vw;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentArea = styled.div`
  position: absolute;
  width: 1000px;
  height: 600px;
  left: calc(50vw - 500px);
  background-color: white;
  z-index: 45;
  border-radius: 30px;
`

type ModalProps = {
  modalOpened: boolean
  modalCloseHandler: React.MouseEventHandler
}

const Modal: FunctionComponent<ModalProps> = function ({
  modalOpened,
  modalCloseHandler,
}) {
  if (modalOpened) {
    return (
      <>
        <Container onClick={modalCloseHandler}></Container>
        <ContentArea>
          <form
            className="gform"
            action="https://script.google.com/macros/s/AKfycbxBg-_4Vmd2r4Jd2PAqqnGwmjvWHhbbURIqsb__5V63uj2JNqTP11oyPyIpp5J4ErypGQ/exec"
            method="POST"
            data-email="minsuk4820@gmail.com"
          >
            <input type="text" name="name" placeholder="이름" />
            <input type="text" name="email" placeholder="이메일" />
            <textarea cols={10} rows={10} name="message" required></textarea>
            <button type="submit">전송하기</button>
          </form>
        </ContentArea>
      </>
    )
  } else {
    return <></>
  }
}

export default Modal
