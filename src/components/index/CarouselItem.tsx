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

  flex: none;
  width: 1016px;
  height: 610px;
  margin-right: calc(50vw - 508px - 200px);
  scroll-snap-align: center;
`

const CarouselTitleWrapper = styled.div`
  height: 80px;
  margin-top: 112px;
  margin-left: 80px;
  display: flex;
  align-items: center;
`

const CarouselIcon = styled.div`
  width: 80px;
  height: 80px;
  left: 80px;
  top: 112px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const CarouselTitle = styled.h2`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 150%;

  margin-left: 40px;
  color: white;
`

interface CarouselProps {
  title: string
}

const CarouselItems: FunctionComponent<CarouselProps> = function ({ title }) {
  return (
    <CarouselItem>
      <CarouselTitleWrapper>
        <CarouselIcon>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.33301 30.221C5.33301 27.4718 7.56166 25.2432 10.3108 25.2432H17.7776C20.5268 25.2432 22.7554 27.4718 22.7554 30.221V37.6877C22.7554 40.4369 20.5268 42.6656 17.7776 42.6656H10.3108C7.56166 42.6656 5.33301 40.4369 5.33301 37.6877V30.221ZM17.7776 30.221H10.3108V37.6877H17.7776V30.221Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.2451 10.3108C25.2451 7.56166 27.4738 5.33301 30.2229 5.33301H37.6897C40.4389 5.33301 42.6675 7.56166 42.6675 10.3108V17.7776C42.6675 20.5267 40.4389 22.7554 37.6897 22.7554H30.2229C27.4738 22.7554 25.2451 20.5267 25.2451 17.7776V10.3108ZM37.6897 10.3108H30.2229V17.7776H37.6897V10.3108Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.33301 10.3108C5.33301 7.56166 7.56166 5.33301 10.3108 5.33301H17.7776C20.5268 5.33301 22.7554 7.56166 22.7554 10.3108V17.7776C22.7554 20.5267 20.5268 22.7554 17.7776 22.7554H10.3108C7.56166 22.7554 5.33301 20.5267 5.33301 17.7776V10.3108ZM17.7776 10.3108H10.3108V17.7776H17.7776V10.3108Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.2451 33.9544C25.2451 29.1433 29.1453 25.2432 33.9563 25.2432C38.7674 25.2432 42.6675 29.1433 42.6675 33.9544C42.6675 38.7654 38.7674 42.6656 33.9563 42.6656C29.1453 42.6656 25.2451 38.7654 25.2451 33.9544ZM33.9563 30.221C31.8944 30.221 30.2229 31.8925 30.2229 33.9544C30.2229 36.0162 31.8944 37.6877 33.9563 37.6877C36.0182 37.6877 37.6897 36.0162 37.6897 33.9544C37.6897 31.8925 36.0182 30.221 33.9563 30.221Z"
              fill="white"
            />
          </svg>
        </CarouselIcon>
        <CarouselTitle>{title}</CarouselTitle>
      </CarouselTitleWrapper>
    </CarouselItem>
  )
}

export default CarouselItems
