import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0 0;
  padding:0 0;
  box-sizing: border-box;
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

`;

export default GlobalStyles;
