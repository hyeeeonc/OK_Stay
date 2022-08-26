import { Language } from 'types/common/language'
import { ArticleType } from '../carousel/Article'

export type ModalProps = {
  modalOpened: boolean
  modalCloseHandler?: React.MouseEventHandler
}

export type QnAModalProps = {
  qnaModalOpened: boolean
  qnaModalCloseHandler?: React.MouseEventHandler
  language: Language
}


export type ArticleModalProps = ModalProps & {
  article: ArticleType
}
