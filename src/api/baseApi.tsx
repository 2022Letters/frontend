import axios from 'axios';

// api 서버 url
const apiUrl = `localhost:8080`;

export const getApi = async (url: string) => {
  try {
    const data = await axios.get(`${apiUrl}${url}`);
    return data;
  } catch (err) {
    console.log(err);
    alert('문제가 발생했습니다');
    return err;
  }
};

export const postApi = async (url: string, body?: any) => {
  try {
    const data = await axios.post(`${apiUrl}${url}`, body);
    return data;
  } catch (err) {
    console.log(err);
    alert('문제가 발생했습니다');
    return err;
  }
};

export const putApi = async (url: string, body?: any) => {
  try {
    const data = await axios.put(`${apiUrl}${url}`, body);
    return data;
  } catch (err) {
    console.log(err);
    alert('문제가 발생했습니다');
    return err;
  }
};

export const deleteApi = async (url: string) => {
  try {
    const data = await axios.delete(`${apiUrl}${url}`);
    return data;
  } catch (err) {
    console.log(err);
    alert('문제가 발생했습니다');
    return err;
  }
};
