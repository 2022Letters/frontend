import axios from 'axios';
import React, { useEffect } from 'react';

function SocialRedirect() {
  useEffect(() => {
    callKakaoLogin();
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

  return <div>로딩중</div>;
}

export default SocialRedirect;
