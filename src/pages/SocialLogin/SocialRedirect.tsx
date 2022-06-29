import axios from 'axios';
import React, { useEffect } from 'react';

function SocialRedirect() {
  const url = new URL(window.location.href);

  const params = url.searchParams;
  const code = params.get('code');
  useEffect(() => {
    console.log(code);
    // http://localhost:8080/kakaoLogin
    axios.get(`http://localhost:8080/kakaoLogin?code=${code}`);
  });

  return <div>로딩중</div>;
}

export default SocialRedirect;
