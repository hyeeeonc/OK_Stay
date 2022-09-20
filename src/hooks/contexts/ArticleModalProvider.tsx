import { createContext, useCallback, useMemo, useState } from 'react'
import { ArticleType } from 'types/index/carousel/Article'
import { ArticleModalProps } from 'types/index/modal/Modal'

type ArticleModalContextValue = {
  articleModal: ArticleModalProps
  openArticleModal: (article: ArticleType) => React.MouseEventHandler
  closeArticleModal: React.MouseEventHandler
}

export const ArticleModalContext =
  createContext<ArticleModalContextValue>(undefined)

const ArticleModalProvider = ({ children }) => {
  const [articleModal, setArticleModal] = useState<ArticleModalProps>({
    article: {
      title: '',
      content: '',
      image: '',
    },
    modalOpened: false,
  })
  const openArticleModal = useCallback(
    (article: ArticleType) => () =>
      setArticleModal(_ => ({ article, modalOpened: true })),
    [],
  )
  const closeArticleModal = useCallback(
    () => setArticleModal(a => ({ ...a, modalOpened: false })),
    [],
  )

  const value = useMemo(
    () => ({
      articleModal,
      openArticleModal,
      closeArticleModal,
    }),
    [articleModal],
  )
  return (
    <ArticleModalContext.Provider value={value}>
      {children}
    </ArticleModalContext.Provider>
  )
}

export default ArticleModalProvider
