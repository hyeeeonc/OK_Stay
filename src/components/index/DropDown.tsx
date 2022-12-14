import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import palette from '../../../lib/styles/palette'
import { useMediaQuery } from 'react-responsive'
import { DropDownMode } from 'types/common/DropDown'

const DropDownMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0 16px 20px;

  position: fixed;
  width: 145px;
  height: 200px;
  left: calc(50vw - 520px);
  bottom: calc((calc(100vh - calc(100vh - 100%))) / 2 - 305px + 208px - 250px);
  background-color: ${palette.gray[2]};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  transition: opacity 0.3s ease-in, z-index 0.3s cubic-bezier(0, 1, 1, 0);

  @media (max-width: 1199px) {
    left: calc(50vw - 365px - 5px);
    bottom: calc((calc(100vh - calc(100vh - 100%))) / 2 - 210px - 45px);
  }

  @media (max-height: 900px) {
    left: calc(50vw - 365px - 5px);
    bottom: calc((calc(100vh - calc(100vh - 100%))) / 2 - 210px - 45px);
  }

  @media (max-width: 767px) {
    left: calc(50vw - 231px);
    bottom: 90px;
  }

  @media (max-width: 500px) {
    left: 16px;
  }
`

const DropDownMenuMintingBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0 16px 20px;

  position: fixed;
  width: 145px;
  height: 200px;
  left: calc(50vw - 845px / 2);
  bottom: 120px;
  background-color: ${palette.gray[2]};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  transition: opacity 0.3s ease-in, z-index 0.3s cubic-bezier(0, 1, 1, 0);

  @media (max-width: 880px) {
    left: 20px;
    bottom: 95px;
  }
`

const DropDownMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 120px;
  height: 40px;
  flex: none;

  color: ${palette.gray[8]};
  cursor: pointer;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
`

const DropDownMenuLogo = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`

type DropDownMenuProps = {
  dropDownOpened: boolean
  dropDownMode: DropDownMode
}

