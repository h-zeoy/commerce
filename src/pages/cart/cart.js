import React from 'react';
import { withRouter,
  Link,
} from 'react-router-dom';

import { getCookie } from 'utils/cookie';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS
import ComponentList from '../../../components/componentList/componentList';
import NavBar from '../../../components/plugins/navbar';
import './cart.less';


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      loading: true,
      checkedAll: false, //全选状态
      defaultIndex: '',
      list: [{
        thumbnailUrl: 'https://b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp',
        name: '韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒',
        info: '杏色 小黄人送四升级款',
        price: 29.9,
        num: 1,
        checked: false,
        goodsId: 'sgfdgfdgsfs',
      },
      {
        thumbnailUrl: 'https://b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp',
        name: '韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒',
        info: '杏色 小黄人送四升级款',
        price: 29.9,
        num: 1,
        checked: false,
        goodsId: 'hjfhjfhjgf'
      },
      {
        thumbnailUrl: 'https://b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp',
        name: '韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒',
        info: '杏色 小黄人送四升级款',
        price: 29.9,
        num: 1,
        checked: false,
        goodsId: 'hjfhjfhjgf'
      },
      {
        thumbnailUrl: 'https://b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp',
        name: '韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒',
        info: '杏色 小黄人送四升级款',
        price: 29.9,
        num: 1,
        checked: false,
        goodsId: 'hjfhjfhjgf'
      },
      {
        thumbnailUrl: 'https://b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp',
        name: '韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒',
        info: '杏色 小黄人送四升级款',
        price: 29.9,
        num: 1,
        checked: false,
        goodsId: 'hjfhjfhjgf'
      },
      {
        thumbnailUrl: 'https://b1.hucdn.com/upload/item/1904/19/46117992018642_800x800.jpg!100x100.webp',
        name: '韩国学生小型夹板女拉直发神器懒人直卷两用不伤发内扣刘海卷发棒',
        info: '杏色 小黄人送四升级款',
        price: 29.9,
        num: 1,
        checked: false,
        goodsId: 'hjfhjfhjgf'
      }],
    };
  }

  componentWillMount() {
    console.log(document.cookie);
    const { history } = this.props;
    // if (getCookie('X-Root-Auth-Token')) {
    //   this.setState({
    //     loading: false,
    //   });
    // } else {
    //   this.setState({
    //     loading: true,
    //   });
    //   Toast.info('请登陆', 1);
    //   const timer = setTimeout(() => {
    //     clearTimeout(timer);
    //     history.push('/login');
    //   }, 1000);
    // }
  }

  navHandleClick() {
    this.setState((prevState, props) => ({
      edit: !prevState.edit,
    }));
  }

  parentHandleEdit(item, index) {
    this.setState({
      defaultIndex: index,
    });
    console.log(item, index);
  }

  handleDetele(item, index) {

    console.log(item, item.check);
  }

  // 全选事件
  handleAllChange(){
    const { checkedAll, list } = this.state;
    list.map((item,index) =>{
      return item.checked = !checkedAll;
    })
    this.setState({
      checkedAll: !checkedAll,
      list: list
    });
  }

  // CheckItem事件
  handleSelect(it){
    let { list } = this.state;
    let flag = true;
    list.map((item,index) =>{
      if (item.goodsId === it.goodsId) {
        return it.checked = !it.checked;
      }
    })
    for (let i=0;i<list.length;i++) {
      if (!list[i].checked) {
        flag = false;
      }
    }
    this.setState({
      checkedAll: flag,
      list: list
    });
  }

  render() {
    const { list, loading, checkedAll } = this.state;
    return (
      <div className="cart-wrap">
        <NavBar onRef={this.onRef} navHandleClick={this.navHandleClick} title="购物车" />
        {
          list.map((item, index) => {
            return (
              <div className="cart-item-list" key={Math.random()}>
                <div className="cart-item-wrap">
                  {
                    item.checked
                      ? <div onClick={this.handleSelect.bind(this, item, index)} className="cart-select-dot" />
                      : <div onClick={this.handleSelect.bind(this, item, index)} className="cart-noselect-dot" />
                  }
                  
                  <div className="cart-item-wrapper">
                    <Link to="/goodsDetail">
                      <div className="cart-item-img">
                        <img
                          alt={item.name}
                          src={item.thumbnailUrl}
                        />
                      </div>
                    </Link>
                      <div className="cart-item-info">
                        <Link to="/goodsDetail">
                          <p className="title">{item.name}</p>
                        </Link>
                        <p className="description">{item.info}</p>
                        <p className="description" />
                        <div className="cart-price-line-wrap">
                          <div className="cart-item-price"> ¥{item.price}</div>
                          <p className="cart-control">
                            <span className="mul-btn">-</span>
                            <input
                              className="num-input"
                              type="text"
                              defaultValue={item.num}
                            />
                            <span className="mul-btn">+</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="cart-count">
                  <p onClick={this.handleDetele.bind(this, item, index)}>删除</p>
                  <p>小计:29.9</p>
                </div>
              </div>
            );
          })
          }
        <div className="gopay-bar">
          {
            !checkedAll?<div className="cart-select-dot" onClick={this.handleAllChange.bind(this)}/>:<div className="cart-noselect-dot" onClick={this.handleAllChange.bind(this)}/>
          }
          <div className="pay-info">
            <p className="pay-num">合计:29.9</p>
            <p className="pay-tips">不含运费</p>
          </div>
          <p className="pay-btn">结算</p>
        </div>
      </div>
      // loading
      //   ? ''
      //   : (
      //     <CartUI
      //       edit={edit}
      //       list={list}
      //     />
      //   )

    );
  }
}

export default withRouter(Cart);
