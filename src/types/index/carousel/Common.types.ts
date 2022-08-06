export interface CarouselProps {
  page: number
  touchStart: React.TouchEventHandler
  touchEnd: React.TouchEventHandler
  scrollHandler: React.WheelEventHandler
}

export interface CarouselInnerScrollProps {
  page: number
  touchStart: React.TouchEventHandler
  touchEnd: React.TouchEventHandler
  scrollHandler(ref: React.RefObject<HTMLDivElement>): React.WheelEventHandler
  innerScrollHandler({
    innerScrollHeight,
    setInnerScroll,
    ref,
  }: InnerScrollHandlerParams): React.WheelEventHandler
}

export interface CarouselInnerCarouselProps {
  page: number
  touchStart: React.TouchEventHandler
  touchEnd: React.TouchEventHandler
  scrollHandler(ref: React.RefObject<HTMLDivElement>): React.WheelEventHandler
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

export interface InnerScrollHandlerParams {
  innerScrollHeight: number
  setInnerScroll: React.Dispatch<React.SetStateAction<number>>
  ref: React.RefObject<HTMLDivElement>
}

export interface InnerCarouselPageHandlerParams {
  innerPage: number
  setInnerPage: React.Dispatch<React.SetStateAction<number>>
  end: number
}
