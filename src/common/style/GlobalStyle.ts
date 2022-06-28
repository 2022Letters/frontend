import { createGlobalStyle } from 'styled-components';
import Neurit from '../../assets/fonts/Neurit.woff';

const GlobalStyles = createGlobalStyle`
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
}

body{
  max-width:780px;
  min-height:100%;
  margin:0 auto;
}

button{
  text-decoration:none;
  cursor:pointer;
  outline:none;
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
