import React, { Component } from 'react';
import NavBar from 'components/plugins/navbar';
import ComponentList from 'components/componentList/componentList';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS
import axios from 'axios';
import './pay.less';
import '../../../components/markLayer/markLayer';
import PayMark from '../../../components/markLayer/payMark';

class pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddress: false,
      adder: {},
      goodsData: [],
      pay: [{ str: 'wx', class: 'wxpay', title: '微信支付（推荐）' }, { str: 'ali', class: 'alipay', title: '支付宝支付' }],
      payment: '微信支付',
      money: 0,
      msg: '',
      active: false,
      pass: '',
      orderId: 0,
    };
  }

  componentWillMount() {
    const { goodsData } = this.state;
    const { history } = this.props;
    let adder = (sessionStorage.getItem('address') || sessionStorage.getItem('seleAddr'));
    const goodsInfo = [];
    goodsInfo.push(JSON.parse(sessionStorage.getItem('goodsInfo')));
    let money = 0;
    for (let i = 0; i < goodsInfo.length; i++) {
      money += goodsInfo[i].price;
    }
    if (adder) {
      adder = history.location.search ? sessionStorage.getItem('seleAddr') : sessionStorage.getItem('address');
      this.setState({
        isAddress: true,
        adder: JSON.parse(adder),
        goodsData: goodsInfo,
        defaultPay: 0,
        money,
      });
    } else {
      this.setState({
        isAddress: false,
        goodsData: goodsInfo,
        defaultPay: 0,
        money,
      });
    }
  }

  onRef = (ref) => {
    this.child = ref;
  }

  handleClick() {
    const { history } = this.props;
    history.push({
      pathname: '/address',
    });
  }

  handleFromPay() {
    const { history } = this.props;
    history.push({
      pathname: '/address',
    });
  }

  handleClickPay(str, index) {
    let payment = '';
    if (str === 'wx') {
      payment = '微信支付';
    } else {
      payment = '支付宝支付';
    }
    this.setState({
      defaultPay: index,
      payment,
    });
  }

  async handlePayBtn() {
    const { adder, goodsData, payment, money, msg, active } = this.state;
    if (JSON.stringify(adder) === '{}') {
      Toast.info('请填写地址');
    } else {
      const params = {};
      params.adder = adder;
      params.goodsData = goodsData;
      params.payment = payment;
      params.money = money;
      params.msg = msg;
      params.status = '待付款';
      const _ = (await axios.post('api/order/create', params));
      if (_.data.success) {
        console.log('下单成功');
        this.setState({
          active: true,
          orderId: _.data.data.orderId,
        });
      } else {
        Toast.info('创建失败');
      }
    }
  }

  handleInput(e) {
    const { value } = e.target;
    this.setState(prevState => ({
      msg: value,
    }));
  }

  handleInputPass(e) {
    const { value } = e.target;
    this.setState({
      pass: value,
    });
    console.log(value);
  }

  async handlePassPay() {
    const { history } = this.props;
    // 1 fail 0 success 2 no money
    const { pass, money, orderId } = this.state;
    if (pass.length === 6) {
      const result = (await axios.post('api/users/pass', { passord: pass, money, orderId }));
      if (result.data.success) {
        history.replace({
          pathname: '/result',
          state: [orderId, 0],
        });
      } else if (String(result.data.code) === '101') {
        Toast.info(result.data.data, 1);
        const timer = setTimeout(() => {
          clearTimeout(timer);
          history.replace({
            pathname: '/result',
            state: [orderId, 2],
          });
        });
      } else {
        history.replace({
          pathname: '/result',
          state: [orderId, 1],
        });
      }
    } else {
      Toast.info('密码为6位');
    }
    //   } else if () {
    //

    //   } else {
    //   Toast.info('支付失败请重新支付', 1);
    // }

    //   console.log(pass);
    // } else {
    //   Toast.info('密码为6位');
    // }
  }

  render() {
    const { isAddress, goodsData, adder, pay, defaultPay, msg, active, money, payment } = this.state;
    return (
      <div className="pay-wrap">
        <NavBar title="确认订单" />
        <PayMark handleInputPass={this.handleInputPass.bind(this)} active={active} handlePassPay={this.handlePassPay.bind(this)} title={payment} />
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
                <div className="default-address" onClick={this.handleFromPay.bind(this)}>
                  <i className="addIcon" />
                  <p className="addTitle">添加收货地址</p>
                  <span className="rightIcon" />
                </div>
              )
            }
          </div>
          <div className="pay-box">
            <h3 className="pay-box-hd">订单信息</h3>
            <ComponentList listData={goodsData} type="pay" handleInput={this.handleInput.bind(this)} />
          </div>
          <ul className="payment">
            <h3 className="pay-box-hd">选择支付方式</h3>
            {
              pay.map((it, index) => {
                return (
                  <li onClick={this.handleClickPay.bind(this, it.str, index)} className={it.class}><i /><span>{it.title}</span><i className={defaultPay === index ? 'active' : ''} /></li>
                );
              })
            }
          </ul>
        </div>
        <div className="gopay-bar">
          <div className="pay-info">
            <p className="pay-sum pay-num J_pay-sum">实付金额：￥{money}</p>
            <p className="pay-tips J_pay-tips">(免运费)</p>
          </div>
          <p className="pay-btn" onClick={this.handlePayBtn.bind(this)}>立即支付</p>
        </div>
      </div>
    );
  }
}
export default pay;
