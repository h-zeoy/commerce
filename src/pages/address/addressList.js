import React, {
  Component,
} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from 'utils/cookie';
import NavBar from 'components/plugins/navbar';
import ComponentList from 'components/componentList/componentList';
import './addressList.less';


class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [{
        name: '郝新亚',
        phone: '178****8206',
        address: '天津天津市河东区dsaddsfsdf',
        default: true,
      },
      {
        name: '郝新亚',
        phone: '178****8206',
        address: '天津天津市河东区dsaddsfsdf',
        default: true,
      },
      {
        name: '郝新亚',
        phone: '178****8206',
        address: '天津天津市河东区dsaddsfsdf',
        default: true,
      },
      {
        name: '郝新亚',
        phone: '178****8206',
        address: '天津天津市河东区dsaddsfsdf',
        default: true,
      },
      {
        name: '郝新亚',
        phone: '178****8206',
        address: '天津天津市河东区dsaddsfsdf',
        default: true,
      },
      {
        name: '郝新亚',
        phone: '178****8206',
        address: '天津天津市河东区dsaddsfsdf',
        default: true,
      }],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentWillMount() {
    axios.get('api/address/list', {
      headers: {
        'X-Access-Token': getCookie('X-Root-Auth-Token'),
      },
    }).then((result) => {
      console.log(result);
    });
    // axios.get('api/address/list', {
    //   headers: {
    //     'X-Access-Token': getCookie('X-Root-Auth-Token'),
    //   },
    // }).then((result) => {
    //   console.log(result);
    // });
  }

  onRef = (ref) => {
    this.child = ref;
  }

  navHandleClick() {
    console.log('父组件!');
  }

  handleClick() {
    console.log('新增收货地址');
  }

  render() {
    const {
      listData,
    } = this.state;
    return (
      <div className="address-wrap">
        <NavBar
          onRef={
        this.onRef
      }
          navHandleClick={
        this.navHandleClick
      }
          title="收货地址"
          icon="新增"
        />
        <ComponentList
          listData={
        listData
      }
          type="address"
        />
        <footer onClick={
        this.handleClick
      }
        > <Link to="/address">新增收货地址</Link>
        </footer>
      </div>
    );
  }
}
export default Address;
