import { CarouselContext } from 'hooks/contexts/CarouselProvider'
import { useContext } from 'react'
import styled from 'styled-components'

const IndicatorBlock = styled.div`
  position: fixed;
  top: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 305px);
  left: calc(50vw - 450px);
  display: flex;
  align-items: center;

  @media (max-width: 1199px) {
    top: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 210px);
    left: calc(50vw - 330px);
  }
  @media (max-height: 900px) {
    top: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 210px);
    left: calc(50vw - 330px);
  }
`
const IndicatorItem = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: white;
  margin-right: 13px;

  transition: 1.5s;
  cursor: pointer;
`

const Indicator = () => {
  const { page, setPage } = useContext(CarouselContext)
  return (
    <IndicatorBlock>
      {[...Array(7)].map((_, index) => (
        <IndicatorItem
          style={{ opacity: page === index ? 1 : 0.2 }}
          onClick={() => setPage(index)}
        ></IndicatorItem>
      ))}
    </IndicatorBlock>
  )
}

export { Indicator }
