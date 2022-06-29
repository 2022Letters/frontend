import { getApi, postApi } from './baseApi';

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
