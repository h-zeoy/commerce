import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import daifa from '../../../static/image/list/daifa.png';
import daifu from '../../../static/image/list/daifu.png';
import daishou from '../../../static/image/list/daishou.png';
import './myFile.less';

class MyFileUI extends Component {
  render() {
    return (
      <div className="myfile-wrap">
        <div className="my-info">
          <Link to="/perinfo">
            <div className="my-info-cnt">
              <div className="head" />
              <p className="info"><span>178****8206</span></p>
            </div>
          </Link>
        </div>
        <div className="mylist-wrap">
          <ul>
            <li className="order">
              <Link to="/orderList" className="a-border">
                我的订单
                <span className="next-page">全部订单<i className="iconfont" /></span>
              </Link>
            </li>
            <li className="order-list">
              <Link to="/orderList">
                <img className="box-icon" src={daifu} alt="" />
                <p>待付款</p>
              </Link>
              <Link to="/orderList">
                <img className="box-icon" src={daifa} alt="" />
                <p>待发货</p>
              </Link>
              <Link to="/orderList">
                <img className="box-icon" src={daishou} alt="" />
                <p>待收货</p>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="address">
              <img className="logo" src="//h0.hucdn.com/open/201832/6af1eaa0e0966272_54x54.png" alt="" />
              <Link to="/address" className="a-border">
                收货地址
                <span><i /></span>
              </Link>
            </li>
            <li className="service">
              <img className="logo" src="//h0.hucdn.com/open/201832/7081fea3e97fd670_54x54.png" alt="" />
              <Link to="/customer">
                客服中心
                <span><i /></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default MyFileUI;
