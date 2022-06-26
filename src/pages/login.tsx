import React from 'react';
import styled from 'styled-components';
import Google from './SocialLogin/Google';
import Kakao from './SocialLogin/Kakao';

const LoginWrap = styled.div`
  height: 100%;
`;
const ButtonWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Login() {
  return (
    <LoginWrap>
      <h2>로그인</h2>
      <ButtonWrap>
        <Kakao />
        <Google />
      </ButtonWrap>
    </LoginWrap>
  );
}
export default Login;
