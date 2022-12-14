import { Language } from '../../common/language'

export type CarouselDataType = {
  node: {
    language: Language
    seq: number
    title: string
    content: string
  }
}

export type GallaryType = CarouselDataType & {
  node: { img: { publicURL: string }; modalImg: { publicURL: string } }
}

export type BenefitType = CarouselDataType & {
  node: { icon: { publicURL: string } }
}

export type BenefitListType = {
  allBenefitJson: {
    edges: Array<BenefitType>
  }
}

export type GallaryListType = {
  allGallaryJson: {
    edges: Array<GallaryType>
  }
}

export type ProcessListType = {
  allProcessJson: {
    edges: Array<CarouselDataType>
  }
}

export type QnAListType = {
  allQnaJson: {
    edges: Array<CarouselDataType>
  }
}

export type RoadmapListType = {
  allRoadmapJson: {
    edges: Array<CarouselDataType>
  }
}
