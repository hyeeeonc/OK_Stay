import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import MainCarousel3 from 'components/index/MainCarousel3'
import DropDown from 'components/index/DropDown'
import Modal from 'components/common/Modal'
import MintButton from 'components/index/MintButton'

const IndexWrapper = styled.main`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 56px);
  background-color: ${palette.gray[0]};
  display: flex;
  align-items: center;
`

const Spacer = styled.div`
  height: 56px;
`

const IndexPage: FunctionComponent = function () {
  const [carouselPageController, setCarouselPageController] =
    useState<number>(null)

  const getHeaderPageData = (page: number) => {
    setCarouselPageController(page)
  }

  useEffect(() => {
    if (carouselPageController === 0) {
      setCarouselPageController(null)
    }
  }, [carouselPageController])

  useEffect(() => {
    console.log(carouselPageController)
  }, [carouselPageController])

  const [dropDownOpened, setDropDownOpened] = useState<boolean>(false)

  const dropDownButtonHandler: React.MouseEventHandler = () => {
    setDropDownOpened(ddo => !ddo)
  }

  const [modalOpened, setModalOpened] = useState<boolean>(false)

  const modalCloseHandler: React.MouseEventHandler = () =>
    setModalOpened(_ => false)
  const modalOpenHandler: React.MouseEventHandler = () =>
    setModalOpened(_ => true)

  return (
    <>
      <Global styles={reset} />
      <Header
        getHeaderPageData={getHeaderPageData}
        modalOpenHandler={modalOpenHandler}
      />
      <Spacer />
      <IndexWrapper>
        <Modal
          modalCloseHandler={modalCloseHandler}
          modalOpened={modalOpened}
        ></Modal>
        <MainCarousel3 headerPage={carouselPageController} />
        <DropDown
          dropDownOpened={dropDownOpened}
          dropDownButtonHandler={dropDownButtonHandler}
        ></DropDown>
        <MintButton />
      </IndexWrapper>
    </>
  )
}

export default IndexPage
