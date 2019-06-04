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
import jiaotou from '../../../static/image/user/jiantou.png';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userVal: '234',
      userPassVal: '',
      telVal: '',
      codeVal: '',
      tabData: {
        default: 0,
        list: [{ index: 0, title: '用户名注册' }, { index: 1, title: '快速注册' }],
      },
      data: [],
      isClick: true,
      userAginPassVal: '',
      seconds: 60,
    };
  }

  componentWillMount() {
    this.isUnmount = true;
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.seconds <= 0) {
      clearInterval(this.timer);
      this.setState({
        seconds: 60,
        isClick: false,
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
      case 'userAginPassVal': this.setState({ userAginPassVal: e.target.value }); break;
      case 'tel': this.setState({ telVal: e.target.value }); break;
      case 'code': this.setState({ codeVal: e.target.value }); break;
      default: console.log('错误');
    }
  }

  async sendCode() {
    const { telVal } = this.state;
    const that = this;
    const data = { 'way': 2, 'tel': telVal, 'TemplateCode': 'SMS_165676756' };
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(telVal)) {
    } else {
      clearInterval(this.timer);
      const _ = (await axios.post('api/users/sendcode', data)).data;
      if (_.success) {
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

  async sigup(str) {
    const { userVal, userPassVal, telVal, codeVal } = this.state;
    if (str === 'user') {
      // 用户名验证
      let flag = true;
      let _ = {};
      if (!/^(?!\d+$)[\da-zA-Z]+$/.test(userVal)) {
        flag = false;
      }
      // 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字
      if (!/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(userPassVal) && flag) {
        flag = false;
      }
      const data = { 'way': 1, 'username': userVal, 'password': userPassVal };
      flag ? _ = axios.post('api/users/signup', data)
        .then((_) => {
          if (_.data.success) {
            Toast.info('注册成功,前往登陆');
            const { history } = this.props;
            setTimeout(() => {
              history.push('/login');
            }, 1000);
          } else {
            Toast.info(_.data.data.msg);
          }
        }) : '';
    } else {
      // 手机号验证
      let flag = true;
      let _ = {};
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(telVal)) {
        flag = false;
      }
      if (!/^\d{6}$/.test(codeVal) && flag) {
        flag = false;
      }
      const data = { 'way': 2, 'tel': telVal, 'code': codeVal, 'TemplateCode': 'SMS_165676756' };
      flag ? _ = axios.post('api/users/signup', data).then((_) => {
        if (_.data.success) {
          Toast.info('注册成功,前往登陆');
          const { history } = this.props;
          setTimeout(() => {
            history.push('/login');
          }, 1000);
        } else {
          Toast.info(_.data.data.msg);
        }
      }) : '';
    }
  }

  render() {
    const { tabData, userVal, userPassVal, userAginPassVal, telVal, codeVal, isClick, seconds } = this.state;
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
                !/^(?!\d+$)[\da-zA-Z]+$/.test(userVal)
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              onChange={this.handelChange.bind(this, 'user')}
              defaultValue={userVal}
              placeholder="请输入用户名"
              maxLength="16"
            />
            <p id="Msg" className="input_error Msg"><i />请您输入正确用户名</p>
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
            <p id="Msg" className="input_error Msg"><i />密码最少6位必须包含数字、大写字母、小写字母</p>
          </li>
          <li>
            <img src={pass} alt="" />
            <input
              type="password"
              onBlur={(e) => {
                const reg = new RegExp(userPassVal);
                !reg.test(userAginPassVal)
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              onChange={this.handelChange.bind(this, 'userAginPassVal')}
              defaultValue={userAginPassVal}
              placeholder="请再次输入密码"
            />
            <p id="Msg" className="input_error Msg"><i />两次输入的密码不一致，请重新输入</p>
          </li>
          <li className="login-btn" onClick={this.sigup.bind(this, 'user')}> 注册</li>
        </ul>
        <ul className="tab-box">
          <li>
            <img src={tel} alt="" />
            <input type="text" onChange={this.handelChange.bind(this, 'tel')} defaultValue={telVal} placeholder="请输入手机号" maxLength="11" />
            <p id="Msg" className="input_error Msg"><i />请您输入正确的手机号</p>
          </li>
          <li>
            <img src={code} alt="" />
            <input type="text" onChange={this.handelChange.bind(this, 'code')} defaultValue={codeVal} placeholder="请输入验证码" maxLength="6" />
            {
            isClick ? <p onClick={this.sendCode.bind(this)}>获取验证码</p> : <p>{ seconds }s</p>
          }
            <p id="Msg" className="input_error Msg"><i />请您输入正确的验证码</p>
          </li>
          <li className="login-btn" onClick={this.sigup.bind(this, 'tel')}>注册</li>
        </ul>
      </Tabs>
    );
  }
}
export default Signup;
