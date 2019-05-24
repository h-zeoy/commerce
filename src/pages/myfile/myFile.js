import React from 'react';
import { getCookie } from 'utils/cookie';
import MyFileUI from './myFileUI';

class myFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
  }

  componentWillMount() {
    // request.setRequestHeader("token", "xxxx");
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
          <MyFileUI
            edit={edit}
            list={list}
          />
        )

    );
  }
}

export default myFile;
