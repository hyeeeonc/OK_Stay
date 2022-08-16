import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import palette from '../../../lib/styles/palette'

export const Container = styled.div`
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

export const ContentArea = styled.div`
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

export const ModalContactWrapper = styled.section`
  max-width: 704px;
  display: flex;
  flex-direction: column;
`

export const ModalTitle = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  color: ${palette.gray[0]};
  margin-bottom: 24px;
`

export const ModalExit = styled.div`
  position: absolute;
  left: calc(50vw + 435px + 5px);
  top: calc(50vh - 260px - 56px + 8px);

  @media();
`

export type ModalProps = {
  modalOpened: boolean
  modalCloseHandler: React.MouseEventHandler
}
