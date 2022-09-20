import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from 'react'
import styled from '@emotion/styled'
import palette from '../../../../lib/styles/palette'
import {
  Container,
  ModalContactWrapper,
  ModalTitle,
  ModalExitIcon,
} from '../../common/Modal'

import { graphql, useStaticQuery } from 'gatsby'
import {
  QnAListType,
  CarouselDataType,
} from 'types/index/carousel/CarouselData'
import { QnAModalContext } from 'hooks/contexts/QnAModalProvider'
import {LanguageContext} from 'hooks/contexts/LanguageProvider'

const ContentArea = styled.div`
  position: absolute;
  width: 870px;
  height: 520px;
  left: calc(50vw - 435px);
  background-color: ${palette.gray[9]};
  transition: opacity 0.3s, z-index 0.3s cubic-bezier(0, 1, 1, 0);
  display: flex;
  justify-content: center;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 900px) {
    width: 760px;
    left: calc(50vw - 380px);
  }

  @media (max-width: 767px) {
    position: fixed;
    top: calc(48px + 50px);
    left: calc(50vw - 250px);
    max-width: 460px;
    height: calc(calc(100vh - calc(100vh - 100%)) - 48px - 100px - 40px);
    padding: 0 20px;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 500px) {
    width: calc(100vw - 32px - 40px);
    top: calc(48px + 50px);

    left: 16px;
  }
`

const QnAModalBodyContent = styled.div`
  max-width: 790px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[0]};

  padding-bottom: 50px;

  @media (max-width: 900px) {
    max-width: 704px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const QnAModalBodyAccordionWrapper = styled.div`
  margin-top: 8px;
`

const QnAModalBodyAccordionItemContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${palette.gray[7]};

  :first-of-type {
    margin-top: -30px;
  }

  @media (max-width: 1199px) {
    :first-of-type {
      margin-top: -22px;
    }
  }

  @media (max-height: 900px) {
    :first-of-type {
      margin-top: -22px;
    }
  }
`

const QnAModalBodyAccordionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[0]};

  flex: none;

  padding: 30px 0 40px 0;

  @media (max-width: 1199px) {
    font-size: 22px;
  }

  @media (max-height: 900px) {
    font-size: 22px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    padding: 20px 0 20px 0;
  }
`

const QnAModalBodyAccordionTitleLogo = styled.div`
  width: 40px;
  height: 40px;
  transition: all 0.3s;
  @media (max-width: 1199px) {
    width: 30px;
    height: 30px;
  }

  @media (max-height: 900px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 767px) {
    width: 23px;
    height: 23px;

    svg {
      width: 23px;
      height: 23px;
    }
  }
`

const QnAModalBodyAccordionContentContainer = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
`

const QnAModalBodyAccordionContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${palette.gray[0]};
  padding-bottom: 30px;

  @media (max-width: 1199px) {
    font-size: 20px;
  }

  @media (max-height: 900px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding-bottom: 13px;
  }
`

interface CarouselAccordionItemsProps {
  seq: number
  title?: string
  content?: string
  selected: boolean
  setSelectedQnA: React.Dispatch<React.SetStateAction<number>>
}

const QnAModalBodyAccordionItems: FunctionComponent<CarouselAccordionItemsProps> =
  function ({ seq, title, content, selected, setSelectedQnA }) {
    const contentContainer = useRef<HTMLDivElement>(null)
    const contentChild = useRef<HTMLDivElement>(null)
    const contentLogo = useRef<HTMLDivElement>(null)

    const onclickHandler = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selected) {
          setSelectedQnA(_ => -1)
        } else {
          setSelectedQnA(_ => seq)
        }
      },
      [selected],
    )

    useEffect(() => {
      if (contentContainer.current === null || contentChild.current === null) {
        return
      }
      if (!selected) {
        contentContainer.current.style.height = '0'
        contentLogo.current.style.transform = 'rotate(0)'
      } else {
        contentContainer.current.style.height = `${contentChild.current.clientHeight}px`
        contentLogo.current.style.transform = 'rotate(90deg)'
      }
    }, [selected])

    return (
      <QnAModalBodyAccordionItemContainer>
        <QnAModalBodyAccordionTitleContainer onClick={onclickHandler}>
          {title}
          <QnAModalBodyAccordionTitleLogo ref={contentLogo}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2929 18.7071C23.6834 18.3166 23.6834 17.6834 23.2929 17.2929L13.7071 7.70711C13.0771 7.07714 12 7.52331 12 8.41421L12 27.5858C12 28.4767 13.0771 28.9229 13.7071 28.2929L23.2929 18.7071Z"
                fill="#B4B4B4"
              />
            </svg>
          </QnAModalBodyAccordionTitleLogo>
        </QnAModalBodyAccordionTitleContainer>

        <QnAModalBodyAccordionContentContainer ref={contentContainer}>
          <QnAModalBodyAccordionContent ref={contentChild}>
            {content}
          </QnAModalBodyAccordionContent>
        </QnAModalBodyAccordionContentContainer>
      </QnAModalBodyAccordionItemContainer>
    )
  }

const QnAModal = () => {
  const [selectedQnA, setSelectedQnA] = useState<number>(-1)
  const { qnaModalOpened, toggleQnAModal } = useContext(QnAModalContext)
  const { language } = useContext(LanguageContext)
  const {
    allQnaJson: { edges },
  }: QnAListType = useStaticQuery(graphql`
    query modalGetQnA {
      allQnaJson(sort: { order: ASC, fields: [seq] }) {
        edges {
          node {
            language
            seq
            title
            content
          }
        }
      }
    }
  `)

  const [qnas, setQnAs] = useState<Array<CarouselDataType>>([])

  useEffect(() => {
    const qnasSetter = edges.filter(({ node }) => node.language == language)
    setQnAs(_ => qnasSetter)
  }, [language])

  return (
    <>
      <Container
        style={{
          zIndex: qnaModalOpened == true ? 100 : -10,
          opacity: qnaModalOpened == true ? 1 : 0,
        }}
        onClick={toggleQnAModal}
      ></Container>
      <ContentArea
        style={{
          zIndex: qnaModalOpened == true ? 101 : -11,
          opacity: qnaModalOpened == true ? 1 : 0,
        }}
      >
        <ModalContactWrapper>
          <ModalTitle>
            QnA
            <ModalExitIcon modalCloseHandler={toggleQnAModal} />
          </ModalTitle>
          <QnAModalBodyContent>
            <QnAModalBodyAccordionWrapper>
              {qnas.map(({ node: { seq, title, content } }) => (
                <QnAModalBodyAccordionItems
                  seq={seq}
                  title={`${seq}. ${title}`}
                  content={content}
                  selected={seq === selectedQnA}
                  setSelectedQnA={setSelectedQnA}
                />
              ))}
            </QnAModalBodyAccordionWrapper>
          </QnAModalBodyContent>
        </ModalContactWrapper>
      </ContentArea>
    </>
  )
}

export default QnAModal
