import React from 'react';
import './orderDetail.less';
import ComponentList from 'components/componentList/componentList';
import cart from '../../../static/image/pay/cart.png';
import addIcon from '../../../static/image/pay/address.png';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orderDate: [
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
        },
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
    // request.setRequestHeader("token", "xxxx");
  }

  render() {
    const { edit, list, orderDate } = this.state;
    return (
      <div className="order-detail-wrap">
        <div className="status">
          <p>等待支付</p>
          {/* 订单超时已自动关闭 */}
          <p className="order-time"><em>28</em>:<em>00</em>后自动关闭订单</p>
          <img src={cart} alt="" />
        </div>
        <div className="addressWrapper">
          <p><img src={addIcon} alt="" /></p>
          <div className="receiver">
            <div className="r1">
              <span className="name">hao</span>
              <span className="phone">177****6784</span>
            </div>
            <div className="address">天津 天津市 河东区 dfadadad</div>
          </div>
        </div>
        <div className="goods">
          <p className="title"><i />订单信息</p>
          <ComponentList listData={orderDate} type="orderDetail" />
        </div>
        <div className="order-footer">
          <p>取消订单</p>
          <p className="fkStauts">付款20:00</p>
        </div>
      </div>
    );
  }
}

export default OrderDetail;
