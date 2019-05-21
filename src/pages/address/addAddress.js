import React, { Component } from 'react';
import './addAddress.less';
import NavBar from 'components/plugins/navbar';
import Picker from '../../../components/plugins/picker';

class AddAddress extends Component {
  render() {
    return (
      <div className="address-addedit-wrap">
        <NavBar title="添加收货地址" icon="" />
        <p><label>姓名</label><input type="text" /></p>
        <p><label>手机号码</label><input type="text" /></p>
        <Picker />
        <p><label className="noborder">详细地址</label><textarea name="address" maxLength="50" /></p>
      </div>
    );
  }
}
export default AddAddress;
