import React from 'react';
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
    this.getCookie('X-Root-Auth-Token')
      ? this.setState({
        loading: false,
      })
      : this.setState({
        loading: true,
      });
  }

  getCookie(value) {
    const { cookie } = document;
    const arr = cookie.split(';');
    const name = `${value}=`;
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr[i].trim();
      if (newArr.indexOf(name) == 0) {
        return newArr.substring(name.length, newArr.length);
      }
    }
    return '';
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
