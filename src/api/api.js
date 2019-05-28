import axios from './Axios';

/* ------------------地址api--------------------------- */
// 添加地址
export const addAddress = (params) => {
  return axios.post('api/address/add', { params });
};

// 获取地址列表
export const getAddressList = (params) => {
  return axios.post('api/address/list', params);
};

// 编辑地址列表
export const editAddress = (params) => {
  return axios.post('api/address/edit', params);
};
/* -------------------end---------------------------- */
