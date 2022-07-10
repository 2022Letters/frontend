import React from 'react';
import {
  SocialBtn,
  SocialDiv,
  SocialImg,
  SocialSpan
} from '../../components/common/style';

function Kakao() {
  // backend와 통일
  const REST_API_KEY = process.env.REACT_APP_KAKAO_CLIENT_API;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const getKakao = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = getKakao;
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
