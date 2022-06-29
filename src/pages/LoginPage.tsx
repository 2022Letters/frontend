import React from 'react';
import styled from 'styled-components';
import { Title } from '../components/common/style';
import GoogleLogin from './SocialLogin/GoogleLogin';
import KakaoLogin from './SocialLogin/KakaoLogin';

const LoginWrap = styled.div`
  height: 100%;
  padding: 45px 20px 0;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50% 0;
`;

function LoginPage() {
  return (
    <LoginWrap>
      <Title>로그인</Title>
      <ButtonWrap>
        <KakaoLogin />
        <GoogleLogin />
      </ButtonWrap>
    </LoginWrap>
  );
}
export default LoginPage;
