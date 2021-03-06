
import { ICreateMessage } from '../types';
import { getApi, postApi, putApi, deleteApi } from './baseApi';

// 로그인 api
export const kakaoLoginApi = (code: string) => {
  const url = `kakaoLogin?code=${code}`;
  const data = getApi(url);
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

export const postDetailApi = (postId: number) => {
  const url = `${process.env.API_URL}api/post/${postId}`;
  const data = getApi(url);
  return data;
};

export const createMessageApi = (body: ICreateMessage) => {
  const url = `${process.env.API_URL}api/msg`;
  const data = postApi(url, body);
  return data;
};
