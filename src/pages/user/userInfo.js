import React from 'react';
import axios from 'axios';
import './userInfo.less';

class UserInfo extends React.Component {
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


  render() {
    const { userVal, nameVal } = this.state;
    return (
      <div className="user-ifo-wrap">
        <section className="input-tips J_input-tips">
          <span>完善个人资料，我们会为你优先推荐适合商品哦~</span>
          <i className="iconfont" />
        </section>
        <section className="uprows">
          <div className="headicon" id="headicon">
            <div className="headicon-inner">
              <label>头像</label>
              <img className="headpic" src="//h0.hucdn.com/open/201824/a06ebf06867afc17_225x225.png!160x160.jpg" alt="" />
            </div>
          </div>
          <div className="nickname nick">
            <label>昵称</label>
            <p>
              <input className="nickname-input" required="" value={nameVal} />
            </p>
          </div>
          <div className="gender nick">
            <label>性别</label>
            <div className="type-radio">
              <p className="nv" onClick={this.handleRadio.bind(this)}><i />女</p>
              <p className="nan" onClick={this.handleRadio.bind(this)}><i />男</p>
            </div>
          </div>
          <div className="gender nick">
            <label>邮箱</label>
            <p>
              <input className="nickname-input" required="" value={nameVal} />
            </p>
          </div>
        </section>
        <div className="btn-wrap">
          <p className="save-info-btn btn">保存</p>
          <p className="logout btn">退出当前账号</p>
        </div>
      </div>
    );
  }
}
export default UserInfo;
