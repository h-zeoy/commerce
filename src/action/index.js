import {
  SELECT_ALL_SHOP,
  GET_USER_CART,
  TOGGLE_SHOP,
  ADD_SHOP,
  SUB_SHOP,
  REMOVE_SHOP
} from './visibility';
  
  import { wantShopData } from '../api/shopApi';
  
   
  
  // 同步获取用户购物车所有数据
  
  export function asyncUserCartData(userCartData){
  
    let cartData = userCartData.map(item => {
  
      item.isSelected = true; // 通过该属性判断该条商品是否处于选中状态
  
      return item;
  
    });
  
    return {
  
      type: GET_USER_CART,
  
      userCartData: cartData
  
    }
  
  }