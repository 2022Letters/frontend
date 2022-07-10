import { getApi, postApi, putApi, deleteApi } from './baseApi';

// 로그인 api
export const kakaoLoginApi = async (code: string) => {
  const url = `kakaoLogin?code=${code}`;
  const data = await getApi(url);
  console.log(data);
  return data;
};

export const googleLoginApi = (email: string) => {
  console.log(email);
  const url = `login/sucess?email=${email}`;
  const data = getApi(url);
  return data;
};

export const nicknameRegistApi = () => {
  const url = `login/user/nickname`;
  const data = getApi(url);
  return data;
};

export const deleteUser = (userid: string) => {
  const url = `user/${userid}`;
  const data = deleteApi(url);
  return data;
};

export const postApiExample = (body: any) => {
  const url = `api url 주소`;
  const data = postApi(url, body);
  return data;
};
