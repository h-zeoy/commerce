import Axios from './Axios';

/* ------------------地址api--------------------------- */
// 添加地址
export const addAddress = (params) => {
  return Axios.get('api/address/add', { params });
};

// 获取地址列表
export const getAddressList = (params) => {
  return Axios.post('api/address/list', params);
};

// 编辑地址列表
export const editAddress = (params) => {
  return Axios.post('api/address/edit', params);
};
/* -------------------end---------------------------- */
