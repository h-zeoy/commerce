import React, {
  Component,
} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from 'utils/cookie';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS
import NavBar from 'components/plugins/navbar';
import ComponentList from 'components/componentList/componentList';
import './addressList.less';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      query: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.init();
  }

  onRef = (ref) => {
    this.child = ref;
  }

  navHandleClick(that) {
    const { history } = that.props;
    history.push('/address/add');
  }

  handleClick(item) {
    const { history } = this.props;
    sessionStorage.setItem('seleAddr', JSON.stringify(item));
    const query = ((history.location.search).split('?')[1]).split('=')[1];
    const timer = setTimeout(() => {
      clearTimeout(timer);
      history.push({
        pathname: '/pay',
        search: `?orderId=${query}`,
      });
    });
    console.log(history);
  }

  init() {
    axios.get('api/address/list', {
      headers: {
        'X-Access-Token': getCookie('X-Root-Auth-Token'),
      },
    }).then((result) => {
      const { data } = result.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].isDefault) {
          sessionStorage.setItem('address', JSON.stringify(data[i]));
          data.unshift(data[i]);
          data.splice(i + 1, 1);
        }
      }
      this.setState({
        listData: data,
      });
    });
  }

  handleEdit(item) {
    const { history } = this.props;
    sessionStorage.setItem('seleAddr', JSON.stringify(item));
    history.push({
      pathname: '/address/edit',
      search: `?id=${item.id}`,
    });
  }

  async handleDelete(item) {
    axios.get(`api/address/remove?id=${item.id}`, {
      headers: {
        'X-Access-Token': getCookie('X-Root-Auth-Token'),
      },
    }).then((result) => {
      const that = this;
      Toast.info('删除成功', 1);
      setTimeout(() => {
        that.init();
      }, 1000);
    }).catch((err) => {
      console.log(err);
      Toast.info('删除失败', 1);
    }, 1000);
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
          handleDelete={this.handleDelete.bind(this)}
          handleEdit={this.handleEdit.bind(this)}
          listData={listData}
          handleClick={this.handleClick.bind(this)}
          type="address"
        />
        <footer onClick={
        this.handleClick
      }
        > <Link to="/address/add">新增收货地址</Link>
        </footer>
      </div>
    );
  }
}
export default Address;
