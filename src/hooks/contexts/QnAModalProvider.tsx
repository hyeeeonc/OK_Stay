import { createContext, useCallback, useMemo, useState } from 'react'

type QnAModalContextValue = {
  qnaModalOpened: boolean
  toggleQnAModal: React.MouseEventHandler
}

export const QnAModalContext = createContext<QnAModalContextValue>(undefined)

const QnAModalProvider = ({ children }) => {
  const [qnaModalOpened, setQnAModalOpened] = useState<boolean>(false)
  const toggleQnAModal = useCallback(
    () => setQnAModalOpened(isOpened => !isOpened),
    [],
  )

  const value = useMemo(
    () => ({
      qnaModalOpened,
      toggleQnAModal,
    }),
    [qnaModalOpened],
  )

  return (
    <QnAModalContext.Provider value={value}>
      {children}
    </QnAModalContext.Provider>
  )
}

export default QnAModalProvider
