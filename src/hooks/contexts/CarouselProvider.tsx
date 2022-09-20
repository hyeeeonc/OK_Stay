import { createContext, useCallback, useMemo, useState } from 'react'

type CarouselContextValue = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>

  innerScrollHandler: (
    ref: React.RefObject<HTMLDivElement>,
  ) => React.WheelEventHandler
  scrollHandler: (
    ref?: React.RefObject<HTMLDivElement>,
  ) => React.WheelEventHandler

  touchStartHandler: (e: React.TouchEvent) => void
  touchEndHandler: (e: React.TouchEvent) => void
}

export const CarouselContext = createContext<CarouselContextValue>(undefined)

const CarouselProvider =
  (pageNum: number) =>
  ({ children }) => {
    const [isScrollable, setScrollable] = useState<boolean>(true)
    const [page, setPage] = useState<number>(0)
    const [_, setPrevScrollTime] = useState<Date>(new Date())
    const [touchPos, setTouchPos] = useState<{ x: number; y: number }>({
      x: 0,
      y: 0,
    })

    const nextPage = useCallback(() => {
      if (page === pageNum - 1) {
        return true
      } else {
        setPage(page + 1)
        setTimeout(() => setScrollable(true), 1500)
        return false
      }
    }, [page])

    const prevPage = useCallback(() => {
      if (page === 0) {
        return true
      } else {
        setPage(page - 1)
        setTimeout(() => setScrollable(true), 1500)
        return false
      }
    }, [page])

    const innerScrollHandler = useCallback(
      (ref: React.RefObject<HTMLDivElement>) => (e: React.WheelEvent) => {
        setPrevScrollTime(t => {
          const now = new Date()
          const timeDiff = now.getTime() - t.getTime()
          setScrollable(isScrollable => {
            if (!isScrollable) {
              return false
            }

            if (
              ref.current.scrollHeight - Math.round(ref.current.scrollTop) <=
              ref.current.clientHeight
            ) {
              if (e.deltaY > 0 && timeDiff >= 100) {
                ref.current.scrollTo(0, 0)
                return nextPage()
              }
            } else if (ref.current.scrollTop === 0) {
              if (e.deltaY < 0 && timeDiff >= 100) {
                ref.current.scrollTo(0, 0)
                return prevPage()
              }
            }
            return true
          })
          return now
        })
      },
      [page],
    )

    const scrollHandler = useCallback(
      (ref?: React.RefObject<HTMLDivElement>) => (e: React.WheelEvent) => {
        setScrollable(isScrollable => {
          if (!isScrollable) {
            return false
          }

          if (e.deltaY > 15) {
            ref?.current.scrollTo(0, 0)
            return nextPage()
          } else if (e.deltaY < -15) {
            ref?.current.scrollTo(0, 0)
            return prevPage()
          } else {
            return true
          }
        })
      },
      [page],
    )

    const touchStartHandler = useCallback(
      (e: React.TouchEvent) => {
        if (!isScrollable) return
        setTouchPos({
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY,
        })
      },
      [page, touchPos],
    )

    const touchEndHandler = useCallback(
      (e: React.TouchEvent) => {
        if (!isScrollable) return

        const deltaX: number = touchPos.x - e.changedTouches[0].pageX
        if (deltaX > 30) {
          nextPage()
        } else if (deltaX < -30) {
          prevPage()
        }
      },
      [page, touchPos],
    )

    const value = useMemo(
      () => ({
        page,
        setPage,
        innerScrollHandler,
        scrollHandler,
        touchStartHandler,
        touchEndHandler,
      }),
      [page],
    )

    return (
      <CarouselContext.Provider value={value}>
        {children}
      </CarouselContext.Provider>
    )
  }

export default CarouselProvider
