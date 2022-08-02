import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import palette from '../../../lib/styles/palette'

const DropDownMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 14px;

  position: absolute;
  width: 191px;
  height: 234px;
  left: 454px;
  bottom: 223px;
  background-color: ${palette.gray[2]};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  transition: opacity 0.3s ease-in;
`

const DropDownMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 125px;
  height: 40px;
  flex: none;
  order: 0;
  flex-grow: 0;

  color: ${palette.gray[8]};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;
`

type DropDownMenuProps = {
  dropDownOpened: boolean
}

const DropDownMenu: FunctionComponent<DropDownMenuProps> = function ({
  dropDownOpened,
}) {
  return (
    <DropDownMenuBlock style={{ opacity: dropDownOpened ? 1 : 0 }}>
      <DropDownMenuItem>
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM14.2407 6.46157C15.3616 6.64902 16.4376 6.97346 17.4315 7.42045C17.4465 7.42045 17.4539 7.42766 17.4614 7.43487C19.2324 9.95104 20.1068 12.7844 19.778 16.0504C19.778 16.0648 19.7705 16.0792 19.7555 16.0865C18.4104 17.0381 17.1177 17.6149 15.8324 17.997C15.8099 18.0042 15.7875 17.997 15.7651 17.9898C15.4737 17.5933 15.2046 17.1751 14.9655 16.7353C14.958 16.7137 14.9655 16.6776 14.9954 16.6704C15.4214 16.5118 15.8324 16.3316 16.2209 16.1081C16.2583 16.0937 16.2583 16.0504 16.2284 16.0288C16.1873 15.9963 16.1462 15.9657 16.1051 15.935C16.064 15.9044 16.0229 15.8738 15.9818 15.8413C15.9669 15.8269 15.9444 15.8269 15.9295 15.8341C13.3888 16.966 10.6164 16.966 8.04577 15.8341C8.03082 15.8269 8.0084 15.8269 7.99346 15.8413C7.95236 15.8702 7.91126 15.9008 7.87016 15.9314C7.82906 15.9621 7.78796 15.9927 7.74686 16.0216C7.72444 16.0432 7.72444 16.0865 7.75433 16.1009C8.15039 16.3172 8.55391 16.5046 8.97986 16.6632C9.00975 16.6704 9.0247 16.6993 9.00975 16.7281C8.7781 17.1679 8.50908 17.5861 8.21017 17.9826C8.20269 17.997 8.18028 18.0042 8.15786 17.997C6.88002 17.6149 5.58724 17.0381 4.24215 16.0865C4.2272 16.0792 4.21973 16.0648 4.21973 16.0504C3.94324 13.2242 4.50369 10.3692 6.53628 7.43487L6.53628 7.43487C6.54375 7.42766 6.55122 7.42045 6.55869 7.42045C7.56004 6.97346 8.62864 6.64902 9.74955 6.46157C9.77197 6.46157 9.79439 6.46878 9.80186 6.4832C9.94384 6.72112 10.1008 7.02392 10.2054 7.26905C11.3943 7.09602 12.6034 7.09602 13.7923 7.26905C13.8969 7.03113 14.0538 6.72112 14.1884 6.4832C14.1949 6.47613 14.203 6.47052 14.212 6.46678C14.2211 6.46305 14.2308 6.46127 14.2407 6.46157ZM7.98599 12.7989C7.98599 13.6424 8.62864 14.3273 9.39833 14.3273C10.183 14.3273 10.8107 13.6424 10.8107 12.7989C10.8182 11.9625 10.1904 11.2704 9.39833 11.2704C8.6137 11.2704 7.98599 11.9553 7.98599 12.7989ZM13.1945 12.7989C13.1945 13.6424 13.8371 14.3273 14.6068 14.3273C15.3989 14.3273 16.0192 13.6424 16.0192 12.7989C16.0266 11.9625 15.3989 11.2704 14.6068 11.2704C13.8222 11.2704 13.1945 11.9553 13.1945 12.7989Z"
              fill="white"
            />
          </svg>
        </>
        <h4>Discord</h4>
      </DropDownMenuItem>

      <DropDownMenuItem></DropDownMenuItem>

      <DropDownMenuItem>
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.5102 9.30306C17.508 9.25088 17.5316 9.20074 17.5737 9.16982C17.9607 8.88556 18.3098 8.55504 18.6128 8.18583C18.7082 8.0696 18.5816 7.90877 18.439 7.95622C18.2909 8.00547 18.1408 8.04865 17.9891 8.08564C17.8316 8.12405 17.7366 7.893 17.8516 7.77877C18.0717 7.56027 18.2543 7.30708 18.3914 7.02916C18.4525 6.90543 18.3166 6.78981 18.1929 6.85102C17.7571 7.06672 17.2948 7.22676 16.8169 7.32661C16.767 7.33705 16.7153 7.32012 16.679 7.28422C15.5978 6.21533 13.8414 6.1813 12.7175 7.22151C12.0289 7.85866 11.7105 8.78753 11.8569 9.69812C11.8728 9.79665 11.7962 9.88876 11.6967 9.88143C9.55975 9.72411 7.57443 8.73546 6.17947 7.13491C6.11111 7.05648 5.98527 7.06678 5.93937 7.16015C5.40417 8.24895 5.6462 9.54491 6.50754 10.3762C6.61631 10.4812 6.54363 10.6741 6.3959 10.642C6.14053 10.5864 5.89351 10.4961 5.66218 10.3729C5.6481 10.3654 5.63099 10.3756 5.63099 10.3915C5.63099 11.5078 6.30132 12.4941 7.2991 12.939C7.444 13.0036 7.43497 13.223 7.27644 13.2293C7.14382 13.2345 7.01082 13.2305 6.87842 13.2174C6.76484 13.206 6.67179 13.3137 6.71698 13.4186C7.09659 14.299 7.90653 14.925 8.85707 15.0841C8.99675 15.1075 9.05273 15.2931 8.93454 15.3712C7.99611 15.9907 6.889 16.3238 5.75306 16.3228L5.73762 16.3228C5.57785 16.322 5.50913 16.5388 5.65074 16.6128C6.81183 17.2193 8.10925 17.538 9.43019 17.5362C9.43081 17.5362 9.4313 17.5367 9.4313 17.5374C9.4313 17.538 9.43182 17.5385 9.43243 17.5385C14.6569 17.5379 17.514 13.2761 17.514 9.58075C17.514 9.4877 17.514 9.39531 17.5102 9.30306Z"
              fill="white"
            />
          </svg>
        </>
        <h4>Twitter</h4>
      </DropDownMenuItem>

      <DropDownMenuItem>
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9025 23.85C19.6258 22.9383 24 17.98 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.98 4.37415 22.9383 10.0975 23.85C10.1331 23.938 10.2193 24 10.32 24H12H13.68C13.7807 24 13.8669 23.938 13.9025 23.85ZM10.0798 23.7593V15.5993C10.0798 15.4667 9.97237 15.3593 9.83982 15.3593H7.43982C7.30727 15.3593 7.19982 15.2518 7.19982 15.1193V12.2393C7.19982 12.1067 7.30727 11.9993 7.43982 11.9993H9.83982C9.97237 11.9993 10.0798 11.8918 10.0798 11.7593V8.63928C10.0798 7.19928 11.6158 4.79928 13.9198 4.79928H17.0399C17.1724 4.79928 17.2798 4.90673 17.2798 5.03928V7.91928C17.2798 8.05183 17.1724 8.15928 17.0398 8.15928H15.5998C15.1198 8.15928 13.9198 8.63928 13.9198 9.59928V11.7594C13.9198 11.892 14.0273 11.9993 14.1598 11.9993H16.5598C16.6924 11.9993 16.7998 12.1067 16.7998 12.2393V15.1193C16.7998 15.2518 16.6924 15.3593 16.5598 15.3593H14.1598C14.0273 15.3593 13.9198 15.4667 13.9198 15.5993V23.7593C13.9198 23.8918 13.8124 23.9993 13.6798 23.9993H10.3198C10.1873 23.9993 10.0798 23.8918 10.0798 23.7593Z"
              fill="white"
            />
          </svg>
        </>
        <h4>Facebook</h4>
      </DropDownMenuItem>
    </DropDownMenuBlock>
  )
}

const DropDownButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  left: 454px;
  bottom: 150px;

  width: 64px;
  height: 64px;

  flex: none;
  order: 0;
  flex-grow: 0;
`
type DropDownButtonProps = {
  dropDownButtonHandler: React.MouseEventHandler
}

const DropDownButton: FunctionComponent<DropDownButtonProps> = function ({
  dropDownButtonHandler,
}) {
  return (
    <DropDownButtonBlock onClick={dropDownButtonHandler}>
      <svg
        width="104"
        height="104"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_327_159)">
          <rect
            x="20"
            y="82"
            width="64"
            height="64"
            rx="32"
            transform="rotate(-90 20 82)"
            fill="#2E2D2D"
            shape-rendering="crispEdges"
          />
          <mask
            id="mask0_327_159"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="34"
            y="32"
            width="36"
            height="36"
          >
            <rect x="34" y="32" width="36" height="36" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_327_159)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.6392 44.362C58.4527 45.1755 58.4527 46.4944 57.6392 47.3078L49.307 55.6397C48.4935 56.4532 47.1746 56.4532 46.3611 55.6397C45.5476 54.8263 45.5476 53.5074 46.3611 52.694L54.6933 44.362C55.5068 43.5486 56.8257 43.5486 57.6392 44.362Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.5627 41.4364C58.8662 39.7399 56.1155 39.7399 54.4189 41.4364L51.389 44.4662C50.5755 45.2796 49.2566 45.2796 48.4431 44.4662C47.6296 43.6527 47.6296 42.3338 48.4431 41.5204L51.473 38.4906C54.7966 35.1672 60.1851 35.1672 63.5086 38.4906C66.8322 41.814 66.8322 47.2023 63.5086 50.5258L60.4787 53.5555C59.6652 54.369 58.3463 54.369 57.5328 53.5555C56.7194 52.7421 56.7194 51.4232 57.5328 50.6098L60.5627 47.58C62.2593 45.8835 62.2593 43.1329 60.5627 41.4364Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.4373 58.5626C45.1338 60.2591 47.8845 60.2591 49.5811 58.5626L52.611 55.5328C53.4245 54.7194 54.7434 54.7194 55.5569 55.5328C56.3704 56.3463 56.3704 57.6652 55.5569 58.4786L52.527 61.5084C49.2034 64.8318 43.8149 64.8318 40.4914 61.5084C37.1678 58.185 37.1678 52.7967 40.4914 49.4733L43.5213 46.4435C44.3348 45.63 45.6537 45.63 46.4672 46.4435C47.2806 47.2569 47.2806 48.5758 46.4672 49.3893L43.4373 52.419C41.7407 54.1155 41.7407 56.8661 43.4373 58.5626Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_327_159"
            x="0"
            y="0"
            width="104"
            height="104"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_327_159"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_327_159"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </DropDownButtonBlock>
  )
}

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 14px;
`

type DropDownProps = {
  dropDownButtonHandler: React.MouseEventHandler
  dropDownOpened: boolean
}

const DropDown: FunctionComponent<DropDownProps> = function ({
  dropDownButtonHandler,
  dropDownOpened,
}) {
  return (
    <DropDownWrapper>
      <DropDownMenu dropDownOpened={dropDownOpened} />
      <DropDownButton dropDownButtonHandler={dropDownButtonHandler} />
    </DropDownWrapper>
  )
}

export default DropDown
