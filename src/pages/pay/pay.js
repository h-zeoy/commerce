import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from 'components/plugins/navbar';
import ComponentList from 'components/componentList/componentList';
import './pay.less';
import Address from '../address/addressList';

class pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddress: false,
      adder: {},
      goodsData: [
        { img: 'https://b1.hucdn.com/upload/item/1705/08/26787164153231_800x800.jpg!100x100.webp',
          name: '5/4/2只装特大号喜家家被子专用收纳袋换季收纳必备带手提装被子的袋子',
          info: '灰色, 无纺布, 2个装【1横款+1竖款】',
          price: '17.9',
          num: 1,
        },
        { img: 'https://b1.hucdn.com/upload/item/1705/08/26787164153231_800x800.jpg!100x100.webp',
          name: '5/4/2只装特大号喜家家被子专用收纳袋换季收纳必备带手提装被子的袋子',
          info: '灰色, 无纺布, 2个装【1横款+1竖款】',
          price: '17.9',
          num: 1,
        }],
    };
  }

  componentWillMount() {
    const adder = (sessionStorage.getItem('address') || sessionStorage.getItem('seleAddr'));
    adder
      ? this.setState({
        isAddress: true,
        adder: JSON.parse(adder),
      })
      : '';
  }

  handleClick() {
    const { history } = this.props;
    const query = ((history.location.search).split('?')[1]).split('=')[1];
    history.push({
      pathname: '/address',
      search: `?orderId=${query}`,
    });
  }

  render() {
    const { isAddress, goodsData, adder } = this.state;
    return (
      <div className="pay-wrap">
        <NavBar title="确认订单" />
        <div className="main-box">
          <div className="address-box">
            {
              isAddress ? (
                <div className="default-address" onClick={this.handleClick.bind(this)}>
                  <span className="location-icon" />
                  <p className="address-main">
                    <span className="name">{adder.realName}</span>
                    <span className="tel">{adder.phone}</span>
                    <i />
                    <span className="address">{adder.province + adder.city + adder.area + adder.street}</span>
                  </p>
                  <span className="rightIcon" />
                </div>
              ) : (
                <div className="default-address">
                  <i className="addIcon" />
                  <p className="addTitle">添加收货地址</p>
                  <span className="rightIcon" />
                </div>
              )
            }
          </div>
          <div className="pay-box">
            <h3 className="pay-box-hd">订单信息</h3>
            <ComponentList listData={goodsData} type="pay" />
          </div>
          <ul className="payment">
            <h3 className="pay-box-hd">选择支付方式</h3>
            <li className="wxpay"><i /><span>微信支付（推荐）</span><i /></li>
            <li className="alipay"><i /><span>支付宝支付</span><i /></li>
          </ul>
        </div>
        <div className="gopay-bar">
          <div className="pay-info">
            <p className="pay-sum pay-num J_pay-sum">实付金额：￥29.90</p>
            <p className="pay-tips J_pay-tips">(免运费)</p>
          </div>
          <p className="pay-btn">立即支付</p>
        </div>
      </div>
    );
  }
}
export default pay;
