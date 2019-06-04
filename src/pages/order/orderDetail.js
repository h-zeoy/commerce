import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './orderDetail.less';
import ComponentList from 'components/componentList/componentList';
import cart from '../../../static/image/pay/cart.png';
import addIcon from '../../../static/image/pay/address.png';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orderDate: [],
      adder: {},
      status: '',
      isTime: false,
      no: '',
    };
  }

  async componentWillMount() {
    const { history } = this.props;
    const orderId = String(history.location.search).split('=')[1];
    const _ = await axios.get('/api/order/detail', { params: {
      orderId,
    } });
    let isTime = false;
    if (_.data.data.status === '待发货') {
      isTime = false;
    } else {
      isTime = true;
    }
    this.setState({
      orderDate: _.data.data.goodsData,
      adder: _.data.data.adder,
      status: _.data.data.status,
      isTime,
      no: _.data.data.orderNo,
    });
  }

  render() {
    const { edit, list, orderDate, adder, status, isTime, no } = this.state;
    return (
      <div className="order-detail-wrap">
        <div className="status">
          <p>{status}</p>
          {/* 订单超时已自动关闭 */}
          {
            isTime ? <p className="order-time"><em>28</em>:<em>00</em>后自动关闭订单</p> : ''
          }

          <img src={cart} alt="" />
        </div>
        <div className="addressWrapper">
          <p><img src={addIcon} alt="" /></p>
          <div className="receiver">
            <div className="r1">
              <span className="name">{adder.realName}</span>
              <span className="phone">{adder.phone}</span>
            </div>
            <div className="address">{adder.province + adder.city + adder.area + adder.street}</div>
          </div>
        </div>
        <div className="goods">
          <p className="title"><i />订单信息</p>
          <ComponentList listData={orderDate} type="orderDetail" />
        </div>
        <div className="order-no">
          <p>订单编号:{no}</p>
        </div>
        {
          isTime
            ? (
              <div className="order-footer">
                <p>取消订单</p> <p className="fkStauts">付款</p>

              </div>
            )
            : (
              <div className="order-footer">
                <Link to="/home"><p>首页</p> </Link>
              </div>
            )
        }
      </div>
    );
  }
}

export default OrderDetail;
