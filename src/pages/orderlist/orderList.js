import React, { Component } from 'react';
import NavBar from 'components/plugins/navbar';
import Tabs from 'components/plugins/tabs';
import './orderList.less';

class orderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabData: {
        default: 0,
        list: [{ index: 0, title: '全部' }, { index: 1, title: '待付款' }, { index: 2, title: '待发货' }, { index: 3, title: '待收货' }],
      },
      list: [
        [{ title: '中国李宁 X OG SLICK联名款男子套头连帽卫衣', price: '29.9', num: 1, color: '颜色:电光黄', size: 'S' }],
        [{ title: '全部Lee 都市骑士系列男式印花短袖T恤', price: '29.9', num: 1, color: '颜色:电光黄', size: 'S' }],
        [{ title: 'STAYREAL TSUM系列 哥俩好文字短袖T恤', price: '89.9', num: 1, color: '颜色:白', size: 'S' }],
        [{ title: 'GUESS×Hello Kitty亚洲联名限量胶囊系列  男女款LOGO印花短袖T恤', price: '49.9', num: 3, color: '颜色:黑', size: 'M' }],
      ],
      data: [],
    };
  }

  componentWillMount() {
    const { tabData, list, data } = this.state;
    this.setState({
      data: list[tabData.default],
    }, () => {
      console.log(data);
    });
  }


  onRef = (ref) => {
    this.child = ref;
  }

  navHandleClick() {
    console.log('父组件!');
  }

  handleTabClick(index) {
    const { list } = this.state;
    this.setState({
      data: list[index],
    });
    console.log(index);
  }

  render() {
    const { tabData, data } = this.state;
    return (
      <div className="order-wrap">
        <NavBar onRef={this.onRef} navHandleClick={this.navHandleClick} title="我的订单" />
        <Tabs tabData={tabData} listData={data} tabDefault={this.handleTabClick.bind(this)} />
      </div>
    );
  }
}
export default orderList;
