import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLoginApi, kakaoLoginApi } from '../../api/Apis';
import { NicknameProps } from '../../components/common/interface';
import LoadingPage from '../../components/LoadingPage';

function SocialRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    handlerLogin();
  }, []);

  const handlerLogin = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const email = new URL(window.location.href).searchParams.get('email');
    try {
      let data;
      if (code) {
        // 카카오 로그인
        data = await axios.get(`/kakaoLogin?code=${code}`);
      } else if (email) {
        // 구글 로그인
        data = await axios.get(`/login/sucess?email=${email}`);
      }
      data = data?.data;
      if (data.existingUser === 'true') {
        // 가입된 회원
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('social', data.socialLoginType);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/main'); // 메인 화면으로
      } else {
        navigate('/login/nickname', {
          state: {
            email: data.email,
            socialLoginType: data.socialLoginType
          }
        });
      }
      return data;
    } catch (error) {
      console.log(error);
      alert('문제가 발생했습니다 ');
      return error;
    }
  };

  return <LoadingPage />;
}

export default SocialRedirect;
