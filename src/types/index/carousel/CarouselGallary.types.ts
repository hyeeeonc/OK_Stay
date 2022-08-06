import { InnerCarouselPageHandlerParams } from 'components/index/carousel/CarouselItem'

export type GallaryImageListType = {
  allDetailJson: {
    edges: GallaryImageType[]
  }
}

export type GallaryImageType = {
  node: {
    seq: number
    title: string
    content: string
    img: string
  }
}

export type GallaryContentAreaProps = {
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

export type GallaryViewMode = 'TotalView' | 'DetailView'

export type Gallary2depthProps = {
  image: GallaryImageType
  switchToTotalView: React.MouseEventHandler
}
