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

  handleEdit(item) {
    const { handleChildEdit } = this.props;
    handleChildEdit(item);
  }

  handleDelete(item) {
    const { handleChildDelete } = this.props;
    handleChildDelete(item);
  }

  handleAddress(item) {
    const { handleAddressList } = this.props;
    handleAddressList(item);
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
            {
              item.linePrice
                ? <p className="list-item-price"><span>¥{item.price}</span><span className="line-price">¥{item.price}</span></p>
                : <p className="list-item-price"><span>¥{item.price}</span></p>
            }
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
        <div className="address-list" onClick={this.handleAddress.bind(this, item)}>
          <div className="receive-info">
            <span className="receive-name">{item.realName}</span>
            <span className="receive-phonenumber">{item.phone}</span>
          </div>
          <div className="address-info">
            <span>{item.street}</span>
          </div>
          <div className="address-editor">
            <p className={item.isDefault ? 'set-default' : ''}>默认地址</p>
            <div className="address-btn">
              <span className="edit-btn" onClick={this.handleEdit.bind(this, item)}>编辑</span>
              <span className="del-btn" onClick={this.handleDelete.bind(this, item)}>删除</span>
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
    } else if (type === 'brand') {
      return (
        <div className="product-wrap">
          <div className="product-img">
            <img className="item-img lazy" src="http://b1.hucdn.com/upload/tuan/1904/26/49420833940000_750x350.jpg" alt="" />
          </div>
          <div className="product-info">
            <p className="title">{item.name}</p>
            <div className="tags_bubble">
              <span className="tag0">清仓</span>
              <span className="tag1">{item.zhekou}折</span>
            </div>
            <span className="how-much-buy">{item.person}人已团</span>
            <div className="price-info">
              <span className="cur-price">
                <span className="currency">¥</span><span className="price-num">{item.price}</span>
              </span>
              <span className="old-price">
                <span className="currency">¥{item.linePrice}</span>
              </span>

              <div className="instant-buy"><span className="instant-buy-text">立即抢</span></div>
            </div>
          </div>
        </div>
      );
    } else if (type === 'hot') {
      return (
        <div className="product-wrap hot-wrap">
          <div className="top-label">
            <span className="top-level">TOP1</span>
            <span className="top-tags">最受粉丝欢迎</span>
          </div>
          <div className="product-img">
            <img className="item-img lazy" src="http://b1.hucdn.com/upload/tuan/1904/26/49420833940000_750x350.jpg" alt="" />
          </div>
          <div className="product-info">
            <p className="title">{item.name}</p>
            <p className="bian-p" />
            <div className="price-info">
              <span className="cur-price">
                <span className="currency">¥</span><span className="price-num">{item.price}</span>
              </span>
              <span className="old-price">
                <span className="currency">¥{item.linePrice}</span>
              </span>
              <span className="how-much-sold"><img className="hot-img" src="http://h0.hucdn.com/open/201822/82609412b26b5412_30x30.png" alt="" />爆卖10万件</span>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CompomemtListBig;
