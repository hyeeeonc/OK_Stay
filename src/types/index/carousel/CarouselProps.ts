import { Language } from 'types/common/language'
import { ArticleType } from './Article'

export type CarouselProps<E = HTMLDivElement> = {
  page: number
  touchStart: React.TouchEventHandler
  touchEnd: React.TouchEventHandler
  language: Language
  scrollHandler: (ref?: React.RefObject<E>) => React.WheelEventHandler
  innerScrollHandler?: (ref: React.RefObject<E>) => React.WheelEventHandler
}

export type CarouselQnAProps<E = HTMLDivElement> = CarouselProps<E> & {
  qnaModalOpenHandler:  React.MouseEventHandler
}


export type CarouselArticleProps<E = HTMLDivElement> = CarouselProps<E> & {
  articleModalOpenHandler: (article: ArticleType) => React.MouseEventHandler
}
