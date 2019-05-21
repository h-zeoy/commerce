import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/home/home';
import Cart from 'pages/cart/cart';
import MyFile from 'pages/myfile/myFile';
import orderList from 'pages/orderlist/orderList';
import address from 'pages/address/address';
import addAddress from 'pages/address/addAddress';
import goodsList from 'pages/goods/goodsList';
import goodsDetail from 'pages/goods/goodsDetail';
import goodsEdit from '@/backstage/goodsEdit';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/myfile" component={MyFile} />
          <Route exact path="/orderList" component={orderList} />
          <Route exact path="/address" component={address} />
          <Route exact path="/add-address" component={addAddress} />
          <Route exact path="/goodsEdit" component={goodsEdit} />
          <Route exact path="/goodsDetail" component={goodsDetail} />
          <Route exact path="/goodsList" component={goodsList} />
        </Switch>
      </div>
    );
  }
}
export default App;
