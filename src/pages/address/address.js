import React, { Component } from 'react';
import './address.less';
import NavBar from 'components/plugins/navbar';
import Picker from '../../../components/plugins/picker';

class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userVal: '',
      telVal: '',
      addrVal: '',
      area: [],
    };
  }

  componentWillMount() {
    const { history } = this.props;
    // console.log(history.location.pathname);
  }

  handelChange(str, e) {
    switch (str) {
      case 'user': this.setState({ userVal: e.target.value }); break;
      case 'tel': this.setState({ telVal: e.target.value }); break;
      case 'addr': this.setState({ addrVal: e.target.value }); break;
      default: console.log('错误'); break;
    }
  }

  handelClick() {
    const { userVal, telVal, addrVal } = this.state;
  }

  handleChild(v, n) {
    if (v.length !== 0) {
      console.log(v, n);
      const area = {
        area: n[0],
        areaCode: v[0],
        city: n[1],
        cityCode: v[1],
        province: n[2],
        provinceCode: v[2],
      };
      this.setState({
        area,
      });
    } else {
      
    }
  }

  render() {
    const { userVal, telVal, addrVal } = this.state;
    return (
      <div className="address-addedit-wrap">
        <NavBar title="添加收货地址" icon="" />
        <p>
          <input
            type="text"
            onChange={this.handelChange.bind(this, 'user')}
            defaultValue={userVal}
            placeholder="收货人姓名"
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="收货人联系方式"
            onChange={this.handelChange.bind(this, 'tel')}
            defaultValue={telVal}
          />
        </p>
        <Picker handleChild={this.handleChild.bind(this)} />
        <p>
          <input
            type="text"
            placeholder="收货人详细地址"
            onChange={this.handelChange.bind(this, 'addr')}
            defaultValue={addrVal}
          />
        </p>
        <div className="address-add" onClick={this.handelClick.bind(this)}> 新增收货地址 </div>
      </div>
    );
  }
}
export default AddAddress;
