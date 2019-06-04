import React from 'react';
import axios from 'axios';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS
import Tabs from 'antd-mobile/lib/tabs'; // 加载 JS
import 'antd-mobile/lib/tabs/style/css'; // 加载 CSS
import './login.less';
import usern from '../../../static/image/user/username.png';
import pass from '../../../static/image/user/password.png';
import tel from '../../../static/image/user/tel.png';
import code from '../../../static/image/user/code.png';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userVal: '',
      userPassVal: '',
      telVal: '',
      codeVal: '',
      tabData: {
        default: 0,
        list: [{ index: 0, title: '用户名登录' }, { index: 1, title: '快速登录' }],
      },
      data: [],
      seconds: 60,
      isClick: true,
      timer: null,
    };
  }

  componentWillMount() {
    this.isUnmount = true;
  }

  componentDidUpdate(prevProp, prevState) {
    console.log(prevState.isClick);
    if (prevState.seconds <= 0) {
      clearInterval(this.timer);
      this.setState({
        seconds: 60,
        isClick: true,
      });
    }
  }

  componentWillUnmount() {
    this.isUnmount = false;
  }

  handelChange(str, e) {
    switch (str) {
      case 'user': this.setState({ userVal: e.target.value }); break;
      case 'userPassVal': this.setState({ userPassVal: e.target.value }); break;
      case 'tel': this.setState({ telVal: e.target.value }); break;
      case 'code': this.setState({ codeVal: e.target.value }); break;
      default: console.log('错误');
    }
  }

  async sigin(str) {
    const { userVal, userPassVal, telVal, codeVal } = this.state;
    let flag = true;
    let _ = {};
    if (str === 'user') {
      // 用户名验证
      if (!/^(?!\d+$)[\da-zA-Z]+$/.test(userVal)) {
        flag = false;
      }
      // 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字
      if (!/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(userPassVal) && flag) {
        flag = false;
      }
      const data = { 'way': 1, 'username': userVal, 'password': userPassVal };
      flag ? _ = (await axios.post('api/users/signin', data)).data : '';
    } else {
      // 手机号验证
      const data = { 'way': 2, 'tel': telVal, 'code': codeVal, 'TemplateCode': 'SMS_165677475' };
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(telVal)) {
        flag = false;
        return 0;
      }
      if (!/^\d{6}$/.test(codeVal) && flag) {
        flag = false;
        return 0;
      }
      flag ? _ = (await axios.post('api/users/signin', data)).data : '';
    }
    if (_.success && flag) {
      document.cookie = `X-Root-Auth-Token=${_.data.token}`;
      const { history } = this.props;
      sessionStorage.setItem('user', _.data.username);
      Toast.info('登录成功');
      history.push('/home');
    } else {
      Toast.info(_.data.msg);
    }
  }

  async sendCode() {
    const { telVal } = this.state;
    const that = this;
    const data = { 'way': 2, 'tel': telVal, 'TemplateCode': 'SMS_165677475' };
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(telVal)) {
    } else {
      clearInterval(this.timer);
      const _ = (await axios.post('api/users/sendcode', data)).data;
      if (_.success) {
        console.log(11111);
        that.timer = setInterval(() => {
          that.setState(preState => ({
            seconds: preState.seconds - 1,
            isClick: false,
          }));
        }, 1000);
        Toast.info(_.data.msg);
      } else {
        Toast.info(_.data.msg);
      }
    }
  }

  goSignUp() {
    const { history } = this.props;
    history.push({
      pathname: '/register',
    });
  }

  render() {
    const { userVal, userPassVal, telVal, codeVal, tabData, isClick, seconds } = this.state;
    return (
      <Tabs
        tabs={tabData.list}
        initialPage={tabData.default}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <ul className="tab-box">
          <li>
            <img src={usern} alt="" />
            <input
              type="text"
              onBlur={(e) => {
                !(/^(?!\d+$)[\da-zA-Z]+$/.test(userVal) || /^[1][3,4,5,7,8][0-9]{9}$/.test(userVal))
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              onChange={this.handelChange.bind(this, 'user')}
              defaultValue={userVal}
              placeholder="请输入用户名或手机号"
              maxLength="16"
            />
            <p id="Msg" className="input_error Msg"><i />请您输入正确用户名或手机号</p>
          </li>
          <li>
            <img src={pass} alt="" />
            <input
              type="password"
              onBlur={(e) => {
                !/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(userPassVal)
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              onChange={this.handelChange.bind(this, 'userPassVal')}
              defaultValue={userPassVal}
              placeholder="请输入密码"
            />
            <p id="Msg" className="input_error Msg"><i />密码必须需包含数字、大写字母、小写字母</p>
          </li>
          <li className="login-btn" onClick={this.sigin.bind(this, 'user')}> 登录</li>
          <li className="login-btn" onClick={this.goSignUp.bind(this)}> 前往注册</li>
        </ul>
        <ul className="tab-box">
          <li>
            <img src={tel} alt="" />
            <input
              type="text"
              onBlur={(e) => {
                !/^[1][3,4,5,7,8][0-9]{9}$/.test(telVal)
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              onChange={this.handelChange.bind(this, 'tel')}
              defaultValue={telVal}
              placeholder="请输入手机号"
              maxLength="11"
            />
            <p id="Msg" className="input_error Msg"><i />请您输入正确的手机号</p>
          </li>
          <li>
            <img src={code} alt="" />
            <input
              type="text"
              onBlur={(e) => {
                !/^\d{6}$/.test(codeVal)
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              onChange={this.handelChange.bind(this, 'code')}
              defaultValue={codeVal}
              placeholder="请输入验证码"
              maxLength="6"
            />
            {
            isClick ? <p onClick={this.sendCode.bind(this, telVal)}>获取验证码</p> : <p>{seconds}s</p>
          }
            <p id="Msg" className="input_error Msg"><i />请您输入正确的验证码</p>
          </li>
          <li className="login-btn" onClick={this.sigin.bind(this, 'tel')}>登录</li>
          <li className="login-btn" onClick={this.goSignUp.bind(this)}>前往注册</li>
        </ul>
      </Tabs>
    );
  }
}
export default Signin;