const DropDownMenu: FunctionComponent<DropDownMenuProps> = function ({
  dropDownOpened,
  dropDownMode,
}) {
  const DropDownBlock =
    dropDownMode === 'MAIN' ? DropDownMenuBlock : DropDownMenuMintingBlock

  return (
    <DropDownBlock
      style={{
        opacity: dropDownOpened ? 1 : 0,
        zIndex: dropDownOpened ? 40 : -40,
      }}
    >
      <DropDownMenuItem>
        <DropDownMenuLogo>
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
        </DropDownMenuLogo>
        <h4>Discord</h4>
      </DropDownMenuItem>

      <DropDownMenuItem>
        <DropDownMenuLogo>
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
        </DropDownMenuLogo>
        <h4>Twitter</h4>
      </DropDownMenuItem>

      <DropDownMenuItem>
        <DropDownMenuLogo>
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
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 4.61538C9.99407 4.61538 9.74299 4.62344 8.95552 4.65969H8.95485C8.1694 4.69594 7.63234 4.82081 7.16241 5.00274C6.66997 5.18833 6.22392 5.47905 5.85533 5.85466C5.47946 6.22343 5.18851 6.6697 5.00274 7.16241C4.82081 7.63234 4.69527 8.1694 4.65969 8.9562C4.62411 9.74299 4.61538 9.99407 4.61538 12C4.61538 14.0053 4.62344 14.2563 4.65969 15.0451C4.69594 15.8306 4.82081 16.3677 5.00274 16.8376C5.18824 17.3303 5.47897 17.7766 5.85466 18.1453C6.22377 18.5208 6.67027 18.8113 7.16308 18.9966C7.63301 19.1792 8.17007 19.3047 8.95552 19.3403C9.74299 19.3759 9.99407 19.3846 12 19.3846C14.0059 19.3846 14.257 19.3766 15.0451 19.3403C15.8306 19.3041 16.3677 19.1792 16.8376 18.9966C17.3297 18.8113 17.7761 18.5213 18.1453 18.1453C18.5208 17.7762 18.8113 17.3297 18.9966 16.8369C19.1792 16.367 19.3047 15.8299 19.3403 15.0445C19.3759 14.257 19.3846 14.0059 19.3846 12C19.3846 9.99474 19.3766 9.74366 19.3403 8.95485C19.3041 8.1694 19.1792 7.63234 18.9966 7.16241C18.8113 6.66965 18.5213 6.22389 18.1453 5.85533C17.7761 5.47938 17.3297 5.1887 16.8376 5.00274C16.3677 4.82081 15.8306 4.69527 15.0438 4.65969C14.257 4.62411 14.0059 4.61538 12 4.61538ZM12 5.94596C13.9717 5.94596 14.2053 5.95334 14.9841 5.98892C15.7044 6.02182 16.0951 6.14199 16.3556 6.24336C16.6763 6.36165 16.9664 6.5502 17.2048 6.79519C17.4633 7.05365 17.6224 7.30003 17.7566 7.64442C17.858 7.90489 17.9782 8.29561 18.0111 9.01594C18.0467 9.79469 18.054 10.0283 18.054 12C18.054 13.9717 18.0467 14.2053 18.0111 14.9841C17.9782 15.7044 17.858 16.0951 17.7566 16.3556C17.6385 16.6758 17.4498 16.9665 17.2048 17.2048C16.9463 17.4633 16.7 17.6224 16.3556 17.7566C16.0951 17.858 15.7044 17.9782 14.9841 18.0111C14.2053 18.0467 13.9724 18.054 12 18.054C10.0276 18.054 9.79469 18.0467 9.01594 18.0111C8.29561 17.9782 7.90489 17.858 7.64442 17.7566C7.3242 17.6385 7.03351 17.4498 6.79519 17.2048C6.55015 16.9665 6.36151 16.6758 6.24336 16.3556C6.14199 16.0951 6.02182 15.7044 5.98892 14.9841C5.95334 14.2053 5.94596 13.9717 5.94596 12C5.94596 10.0283 5.95334 9.79469 5.98892 9.01594C6.02182 8.29561 6.14199 7.90489 6.24336 7.64442C6.36163 7.32371 6.55018 7.03355 6.79519 6.79519C7.05365 6.53673 7.30003 6.37762 7.64442 6.24336C7.90489 6.14199 8.29561 6.02182 9.01594 5.98892C9.79469 5.95334 10.0283 5.94596 12 5.94596ZM12.7163 14.3602C12.1701 14.5253 11.5835 14.4958 11.0568 14.2765C10.7203 14.137 10.419 13.9246 10.1745 13.6546C9.92994 13.3847 9.74831 13.0639 9.64266 12.7153C9.537 12.3667 9.50994 11.9991 9.56342 11.6388C9.61691 11.2785 9.74961 10.9346 9.95198 10.6317C10.1543 10.3289 10.4213 10.0747 10.7337 9.88742C11.0461 9.70015 11.3962 9.58447 11.7587 9.54872C12.1211 9.51297 12.487 9.55803 12.83 9.68066C13.173 9.80329 13.4845 10.0004 13.7421 10.2579C14.1462 10.6607 14.398 11.1913 14.4544 11.7591C14.5108 12.3268 14.3683 12.8966 14.0513 13.371C13.7343 13.8454 13.2624 14.1951 12.7163 14.3602ZM10.5474 8.49322C10.0869 8.68397 9.66849 8.96356 9.31603 9.31603C8.60419 10.0279 8.20429 10.9933 8.20429 12C8.20429 13.0067 8.60419 13.9721 9.31603 14.684C10.0279 15.3958 10.9933 15.7957 12 15.7957C13.0067 15.7957 13.9721 15.3958 14.684 14.684C15.0364 14.3315 15.316 13.9131 15.5068 13.4526C15.6975 12.992 15.7957 12.4985 15.7957 12C15.7957 11.5015 15.6975 11.008 15.5068 10.5474C15.316 10.0869 15.0364 9.66849 14.684 9.31603C14.3315 8.96356 13.9131 8.68397 13.4526 8.49322C12.992 8.30247 12.4985 8.20429 12 8.20429C11.5015 8.20429 11.008 8.30247 10.5474 8.49322ZM16.8432 8.47819C16.7948 8.58809 16.7249 8.68717 16.6375 8.76957C16.4677 8.92981 16.242 9.01753 16.0085 9.01413C15.7751 9.01073 15.5521 8.91646 15.387 8.75134C15.2218 8.58621 15.1276 8.36324 15.1242 8.12974C15.1208 7.89625 15.2085 7.67062 15.3687 7.50076C15.4511 7.41341 15.5502 7.34349 15.6601 7.29513C15.77 7.24676 15.8885 7.22094 16.0085 7.21919C16.1286 7.21744 16.2478 7.23979 16.3591 7.28493C16.4703 7.33007 16.5714 7.39708 16.6563 7.48198C16.7412 7.56689 16.8082 7.66796 16.8534 7.77923C16.8985 7.89049 16.9209 8.00968 16.9191 8.12974C16.9174 8.2498 16.8915 8.36829 16.8432 8.47819Z"
              fill="white"
            />
          </svg>
        </DropDownMenuLogo>
        <h4>Instagram</h4>
      </DropDownMenuItem>

      <DropDownMenuItem>
        <DropDownMenuLogo>
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
        </DropDownMenuLogo>
        <h4>Facebook</h4>
      </DropDownMenuItem>
    </DropDownBlock>
  )
}

