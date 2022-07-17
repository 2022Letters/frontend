import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';

function SocialRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    handlerLogin();
  }, []);

  const handlerLogin = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const email = new URL(window.location.href).searchParams.get('email');
    let data: any;
    try {
      if (code) {
        // 카카오 로그인
        await axios
          .get(`${process.env.REACT_APP_API_URL}kakaoLogin?code=${code}`)
          .then((res) => {
            data = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (email) {
        // 구글 로그인
        data = await axios.get(`/login/sucess?email=${email}`);
      }
      if (data.existingUser === 'true') {
        console.log(data);
        // 가입된 회원
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('social', data.socialLoginType);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/main'); // 메인 화면으로
      } else {
        navigate('/login/nickname', {
          state: {
            email: data.email,
            socialLoginType: data.socialLoginType,
            kakaoRefreshToken: data.kakaoRefreshToken
          }
        });
      }
      return data;
    } catch (err) {
      return err;
    }
  };

  return <LoadingPage />;
}

export default SocialRedirect;
