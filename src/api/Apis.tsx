import { getApi, postApi } from './baseApi';

export const kakaoLoginApi = (code: string) => {
  const url = `kakaoLogin?code=${code}`;
  const data = getApi(url);
  return data;
};

export const googleLoginApi = () => {
  const url = `login/sucess`;
  const data = getApi(url);
  return data;
};

export const nicknameRegistApi = () => {
  const url = `login/user/nickname`;
  const data = getApi(url);
  return data;
};

export const postApiExample = (body: any) => {
  const url = `api url 주소`;
  const data = postApi(url, body);
  return data;
};
