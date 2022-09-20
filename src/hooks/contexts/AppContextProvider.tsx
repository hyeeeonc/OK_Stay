import { combineComponents } from 'components/combineComponents'
import ArticleModalProvider from './ArticleModalProvider'
import CarouselProvider from './CarouselProvider'
import ContactModalProvider from './ContacModalProvider'
import LanguageProvider from './LanguageProvider'
import QnAModalProvider from './QnAModalProvider'

const providers = [
  ArticleModalProvider,
  CarouselProvider(7),
  ContactModalProvider,
  LanguageProvider,
  QnAModalProvider,
]

const AppContextProvider = combineComponents(...providers)

export default AppContextProvider
