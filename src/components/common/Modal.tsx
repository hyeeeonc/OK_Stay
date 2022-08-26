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
  transition: opacity 0.3s, z-index 0.3s cubic-bezier(0, 1, 1, 0);

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

  display: flex;
  justify-content: space-between;

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

const ModalExit2 = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`

interface ModalExitIconProps {
  modalCloseHandler: React.MouseEventHandler
}

export const ModalExitIcon: FunctionComponent<ModalExitIconProps> = function ({
  modalCloseHandler,
}) {
  return (
    <ModalExit2 onClick={modalCloseHandler}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_848_4769"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_848_4769)"></g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.05727 3.05752C3.57797 2.53682 4.42219 2.53682 4.94289 3.05752L12.0001 10.1147L19.0573 3.05752C19.578 2.53682 20.4222 2.53682 20.9429 3.05752C21.4636 3.57822 21.4636 4.42244 20.9429 4.94313L13.8857 12.0003L20.9429 19.0575C21.4636 19.5782 21.4636 20.4224 20.9429 20.9431C20.4222 21.4638 19.578 21.4638 19.0573 20.9431L12.0001 13.8859L4.94289 20.9431C4.42219 21.4638 3.57797 21.4638 3.05727 20.9431C2.53657 20.4224 2.53657 19.5782 3.05727 19.0575L10.1145 12.0003L3.05727 4.94313C2.53657 4.42244 2.53657 3.57822 3.05727 3.05752Z"
          fill="#666666"
        />
      </svg>
    </ModalExit2>
  )
}
