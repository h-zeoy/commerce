import React from 'react';
import { withRouter } from 'react-router-dom';
import { getCookie } from 'utils/cookie';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import MyFileUI from './myFileUI';
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS

class myFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
  }

  componentWillMount() {
    const { history } = this.props;
    console.log();
    if (getCookie('X-Root-Auth-Token')) {
      this.setState({
        loading: false,
      });
    } else {
      this.setState({
        loading: true,
      });
      Toast.info('请登陆', 1);
      const timer = setTimeout(() => {
        clearTimeout(timer);
        history.push('/login');
      }, 1000);
    }
  }

  render() {
    const { edit, list, loading } = this.state;
    return (
      loading
        ? ''
        : (
          <MyFileUI
            edit={edit}
            list={list}
          />
        )

    );
  }
}

export default withRouter(myFile);
