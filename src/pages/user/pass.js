import React from 'react';
import axios from 'axios';
import './pass.less';

class Pass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userVal: '',
      nameVal: '178****8206',
    };
  }

  handleRadio() {
    console.log('1313131');
  }

  handelChange(str) {

  }


  render() {
    const { oldPass, userPass, aginUserPass } = this.state;
    return (
      <div className="pass-wrap">
        <div className="pass-info">
          <h1>添加密码</h1>
          <p>手机号：178***5416</p>
          <p className="input-pass"><input type="password" defaultValue={userPass} onChange={this.handelChange.bind(this, 'userPass')} placeholder="请输入新密码" /></p>
          <p className="input-pass"><input type="password" defaultValue={aginUserPass} onChange={this.handelChange.bind(this, 'aginUserPass')} placeholder="请再次输入密码" /></p>
        </div>
      </div>
    );
  }
}
export default Pass;
