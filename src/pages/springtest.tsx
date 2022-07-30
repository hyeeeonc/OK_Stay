import React, { FunctionComponent, useEffect, useRef } from 'react'
import Header from 'components/common/Header'
import palette from '../../lib/styles/palette'
import styled from '@emotion/styled'

import reset from '../../lib/styles/global'
import { Global } from '@emotion/react'

import CarouselItems from 'components/index/CarouselItem'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { calculateImageSizes } from 'gatsby-plugin-image/dist/src/image-utils'

const IndexWrapper = styled.main`
  height: calc(100vh - 56px);
  width: 10px
  background-color: ${palette.gray[0]};
  // background-color: white;
  overflow: hidden;
`

const Spacer = styled.div`
  height: 56px;
`

const IndexPage: FunctionComponent = function () {
  const parallax = useRef<IParallax>(null!)

  useEffect(() => {
    console.log(parallax.current.content.current)

    parallax.current.container.current.addEventListener(
      'wheel',
      (evt: { preventDefault: () => void; deltaY: number }) => {
        // console.log(evt)
        evt.preventDefault()
        let scr = 0
        scr += evt.deltaY
        parallax.current.container.current.scrollLeft += evt.deltaY

        console.log(parallax.current.container.current.scrollLeft)
      },
    )
  }, [])

  return (
    <>
      <Global styles={reset} />
      <Header />
      <Spacer />
      <IndexWrapper>
        <Parallax
          ref={parallax}
          horizontal
          pages={7}
          className="Pal"
          innerStyle={{ top: 56, height: 'calc( 100vh - 56px)' }}
          // style={{ top: '0', left: '0' }}
        >
          <ParallaxLayer
            offset={0}
            speed={1.1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CarouselItems title="nft" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1.1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CarouselItems title="nft" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CarouselItems title="nft" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CarouselItems title="nft" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CarouselItems title="nft" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CarouselItems title="nft" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={6}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CarouselItems title="nft" />
          </ParallaxLayer>
        </Parallax>
      </IndexWrapper>
    </>
  )
}

export default IndexPage
