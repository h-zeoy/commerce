
import React from 'react';
import ReactDOM from 'react-dom'; // react-dom 虚拟DOM
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from '@/app.js';
// reset样式
import 'styles/reset.css';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>, document.getElementById('root'));