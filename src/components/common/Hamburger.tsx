import React, { FunctionComponent, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import palette from '../../../lib/styles/palette'
import { Language } from 'types/common/language'
import { navigate } from 'gatsby'

const HamburgerContainer = styled.div`
  width: 52px;
  height: 48px;
  z-index: 51;

  display: flex;
  justify-content: center;
  align-items: center;
`

const HamburgerClicker = styled.div`
  position: fixed;
  cursor: pointer;

  top: 0;
  right: 0;
  width: 52px;
  height: 48px;
  z-index: 51;
`

const HamburgerCheck = styled.input`
  display: none;

  :checked ~ .menu {
    width: calc(100vw);
  }

  :checked ~ .burger-icon .burger-sticks {
    background: transparent;
  }

  :checked ~ .burger-icon .burger-sticks:before {
    transform: rotate(-45deg);
  }

  :checked ~ .burger-icon .burger-sticks:after {
    transform: rotate(45deg);
  }

  :checked ~ .burger-icon:not(.steps) .burger-sticks:before,
  :checked ~ .burger-icon:not(.steps) .burger-sticks:after {
    top: 0;
  }
`

const HamburgerCheckIcon = styled.label`
  cursor: pointer;
  z-index: 52;
  height: auto;
  user-select: none;
  width: auto;
  margin: 0;
`

const HamburgerCheckIconSticks = styled.span`
  background: white;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.3s ease-out;
  width: 18px;
  border-radius: 2px;

  :before {
    background: white;
    content: '';
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    border-radius: 2px;
    top: 6px;
  }

  :after {
    background: white;
    content: '';
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    border-radius: 2px;
    top: -6px;
  }
`

const HamburgerMenu = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  height: 100%;
  width: 0;
  transition: width 0.5s ease;
  z-index: 60;
  background-color: ${palette.gray[1]};
  opacity: 1;
`

const HamburgerMenuItemsWrapper = styled.div`
  margin: 25px 0 0 20px;
`

const HamburgerMenuItems = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  cursor: pointer;

  color: ${palette.gray[8]};
`

const HamburgerMenuLanguage = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 28px;

  cursor: pointer;

  color: ${palette.gray[8]};
`

const HamburgerMenuLanguageIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`

interface HamburgerProps {
  changeLanguage: React.MouseEventHandler
  language: Language
  modalOpenHandler: React.MouseEventHandler
}

const Hamburger: FunctionComponent<HamburgerProps> = function ({
  language,
  changeLanguage,
  modalOpenHandler,
}) {
  const hamburgerClicker = useRef<HTMLDivElement>(null)
  const hamburgerCheck = useRef<HTMLInputElement>(null)
  const hamburgerMenu = useRef<HTMLDivElement>(null)
  useEffect(() => {
    hamburgerMenu.current.addEventListener('wheel', e => e.preventDefault())
    hamburgerMenu.current.addEventListener('touchmove', e => e.preventDefault())
  })

  useEffect(() => {
    hamburgerClicker.current.addEventListener('click', () => {
      hamburgerCheck.current.click()
    })
  }, [])

  return (
    <HamburgerContainer>
      <HamburgerClicker ref={hamburgerClicker} />
      <HamburgerCheck
        ref={hamburgerCheck}
        id="hamburgerCheck"
        type="checkbox"
      />
      <HamburgerCheckIcon className="burger-icon" htmlFor="hamburgerCheck">
        <HamburgerCheckIconSticks className="burger-sticks" />
      </HamburgerCheckIcon>
      <HamburgerMenu ref={hamburgerMenu} className="menu">
        <HamburgerMenuItemsWrapper>
          <HamburgerMenuLanguage onClick={changeLanguage}>
            {language}
            <HamburgerMenuLanguageIcon>
              {' '}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="8" stroke="white" stroke-width="2" />
                <path
                  d="M9 1C11.336 2.20781 13 5.33393 13 9C13 12.6661 11.336 15.7922 9 17"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M9 1C6.66404 2.20781 5 5.33393 5 9C5 12.6661 6.66404 15.7922 9 17"
                  stroke="white"
                  stroke-width="2"
                />
                <path d="M17 9L1 9" stroke="white" stroke-width="2" />
              </svg>
            </HamburgerMenuLanguageIcon>
          </HamburgerMenuLanguage>

          <HamburgerMenuItems
            onClick={() => navigate(`/minting?lang=${language}`)}
          >
            MINTING
          </HamburgerMenuItems>
          <HamburgerMenuItems onClick={modalOpenHandler}>
            CONTACT
          </HamburgerMenuItems>
        </HamburgerMenuItemsWrapper>
      </HamburgerMenu>
    </HamburgerContainer>
  )
}

export default Hamburger
