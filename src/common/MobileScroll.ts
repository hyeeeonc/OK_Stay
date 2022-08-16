import { RefObject } from 'react'

export const preventMobileScroll = (e: WheelEvent) => e.preventDefault()

export const preventMobileScrollHandler =
  (isMobileScrollable: boolean, ref: RefObject<HTMLDivElement>) => () => {
    console.log(isMobileScrollable)
    if (!isMobileScrollable) {
      ref.current.removeEventListener('wheel', preventMobileScroll)
    } else {
      ref.current.addEventListener('wheel', preventMobileScroll, {
        passive: false,
      })
    }
  }
