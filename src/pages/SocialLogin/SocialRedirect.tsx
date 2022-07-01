import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLoginApi, kakaoLoginApi } from '../../api/Apis';
import LoadingPage from '../../components/LoadingPage';

function SocialRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    handlerLogin();
    // navigate('/login/nickname');
    // if (code) {
    //   console.log(code);
    //   callKakaoLogin();
    // } else if (email) {
    //   console.log(email);
    //   callGoogleLogin();
    // }
  }, []);

  // 카카오 로그인
  // const callKakaoLogin = () => {
  //   console.log(code);
  //   if (code) {
  //     const { data }: any = kakaoLoginApi(code);
  //     if (data.message === 'success') {
  //       if (data.existingUser === 'true') {
  //         // 이미 가입한 회원이면 유저 정보 localstorage에 저장
  //         localStorage.setItem('token', data.accessToken);
  //         localStorage.setItem('user', JSON.stringify(data.user));
  //         navigate('/main'); // 메인 화면으로
  //       } else {
  //         // 가입하지 않았다면 닉네임 화면으로

  //         navigate('/login/nickname');
  //       }
  //     } else {
  //       alert('로그인 과정 중에 문제가 발생했습니다.');
  //     }
  //   }
  // };

  // // 구글 로그인
  // const callGoogleLogin = () => {
  //   axios
  //     .get(`/login/sucess?email=${email}`)
  //     .then((res: any) => {
  //       const { data } = res;
  //       if (data.existingUser === 'true') {
  //         // 이미 가입한 회원이면 유저 정보 localstorage에 저장
  //         localStorage.setItem('token', data.accessToken);
  //         localStorage.setItem('social', data.socialLoginType);
  //         localStorage.setItem('user', JSON.stringify(data.user));
  //         navigate('/main'); // 메인 화면으로
  //       } else {
  //         // 가입하지 않았다면 닉네임 화면으로
  //         // 이메일이 필요 없을수도 있음 => 테스트
  //         // const userEmail = data.email;
  //         navigate('/login/nickname', {
  //           state: email
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handlerLogin = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    let email = new URL(window.location.href).searchParams.get('email');
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
        email = data.email;
        navigate('/login/nickname', {
          state: email
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
