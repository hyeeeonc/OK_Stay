import { Language } from '../common/language'

export type MintingGuideListType = {
  allMintingJson: {
    edges: Array<MintingGuideType>
  }
}

export type MintingGuideType = {
  node: {
    language: Language
    seq: number
    title: string
    content: string
    img: {
      publicURL: string
    }
  }
}
