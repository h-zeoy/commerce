import React from 'react';
import './markLayer.less';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS
import './payMark.less';
import axios from 'axios';

class MarkLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillReceiveProps(nextProps) {
    this.mark(nextProps.active);
    this.setState({

    });
  }

  handlePassPay() {
    const { handlePassPay } = this.props;
    handlePassPay();
  }


  mark(show) {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    const wrap = document.getElementsByClassName('mark-layer-wrap')[0];
    if (show) {
      body.style.height = '100%';
      body.style.overflow = 'hidden';
      html.style.height = '100%';
      html.style.overflow = 'hidden';
      wrap.style.display = 'block';
    } else {
      body.style.height = 'auto';
      body.style.overflow = 'visible';
      html.style.height = 'auto';
      html.style.overflow = 'visible';
      wrap.style.display = 'none';
    }
  }

  render() {
    const { handleInputPass, value, title } = this.props;
    return (
      <div className="mark-layer-wrap">
        <div className="pay-wrap">
          <h1>{title}</h1>
          <input type="password" value={value} onChange={handleInputPass} maxLength="6" />
          <div onClick={this.handlePassPay.bind(this)}>
            <p>确定</p>
          </div>

        </div>
      </div>
    );
  }
}
export default MarkLayer;
