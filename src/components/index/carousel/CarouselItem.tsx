import styled from '@emotion/styled'

export const CarouselItem = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 59px;

  flex: none;
  width: 1016px;
  height: 610px;
  margin-right: calc(50vw - 508px - 200px);
  overflow: hidden;
  transition: opacity 1.5s linear;
`

export const CarouselTitleWrapper = styled.div`
  height: 80px;
  margin-top: 112px;
  margin-left: 80px;
  display: flex;
  align-items: center;
`

export const CarouselIcon = styled.div`
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

export const CarouselTitle = styled.h2`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 150%;

  margin-left: 40px;
  color: white;
`

export const CarouselBody = styled.section`
  width: 100%;
`

export interface CarouselProps {
  page: number
}
