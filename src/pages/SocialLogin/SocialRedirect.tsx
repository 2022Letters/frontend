import axios from 'axios';
import React, { useEffect } from 'react';

function SocialRedirect() {
  useEffect(() => {
    if (code) {
      callKakaoLogin();
    } else {
      callGoogleLogin();
    }
  }, []);

  const url = new URL(window.location.href);

  const params = url.searchParams;
  const code = params.get('code');
  const callKakaoLogin = () => {
    console.log(code);
    // http://localhost:8080/kakaoLogin
    axios.get(`http://localhost:8080/kakaoLogin?code=${code}`).then((res) => {
      console.log(res);
    });
  };
  const callGoogleLogin = () => {
    console.log('구글로그인');
  };

  return <div>로딩중</div>;
}

export default SocialRedirect;
