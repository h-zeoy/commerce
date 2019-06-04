import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';  // 处理异步请求的数据，它允许你的action可以返回函数

import getWantData from './reducers';

 

const store = createStore(getWantData, compose(

  applyMiddleware(thunk)

));

 

export default store;