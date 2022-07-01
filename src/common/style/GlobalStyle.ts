import { createGlobalStyle } from 'styled-components';
import Neurit from '../../assets/fonts/Neurit.woff';

const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family:'Neurit';
}

*{
  margin: 0 0;
  padding:0 0;
  box-sizing: border-box;
  font-family:'Neurit';
}

html,body, #root{
  width:100%;
  height:100%;
  font-size:16px;
}

#root{
  position:relative;
  overflow-x: hidden;
  background-color:#FFF7E3;
}

body{
  max-width:550px;
  min-width:320px;
  min-height:100%;
  margin:0 auto;
}

button{
  text-decoration:none;
  cursor:pointer;
  outline:none;
  color: #000;
}

a{
  text-decoration:none;
  cursor:pointer;
  color:#000;
  &:hover,
  &:active,
  &:visited{
    text-decoration:none;
  }
}

li{
  list-style:none;
  cursor:pointer;
}

textarea{
  resize:none;
}

@font-face {
    font-family: 'Neurit';	//폰트를 사용할 때 부르는 이름 지정
    src:url(${Neurit}) format('truetype');
    font-weight: 50;
  }
`;

export default GlobalStyles;
