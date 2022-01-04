import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
  }
  main {
    height: 100%;
    width: 100%;
  }
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'KoPubWorld', NotoSansKR, NotoSansJP, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "맑은 고딕", "Yu Gothic", "Segoe UI", Roboto, system-ui, sans-serif !important;
  }
  a {
    text-decoration: none;
  }
  @font-face { 
    font-family: local('KoPubWorld'); 
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }
`

export default GlobalStyle
