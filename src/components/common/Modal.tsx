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
  transition: opacity 0.3s;

  @media (max-width: 767px) {
    top: 48px;
    height: calc(calc(100vh - calc(100vh - 100%)) - 48px);
  }
`

export const ModalContactWrapper = styled.section`
  max-width: 790px;
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
  margin: 40px 0 24px 0;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const ModalExit = styled.div`
  position: absolute;
  left: calc(50vw + 435px + 5px);
  top: calc(50vh - 260px - 56px + 8px);

  @media (max-width: 1090px) {
    width: 80px;
    height: 80px;
    left: calc(50vw + 435px - 85px);
    top: calc(50vh - 260px - 56px - 70px);
  }

  @media (max-width: 900px) {
    width: 80px;
    height: 80px;

    left: calc(50vw + 380px - 85px);
    top: calc(50vh - 260px - 56px - 70px);
  }

  @media (max-width: 767px) {
    display: none;
  }
`
