import React from 'react';

import {
  SocialDiv,
  SocialBtn,
  SocialImg,
  SocialSpan
} from '../../components/common/style';

// 917335306727-2d6rp3jl36nv9due5r321p08pku177r3.apps.googleusercontent.com

function Google() {
  const googleLogin = (response: any) => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };
  return (
    <SocialDiv>
      <SocialBtn type="button" color="#fff" onClick={googleLogin}>
        <SocialImg src="/img/Google.png" alt="Google" />
        <SocialSpan>구글로 로그인하기</SocialSpan>
      </SocialBtn>
    </SocialDiv>
  );
}

export default Google;
