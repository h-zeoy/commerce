import axios from 'axios';
import { getCookie } from 'utils/cookie';

const Axios = axios.create();

Axios.interceptors.request.use((config) => {
  // Do something before request is sent
  // window.localStorage.getItem("accessToken") 获取token的value
  const token = getCookie('X-Root-Auth-Token');
  if (token) {
    // 将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.cookie = token;
    return config;
  }
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

export default Axios;
