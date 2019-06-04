import React, { Component } from 'react';
import axios from 'axios';
import NavBar from 'components/plugins/navbar';
import Tabs from 'components/plugins/tabs';
import './orderList.less';

class orderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ index: 0, title: '全部' }, { index: 1, title: '待付款' }, { index: 2, title: '待发货' }, { index: 3, title: '待收货' }],
      data: [],
      index: 0,
    };
  }

  async componentDidMount() {
    // 全部 4 待付款 1 待发货 2 待收获 3
    const { history } = this.props;
    let index = 0;
    if (history.location.search) {
      index = String(history.location.search).split('=')[1];
    }
    console.log(index);
    const _ = await axios.get('/api/order/list', { params: {
      status: index,
    } });
    this.setState({
      data: _.data.data,
      index: Number(index),
    });
  }


  onRef = (ref) => {
    this.child = ref;
  }

  navHandleClick() {
    console.log('父组件!');
  }

  async handleTabClick(index) {
    console.log(index);
    const _ = await axios.get('/api/order/list', { params: {
      status: index,
    } });
    this.setState({
      data: _.data.data,
      index,
    });
  }

  render() {
    const { list, data, index } = this.state;
    console.log(data);
    return (
      <div className="order-wrap">
        <NavBar onRef={this.onRef} navHandleClick={this.navHandleClick} title="我的订单" />
        <Tabs tabData={list} listData={data} index={index} tabDefault={this.handleTabClick.bind(this)} />
      </div>
    );
  }
}
export default orderList;
