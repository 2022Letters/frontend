import axios from 'axios';
import React from 'react';

import {
  SocialDiv,
  SocialBtn,
  SocialImg,
  SocialSpan
} from '../../components/common/style';

function Google() {
  const googleLogin = () => {
    // window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    axios
      .get('http://localhost:8080/oauth2/authorization/google')
      .then((res) => {
        console.log(res);
      });
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
