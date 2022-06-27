import { createGlobalStyle } from 'styled-components';
import Neurit from '../../assets/fonts/Neurit.ttf';

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


button{
  text-decoration:none;
  cursor:pointer;
  outline:none;
}

a{
  text-decoration:none;
  cursor:pointer;
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
