import { css } from '@emotion/react'

const minting = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css');
  @import url('https://use.typekit.net/yum2ckw.css');

  h1 {
    font-weight: 700;
    font-size: 80px;
    line-height: 150%;
    @media (max-width: 499px) {
      font-size: 40px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 52px;
    line-height: 150%;
    @media (max-width: 499px) {
      font-size: 32px;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 150%;
    @media (max-width: 499px) {
      font-size: 20px;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    @media (max-width: 499px) {
      font-size: 16px;
    }
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    @media (max-width: 499px) {
      font-size: 14px;
    }
  }

  html {
    height: -webkit-fill-available;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default minting
