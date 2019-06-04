import React from 'react';
import axios from 'axios';
import { delCookie } from '../../../utils/cookie';
// import Modal from '../../../components/markLayer/modal';
import './userInfo.less';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userVal: '',
      nameVal: '178****8206',
      emailVal: '178****8206',
      active: true,
      info: {},
    };
  }

  componentDidMount() {
    const userInfo = {};
    const result = { username: 'afasda', email: '1043126186@qq.com', six: '男' };
    userInfo.id = 700001;
    userInfo.name = result.username ? result.username : result.tel;
    userInfo.QQ = 1424234432;
    userInfo.email = result.email;
    userInfo.money = 20;
    const radios = document.getElementsByName('six');
    const value = '';
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value === result.six) {
        radios[i].setAttribute('checked', true);
        break;
      }
    }
    this.setState({
      info: userInfo,
      emailVal: result.email,
      nameVal: result.username ? result.username : result.tel,
    });
  }

  handleBaoCun() {
    const { nameVal, emailVal } = this.state;
    const radios = document.getElementsByName('six');
    let value = '';
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        value = radios[i].value;
        break;
      }
    }
    if (value === '') {
      console.log('请选择性别');
    }
    console.log(nameVal, emailVal, value);
  }

  handlePay() {
    delCookie('X-Root-Auth-Token');
  }

  handleInput(str, e) {
    if (str === 'name') {
      this.setState({
        nameVal: e.target.value,
      });
    } else {
      this.setState({
        emailVal: e.target.value,
      });
    }
  }

  handleHeader() {

  }


  render() {
    const { userVal, nameVal, emailVal, active, info } = this.state;
    return (
      <div className="user-ifo-wrap">
        {/* <Modal active={active} /> */}
        <section className="input-tips J_input-tips">
          <span>完善个人资料，我们会为你优先推荐适合商品哦~</span>
          <i className="iconfont" />
        </section>
        <section className="uprows">
          <div className="headicon" id="headicon">
            <div className="headicon-inner" onClick={this.handleHeader.bind(this)}>
              <label>头像</label>
              <img className="headpic" src="//h0.hucdn.com/open/201824/a06ebf06867afc17_225x225.png!160x160.jpg" alt="" />
            </div>
          </div>
          <div className="gender nick">
            <label>用户ID</label>
            <p>{info.id}</p>
          </div>
          <div className="nickname nick">
            <label>昵称</label>
            <p>
              <input className="nickname-input" value={nameVal} onChange={this.handleInput.bind(this, 'name')} />
            </p>
          </div>
          <div className="nick">
            <label>性别</label>
            <div className="type-radio">
              <input type="radio" name="six" id="nv" value="女" />
              <label htmlFor="nv">女</label>
              <input type="radio" name="six" id="nan" value="男" />
              <label htmlFor="nan">男</label>
            </div>
          </div>
          <div className="nick">
            <label>邮箱</label>
            <p>
              <input className="nickname-input" required="" value={emailVal} onChange={this.handleInput.bind(this, 'email')} />
            </p>
          </div>
          <div className="gender nick">
            <label>余额</label>
            <p>{info.money} </p>
          </div>
        </section>
        <div className="btn-wrap">
          <p className="save-info-btn btn" onClick={this.handleBaoCun.bind(this)}>保存</p>
          <p className="logout btn" onClick={this.handlePay.bind(this)}>退出当前账号</p>
        </div>
      </div>
    );
  }
}
export default UserInfo;
