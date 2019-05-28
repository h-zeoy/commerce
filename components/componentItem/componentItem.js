import React from 'react';
import './componentItem.less';

class CompomemtListBig extends React.Component {
  handleClickItem(item) {
    const { handlList } = this.props;
    this.setState({
      indexDefult: item.index,
    });
    handlList(item);
  }

  render() {
    const { item, type } = this.props;
    if (type === 'big') {
      return (
        <div className="list-item1" onClick={this.handleClickItem.bind(this, item)}>
          <img src={item.thumbnailUrl} alt="" />
          <div className="list-item-title">
            <p className="title">{item.name}</p>
            <p className="list-p"><i className="list-item-price">¥{item.price}</i><em className="list-item-btn">马上抢</em></p>
          </div>
        </div>
      );
    } else if (type === 'small') {
      return (
        <div className="list-item2">
          <img src={item.thumbnailUrl} alt="" />
          <div className="list-item-title">
            <p className="title">{item.title}</p>
            <p className="list-item-price">¥{item.price}</p>
          </div>
        </div>
      );
    } else if (type === 'order') {
      return (
        // 订单 待付款 立即支付 取消订单 待收货 查看物流 交易关闭 删除订单
        <div className="list-item3">
          <p className="item3-info"><span>订单编号: 31323231321</span><span className="status">交易关闭</span></p>
          <div className="item3-content">
            <img src="https://b1.hucdn.com/upload/item/1904/03/87305956755710_800x800.jpg!160x160.webp" alt="" />
            <div className="item3-content-right">
              <p className="item3-title">贝贝农场直供 山东烟台栖霞红富士</p>
              <p className="item3-sku">4个装 单果约75mm新鲜水果</p>
              <div className="item3-money">
                <span className="item3-price">¥15.00</span><span className="item3-num">x1</span>
              </div>
            </div>
          </div>
          <div className="item3-total">
            <div className="item3-total-info item3-height">共1件商品  总计：<strong>¥15.00</strong></div>
            <div className="item3-btns item3-height">
              <div className="item3-btn">删除订单</div>
              <div className="item3-btn">查看物流</div>
              <div className="item3-btn">取消订单</div>
              <div className="item3-btn pay-btn">立即支付</div>
            </div>
          </div>
        </div>
      );
    } else if (type === 'address') {
      return (
        <div className="address-list">
          <div className="receive-info">
            <span className="receive-name">{item.name}</span>
            <span className="receive-phonenumber">{item.phone}</span>
          </div>
          <div className="address-info">
            <span>{item.address}</span>
          </div>
          <div className="address-editor">
            <p className={item.default ? 'set-default' : ''}>默认地址</p>
            <div className="address-btn">
              <span className="edit-btn">编辑</span>
              <span className="del-btn">删除</span>
            </div>
          </div>
        </div>
      );
    } else if (type === 'pay') {
      return (
        <div className="order-list">
          <div className="order-item">
            <img src={item.img} alt="" />
            <div className="order-info">
              <h4>{item.name}</h4>
              <p>{item.info}</p>
              <div className="order-item-price">
                <p>¥{item.price}</p>
                <p className="order-item-num">×{item.num}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (type === 'orderDetail') {
      return (
        <div className="order-list">
          <div className="order-item">
            <img src={item.img} alt="" />
            <div className="order-info">
              <h4>{item.name}</h4>
              <p>{item.info}</p>
              <div className="order-item-price">
                <p>¥{item.price}</p>
                <p className="order-item-num">×{item.num}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CompomemtListBig;
