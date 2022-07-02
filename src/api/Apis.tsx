import { getApi, postApi } from './baseApi';
import { ICreateMessage } from '../types';

export const kakaoApi = () => {
  const url = `api url 주소`;
  const data = getApi(url);
  return data;
};

export const postApiExample = (body: any) => {
  const url = `api url 주소`;
  const data = postApi(url, body);
  return data;
};

export const postDetailApi = (postId: number) => {
  const url = `${process.env.APIURL}/post/${postId}`;
  const data = getApi(url);
  return data;
};

export const createMessageApi = (body: ICreateMessage) => {
  const url = `${process.env.APIURL}/msg`;
  const data = postApi(url, body);
  return data;
};
