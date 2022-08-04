import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import {
  CarouselItem,
  CarouselTitleWrapper,
  CarouselIcon,
  CarouselTitle,
  CarouselInnerScrollProps,
  InnerScrollHandlerParams,
  InnerCarouselPageHandlerParams,
  CarouselInnerCarouselProps,
} from './CarouselItem'

type GallaryImage = {
  img: string
  title: string
  content: string
}

const images: Array<GallaryImage> = [
  {
    img: 'img1',
    title: 'title 1',
    content: 'content 1',
  },
  {
    img: 'img2',
    title: 'title 2',
    content: 'content 2',
  },
  {
    img: 'img3',
    title: 'title 3',
    content: 'content 3',
  },
  {
    img: 'img4',
    title: 'title 4',
    content: 'content 4',
  },
  {
    img: 'img5',
    title: 'title 5',
    content: 'content 5',
  },
]

const GallaryBody = styled.div`
  padding-top: 13px;
  padding-left: 80px;
  height: 325px;
`

type GallaryViewMode = 'TotalView' | 'DetailView'

type GallaryContentAreaProps = {
  prevInnerPage({
    innerPage,
    setInnerPage,
    end,
  }: InnerCarouselPageHandlerParams): Function
  nextInnerPage({
    innerPage,
    setInnerPage,
    end,
  }: InnerCarouselPageHandlerParams): Function
}

const GallaryContentArea: FunctionComponent<GallaryContentAreaProps> =
  function ({ nextInnerPage, prevInnerPage }) {
    const [innerPage, setInnerPage] = useState<number>(0)
    const [innerXTrans, setInnerXTrans] = useState<number>(0)
    useEffect(() => {
      let nowPageWidth: number
      nowPageWidth = innerPage * (520 + 32)
      setInnerXTrans(_ => nowPageWidth)
    }, [innerPage, innerXTrans])

    const [gallaryViewMode, setGallaryViewMode] =
      useState<GallaryViewMode>('TotalView')
    const [imageIndex, setImageIndex] = useState<number>(0)
    const gallaryHorizontalScroll = useRef<HTMLDivElement>(null)

    const innerCarouselHandler = (e: React.WheelEvent) => {
      if (e.deltaY > 15) {
        nextInnerPage({ innerPage, setInnerPage, end: images.length - 1 })()
      } else if (e.deltaY < -15) {
        prevInnerPage({ innerPage, setInnerPage, end: images.length - 1 })()
      } else {
        return
      }
    }

    const switchToDetailView = (index: number) => () => {
      setImageIndex(_ => index)
      setGallaryViewMode(_ => 'DetailView')
    }

    const switchToTotalView = () => {
      setGallaryViewMode(_ => 'TotalView')
    }

    if (gallaryViewMode === 'TotalView') {
      return (
        <Gallary1depth
          style={{ transform: `translate3d(-${innerXTrans}px, 0px, 0px)` }}
          ref={gallaryHorizontalScroll}
          onWheel={innerCarouselHandler}
        >
          {images.map((image, index) => (
            <GallaryImage onClick={switchToDetailView(index)} src={image.img} />
          ))}
        </Gallary1depth>
      )
    }

    if (gallaryViewMode === 'DetailView') {
      return (
        <Gallary2depth
          image={images[imageIndex]}
          switchToTotalView={switchToTotalView}
        ></Gallary2depth>
      )
    }

    return <></>
  }

const Gallary1depth = styled.div`
  padding-top: 13px;
  padding-left: 80px;
  height: 300px;
  display: flex;
  transition: 0.3s;
`

const GallaryImage = styled.img`
  flex: none;
  width: 520px;
  height: 290px;
  background-color: gray;
  margin-right: 32px;
`

type Gallary2depthProps = {
  image: GallaryImage
  switchToTotalView: React.MouseEventHandler
}

const Gallary2depth: FunctionComponent<Gallary2depthProps> = function ({
  image,
  switchToTotalView,
}) {
  return (
    <>
      <h1>title: {image.title}</h1>
      <h1>content: {image.content}</h1>
      <img src={image.img} alt={image.title} />
      <button onClick={switchToTotalView}>돌아가기</button>
    </>
  )
}

const CarouselGallary: FunctionComponent<CarouselInnerCarouselProps> =
  function ({
    page,
    touchStart,
    touchEnd,
    scrollHandler,
    nextInnerPage,
    prevInnerPage,
  }) {
    const carouselBodyRef = useRef<HTMLDivElement>(null)
    return (
      <CarouselItem style={{ opacity: page === 5 ? 1 : 0.2 }}>
        <CarouselTitleWrapper
          onWheel={scrollHandler(carouselBodyRef)}
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
        >
          <CarouselIcon>
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40.4445 14.678H11.5556C9.96012 14.678 8.66672 15.9714 8.66672 17.5668V34.9002C8.66672 36.4957 9.96012 37.7891 11.5556 37.7891H40.4445C42.04 37.7891 43.3334 36.4957 43.3334 34.9002V17.5668C43.3334 15.9714 42.04 14.678 40.4445 14.678ZM11.5556 11.7891C8.36463 11.7891 5.77783 14.3759 5.77783 17.5668V34.9002C5.77783 38.0912 8.36463 40.678 11.5556 40.678H40.4445C43.6355 40.678 46.2223 38.0912 46.2223 34.9002V17.5668C46.2223 14.3759 43.6355 11.7891 40.4445 11.7891H11.5556Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.1112 23.3461C23.1112 26.5371 20.5244 29.1239 17.3334 29.1239C14.1425 29.1239 11.5557 26.5371 11.5557 23.3461C11.5557 20.1552 14.1425 17.5684 17.3334 17.5684C20.5244 17.5684 23.1112 20.1552 23.1112 23.3461ZM17.3334 26.235C18.9289 26.235 20.2223 24.9416 20.2223 23.3461C20.2223 21.7506 18.9289 20.4572 17.3334 20.4572C15.738 20.4572 14.4446 21.7506 14.4446 23.3461C14.4446 24.9416 15.738 26.235 17.3334 26.235Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.26 23.9589C31.9805 22.5032 34.5296 22.6092 36.1233 24.2028L45.7992 33.8788L43.7565 35.9215L34.0805 26.2456C33.5493 25.7144 32.6996 25.679 32.1261 26.1643L15.3775 40.3361L13.5115 38.1308L30.26 23.9589Z"
                fill="white"
              />
            </svg>
          </CarouselIcon>
          <CarouselTitle>Gallary</CarouselTitle>
        </CarouselTitleWrapper>

        <GallaryBody ref={carouselBodyRef}>
          <GallaryContentArea
            nextInnerPage={nextInnerPage}
            prevInnerPage={prevInnerPage}
          />
        </GallaryBody>
      </CarouselItem>
    )
  }

export default CarouselGallary
