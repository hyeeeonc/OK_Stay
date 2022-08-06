import { RefObject } from 'react'

export const preventInnerScroll = (e: WheelEvent) => e.preventDefault()

export const preventInnerScrollHandler =
  (page: number, nowPage: number, ref: RefObject<HTMLDivElement>) => () => {
    if (page === nowPage) {
      setTimeout(() => {
        ref.current.removeEventListener('wheel', preventInnerScroll)
      }, 1500)
    } else {
      ref.current.addEventListener('wheel', preventInnerScroll, {
        passive: false,
      })
    }
  }
