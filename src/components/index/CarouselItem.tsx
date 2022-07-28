import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

const CarouselItem = styled.div`
  box-sizing: border-box;

  background: linear-gradient(
    129.69deg,
    #ffffff -110.73%,
    rgba(255, 255, 255, 0) 98.01%
  );
  border: 3px solid #282828;
  filter: drop-shadow(0px 8px 32px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(300px);
  border-radius: 59px;
  width: 1016px;
  height: 610px;
`
const CarouselItems: FunctionComponent = function () {
  return <CarouselItem></CarouselItem>
}

export default CarouselItems
