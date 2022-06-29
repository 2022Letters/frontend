import React from 'react';
import {
  SocialBtn,
  SocialDiv,
  SocialImg,
  SocialSpan
} from '../../components/common/style';

function Kakao() {
  const REST_API_KEY = 'cdbaf8838f9e64259177edf602022031';
  const REDIRECT_URI = 'http://localhost:3000/login/redirect';
  const getKakao = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = 'http://localhost:8080/kakaoLogin';
  };
  return (
    <SocialDiv>
      <SocialBtn type="button" color="#fee500" onClick={kakaoLogin}>
        <SocialImg src="/img/kakao.png" alt="kakao" />
        <SocialSpan>카카오로 로그인하기</SocialSpan>
      </SocialBtn>
    </SocialDiv>
  );
}

export default Kakao;
