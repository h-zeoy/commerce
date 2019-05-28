import React from 'react';
import { getCookie } from 'utils/cookie';
import CartUI from './cartUI';


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      loading: true,
      list: [],
    };
  }

  componentWillMount() {
    console.log(document.cookie);
    getCookie('X-Root-Auth-Token')
      ? this.setState({
        loading: false,
      })
      : this.setState({
        loading: true,
      });
  }

  render() {
    const { edit, list, loading } = this.state;
    return (
      loading
        ? <div>登录</div>
        : (
          <CartUI
            edit={edit}
            list={list}
          />
        )

    );
  }
}

export default Cart;
