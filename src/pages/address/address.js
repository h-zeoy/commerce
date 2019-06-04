import React, { Component } from 'react';
import { getCookie } from 'utils/cookie';
// import axios from 'axios';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS
import './address.less';
import NavBar from 'components/plugins/navbar';
import Picker from '../../../components/plugins/picker';
import SwitchExample from '../../../components/plugins/switch';
import axios from '../../api/axios';

class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userVal: '',
      telVal: '',
      addrVal: '',
      area: [],
      checked: false,
      defaultVal: [],
      isDeit: false,
      addr: 0,
    };
  }

  componentWillMount() {
    const { history } = this.props;
    const { pathname } = history.location;
    if (/(edit)/.test(pathname)) {
      const addr = JSON.parse(sessionStorage.getItem('seleAddr'));
      this.setState({
        addr,
        userVal: addr.realName,
        telVal: addr.phone,
        addrVal: addr.street,
        defaultVal: [addr.provinceCode, addr.cityCode, addr.areaCode],
        isDeit: true,
        checked: addr.isDefault,
        area: {
          area: addr.area,
          areaCode: addr.areaCode,
          city: addr.city,
          cityCode: addr.cityCode,
          province: addr.province,
          provinceCode: addr.provinceCode,
        },
      });
    }
  }

  handelChange(str, e) {
    switch (str) {
      case 'user': this.setState({ userVal: e.target.value }); break;
      case 'tel': this.setState({ telVal: e.target.value }); break;
      case 'addr': this.setState({ addrVal: e.target.value }); break;
      default: console.log('错误'); break;
    }
  }

  async handelClick(str) {
    const { userVal, telVal, addrVal, area, checked, isDeit, addr } = this.state;
    const { history } = this.props;
    let flag = true;
    // 收货人验证
    if (userVal === '') {
      console.log(24234);
      flag = false;
    }
    // 手机号验证
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(telVal)) {
      console.log(24234);
      flag = false;
    }
    if (area.length === 0) {
      console.log(24234);
      flag = false;
    }
    // 不少于5位 不多余50
    if (addrVal.length < 5) {
      console.log(24234);
      flag = false;
    }
    if (flag) {
      const info = {
        'phone': telVal,
        'realName': userVal,
        'street': addrVal,
        'isDefault': checked,
      };
      this.setState({
        area: Object.assign(area, info),
      }, async () => {
        if (str === 'add') {
          const result = (await axios.post('http://localhost:3000/api/address/add', area)).data;
          if (result.success) {
            sessionStorage.setItem('address', JSON.stringify(area));
            Toast.info(result.data.msg, 1);
            setTimeout(() => {
              history.goBack();
            }, 1000);
          } else {
            Toast.info('地址添加失败，请与客服联系', 1);
          }
        } else {
          area.id = addr.id;
          const result = (await axios.post('http://localhost:3000/api/address/update', area)).data;
          if (result.success) {
            Toast.info(result.data.msg, 1);
            sessionStorage.setItem('seleAddr', JSON.stringify(area));
            setTimeout(() => {
              history.goBack();
            }, 1000);
          } else {
            Toast.info('地址修改失败，请与客服联系', 1);
          }
        }
      });
    } else {
      Toast.info('信息格式不正确，请查看', 1);
    }
  }

  handleSwitch(checked) {
    this.setState({
      checked,
    });
  }

  handleChild(v, n) {
    if (v.length !== 0) {
      const areaName = n.split(',');
      const area = {
        'area': areaName[2],
        'areaCode': v[2],
        'city': areaName[1],
        'cityCode': v[1],
        'province': areaName[0],
        'provinceCode': v[0],
      };
      this.setState({
        area,
      });
      document.getElementById('pickMsg').style.display = 'none';
    } else {
      document.getElementById('pickMsg').style.display = 'block';
    }
  }

  render() {
    const { userVal, telVal, addrVal, defaultVal, isDeit, checked } = this.state;
    return (
      <div className="address-addedit-wrap">
        <NavBar title="添加收货地址" icon="" />
        <ul>
          <li>
            <input
              type="text"
              onBlur={(e) => {
                userVal === ''
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              onChange={this.handelChange.bind(this, 'user')}
              defaultValue={userVal}
              placeholder="收货人姓名"
            />
            <p id="Msg" className="input_error Msg"><i />请您输入正确收货人名称</p>
          </li>
          <li>
            <input
              type="text"
              onBlur={(e) => {
                !/^[1][3,4,5,7,8][0-9]{9}$/.test(telVal)
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              maxLength="11"
              placeholder="收货人联系方式"
              onChange={this.handelChange.bind(this, 'tel')}
              defaultValue={telVal}
            />
            <p id="Msg" className="input_error Msg"><i />请您输入正确的手机号</p>
          </li>
          <li>
            <Picker handleChild={this.handleChild.bind(this)} defaultVal={defaultVal} />
            <p id="pickMsg" className="input_error Msg"><i />请您选择地址</p>
          </li>
          <li>
            <input
              type="text"
              onBlur={(e) => {
                addrVal.length < 5
                  ? e.target.parentElement.lastChild.style.display = 'block'
                  : e.target.parentElement.lastChild.style.display = 'none';
              }}
              placeholder="收货人详细地址"
              onChange={this.handelChange.bind(this, 'addr')}
              defaultValue={addrVal}
            />
            <p id="Msg" className="input_error Msg"><i />地址详情不能少于5位</p>
          </li>
          <SwitchExample handleSwitch={this.handleSwitch.bind(this)} checked={checked} />
        </ul>
        {
          !isDeit
            ? <div className="address-add" onClick={this.handelClick.bind(this, 'add')}> 新增收货地址 </div>
            : <div className="address-add" onClick={this.handelClick.bind(this, 'edit')}> 保存 </div>
        }

      </div>
    );
  }
}
export default AddAddress;
