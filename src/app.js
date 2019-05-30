import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/home/home';
import Cart from 'pages/cart/cart';
import MyFile from 'pages/myfile/myFile';
import addressList from 'pages/address/addressList';
import address from 'pages/address/address';
import goodsList from 'pages/goods/goodsList';
import goodsDetail from 'pages/goods/goodsDetail';
import goodsEdit from '@/backstage/goodsEdit';
import login from './pages/user/login';
import register from './pages/user/register';
import search from './pages/search/search';
import orderList from './pages/order/orderList';
import orderDetail from './pages/order/orderDetail';
import pay from './pages/pay/pay';
import activityone from './pages/activity/activity1';
import activitytwo from './pages/activity/activity2';
import brandClear from './pages/activity/brandClear';
import hotSale from './pages/activity/hotSale';
import userInfo from './pages/user/userInfo';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/myfile" component={MyFile} />
          <Route exact path="/search" component={search} />

          {/* --------------------------    地址    -------------------------- */}
          <Route exact path="/address" component={addressList} />
          <Route exact path="/address/add" component={address} />
          <Route exact path="/address/edit" component={address} />
          {/* -------------------------- 地址 end------------------------------ */}

          {/* --------------------------    商品    -------------------------- */}
          <Route exact path="/goods/list" component={goodsList} />
          <Route exact path="/goods/detail" component={goodsDetail} />
          {/* -------------------------- 商品 end------------------------------ */}

          {/* --------------------------    用户    -------------------------- */}
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route exact path="/userInfo" component={userInfo} />
          {/* -------------------------- 用户 end------------------------------ */}

          {/* --------------------------    、订单    -------------------------- */}
          <Route exact path="/order/list" component={orderList} />
          <Route exact path="/order/detail" component={orderDetail} />
          {/* -------------------------- 订单 end------------------------------ */}

          {/* --------------------------    、订单    -------------------------- */}
          <Route exact path="/pay" component={pay} />
          <Route exact path="/aginPay" component={orderDetail} />
          {/* -------------------------- 订单 end------------------------------ */}

          {/* --------------------------    活动    -------------------------- */}
          <Route exact path="/activity/one" component={activityone} />
          <Route exact path="/activity/two" component={activitytwo} />
          <Route exact path="/brandClear" component={brandClear} />
          <Route exact path="/hotSale" component={hotSale} />
          {/* -------------------------- 活动 end------------------------------ */}
        </Switch>
      </div>
    );
  }
}
export default App;
