import axios from 'axios';
import { getCookie } from 'utils/cookie';

axios.interceptors.request.use((config) => {
  const token = getCookie('X-Root-Auth-Token');
  config.data = JSON.stringify(config.data);
  config.headers = {
    'X-Root-Auth-Token': token,
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  };
  return config;
});
export default axios;
