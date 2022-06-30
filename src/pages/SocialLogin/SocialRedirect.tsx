import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLoginApi, kakaoLoginApi } from '../../api/Apis';
import LoadingPage from '../../components/LoadingPage';

function SocialRedirect() {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get('code');
  const emailget = new URL(window.location.href).searchParams.get('email');
  useEffect(() => {
    // navigate('/login/nickname');
    console.log(emailget);
    if (code) {
      callKakaoLogin();
    } else if (emailget) {
      callGoogleLogin();
    }
  }, []);

  // 카카오 로그인
  const callKakaoLogin = () => {
    console.log(code);
    if (code) {
      const { data }: any = kakaoLoginApi(code);
      if (data.message === 'success') {
        if (data.existingUser === 'true') {
          // 이미 가입한 회원이면 유저 정보 localstorage에 저장
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/main'); // 메인 화면으로
        } else {
          // 가입하지 않았다면 닉네임 화면으로

          navigate('/login/nickname');
        }
      } else {
        alert('로그인 과정 중에 문제가 발생했습니다.');
      }
    }
  };

  // // 구글 로그인
  // const callGoogleLogin = () => {
  //   console.log('구글로그인');
  //   if (emailget) {
  //     axios
  //       .get(`http://localhost:8080/login/sucess?email=${emailget}`)
  //       .then((res) => {
  //         const { data } = res;
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //     //   if (data.existingUser) {
  //     //     // 이미 가입한 회원이면 유저 정보 localstorage에 저장
  //     //     localStorage.setItem('token', data.accessToken);
  //     //     localStorage.setItem('user', JSON.stringify(data.user));
  //     //     navigate('/main'); // 메인 화면으로
  //     //   } else {
  //     //     // 가입하지 않았다면 닉네임 화면으로
  //     //     navigate('/login/nickname');
  //     //   }
  //     // } else {
  //     //   alert('로그인 과정 중에 문제가 발생했습니다.');
  //     // }
  //   }
  // 구글 로그인
  const callGoogleLogin = () => {
    console.log('구글로그인');
    if (emailget) {
      axios
        .get(`http://localhost:8080/login/sucess?email=${emailget}`)
        .then((res: any) => {
          console.log(res);
          const { data } = res;
          if (data.existingUser === 'true') {
            // 이미 가입한 회원이면 유저 정보 localstorage에 저장
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/main'); // 메인 화면으로
          } else {
            // 가입하지 않았다면 닉네임 화면으로
            const userEmail = data.email;
            navigate('/login/nickname', {
              state: {
                email: userEmail
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return <LoadingPage />;
}

export default SocialRedirect;
