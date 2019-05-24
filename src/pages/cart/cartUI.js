import React from 'react';
import {
  Link,
} from 'react-router-dom';
import NavBar from '../../../components/plugins/navbar';
import './cart.less';

class CartUI extends React.Component {
  render() {
    const { edit } = this.props;
    return (
      <div className="cart-wrap">
        <NavBar onRef={this.onRef} navHandleClick={this.navHandleClick} title="购物车" icon="编辑" />
        <main>
          <div className="cart-item-list">
            <div className="cart-select-dot selected" />
            <div className="cart-item-wrapper">
              <Link to="/goodsDetail">
                <div className="cart-item-img">
                  <img
                    alt="韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒"
                    src="//b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp"
                  />
                </div>
              </Link>
              <div className="cart-item-info">
                <Link to="/goodsDetail">
                  <p className="title"> 韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒</p>
                </Link>
                <p className="description"> 杏色 小黄人送四升级款</p>
                <p className="description" />
                <div className="cart-price-line-wrap">
                  <div className="cart-item-price"> ¥29.9</div>
                  <div className="cart-item-number"> ×1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item-list">
            <div className="cart-select-dot selected" />
            <div className="cart-item-wrapper">
              <Link to="/goodsDetail">
                <div className="cart-item-img">
                  <img
                    alt="韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒"
                    src="//b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp"
                  />
                </div>
              </Link> {
                edit
                  ? (
                    <div className="cart-item-info">
                      <Link to="/goodsDetail">
                        <p className="title"> 韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒</p>
                      </Link>
                      <p className="description"> 杏色 小黄人送四升级款</p>
                      <p className="description" />
                      <div className="cart-price-line-wrap">
                        <div className="cart-item-price"> ¥29.9</div>
                        <div className="cart-item-number"> ×1</div>
                      </div>
                    </div>
                  ) : (
                    <div className="cart-edit">
                      <p className="cart-control">
                        <a className="mul-btn">-</a>
                        <input
                          className="num-input"
                          type="text"
                          value="1"
                          readOnly="readonly"
                        />
                        <a className="mul-btn">+</a>
                      </p>
                      <p className="cart-delete"> 删除</p>
                    </div>
                  )
              }
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default CartUI;