export const DropDownButtonBlock = styled.div`
  position: fixed;

  width: 104px;
  height: 104px;

  bottom: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 305px - 133px);
  left: calc(50vw - 508px - 20px);

  cursor: pointer;

  @media (max-width: 1199px) {
    bottom: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 220px - 123px);
    left: calc(50vw - 365px - 20px);
  }

  @media (max-height: 900px) {
    bottom: calc((calc(100vh - calc(100vh - 100%)) - 56px) / 2 - 220px - 123px);
    left: calc(50vw - 365px - 20px);
  }

  @media (max-width: 767px) {
    width: 48px;
    height: 48px;

    bottom: 40px;
    left: calc(50vw - 250px);
  }

  @media (max-width: 500px) {
    left: 1px;
  }
`

const DropDownButtonMintingBlock = styled.div`
  position: fixed;
  z-index: 1;

  width: 104px;
  height: 104px;

  bottom: 16px;
  left: calc(50vw - 845px / 2 - 20px);

  cursor: pointer;

  @media (max-width: 880px) {
    left: 0px;
  }
  @media (max-width: 767px) {
    width: 48px;
    height: 48px;

    bottom: 44px;
    left: -2px;
  }
`

type DropDownButtonProps = {
  dropDownButtonHandler: React.MouseEventHandler
  dropDownMode: DropDownMode
}

const DropDownButton: FunctionComponent<DropDownButtonProps> = function ({
  dropDownButtonHandler,
  dropDownMode,
}) {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  const DropDownBlock =
    dropDownMode === 'MAIN' ? DropDownButtonBlock : DropDownButtonMintingBlock

  return (
    <DropDownBlock onClick={dropDownButtonHandler}>
      {isPc && (
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
      )}

      {isMobile && (
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_327_110)">
            <rect
              x="20"
              y="66"
              width="48"
              height="48"
              rx="24"
              transform="rotate(-90 20 66)"
              fill="#2E2D2D"
              shape-rendering="crispEdges"
            />
            <mask
              id="mask0_327_110"
              style={{ maskType: `alpha` }}
              maskUnits="userSpaceOnUse"
              x="32"
              y="30"
              width="24"
              height="24"
            >
              <rect x="32" y="30" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_327_110)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.7071 38.2929C48.0976 38.6834 48.0976 39.3166 47.7071 39.7071L41.7071 45.7071C41.3166 46.0976 40.6834 46.0976 40.2929 45.7071C39.9024 45.3166 39.9024 44.6834 40.2929 44.2929L46.2929 38.2929C46.6834 37.9024 47.3166 37.9024 47.7071 38.2929Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50.2929 35.7076C49.0266 34.4412 46.9734 34.4412 45.7071 35.7076L43.7071 37.7076C43.3166 38.0981 42.6834 38.0981 42.2929 37.7076C41.9024 37.317 41.9024 36.6839 42.2929 36.2933L44.2929 34.2933C46.3403 32.246 49.6597 32.246 51.7071 34.2933C53.7545 36.3407 53.7545 39.6602 51.7071 41.7076L49.7071 43.7076C49.3166 44.0981 48.6834 44.0981 48.2929 43.7076C47.9024 43.317 47.9024 42.6839 48.2929 42.2933L50.2929 40.2933C51.5592 39.027 51.5592 36.9739 50.2929 35.7076Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.7071 48.2934C38.9734 49.5597 41.0266 49.5597 42.2929 48.2934L44.2929 46.2934C44.6834 45.9029 45.3166 45.9029 45.7071 46.2934C46.0976 46.6839 46.0976 47.3171 45.7071 47.7076L43.7071 49.7076C41.6597 51.755 38.3403 51.755 36.2929 49.7076C34.2455 47.6603 34.2455 44.3408 36.2929 42.2934L38.2929 40.2934C38.6834 39.9029 39.3166 39.9029 39.7071 40.2934C40.0976 40.6839 40.0976 41.3171 39.7071 41.7076L37.7071 43.7076C36.4408 44.974 36.4408 47.0271 37.7071 48.2934Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_327_110"
              x="0"
              y="0"
              width="88"
              height="88"
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
                result="effect1_dropShadow_327_110"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_327_110"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </DropDownBlock>
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
  dropDownMode: DropDownMode
}

const DropDown: FunctionComponent<DropDownProps> = function ({ dropDownMode }) {
  const [dropDownOpened, setDropDownOpened] = useState(false)
  const dropDownButtonHandler = () => {
    setDropDownOpened(o => !o)
  }
  return (
    <DropDownWrapper>
      <DropDownMenu
        dropDownOpened={dropDownOpened}
        dropDownMode={dropDownMode}
      />
      <DropDownButton
        dropDownButtonHandler={dropDownButtonHandler}
        dropDownMode={dropDownMode}
      />
    </DropDownWrapper>
  )
}

export default DropDown
