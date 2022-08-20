import { ArticleType } from '../carousel/Article'

export type ModalProps = {
  modalOpened: boolean
  modalCloseHandler?: React.MouseEventHandler
}

export type ArticleModalProps = ModalProps & {
  article: ArticleType
}
