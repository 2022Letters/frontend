import React from 'react';
import GoogleLogin from 'react-google-login';

import {
  SocialDiv,
  SocialBtn,
  SocialImg,
  SocialSpan
} from '../../components/common/style';

function Google() {
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <SocialDiv>
      <GoogleLogin
        clientId="917335306727-2d6rp3jl36nv9due5r321p08pku177r3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
      <SocialBtn type="button" color="#fff">
        <SocialImg src="/img/Google.png" alt="Google" />
        <SocialSpan>구글로 로그인하기</SocialSpan>
      </SocialBtn>
    </SocialDiv>
  );
}

export default Google;
