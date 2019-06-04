import React from 'react';
import Result from 'antd-mobile/lib/result'; // 加载 JS
import 'antd-mobile/lib/result/style/css'; // 加载 CSS
import Icon from 'antd-mobile/lib/icon'; // 加载 JS
import 'antd-mobile/lib/icon/style/css'; // 加载 CSS
import './result.less';

class ResultExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: 0,
      state: 0,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    console.log(history);
    const orderId = history.location.state[0];
    const status = history.location.state[1];
    this.setState({
      orderId,
      status,
    });
  }

  goOrderDetail() {
    const { history } = this.props;
    const { orderId } = this.state;
    history.push({
      pathname: '/order/detail',
      search: `?order=${orderId}`,
    });
  }

  render() {
    const { status } = this.state;
    if (status === 0) {
      return (
        <div className="result-example">
          <Result
            img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6' }} />}
            title="支付成功"
          />
          <p onClick={this.goOrderDetail.bind(this)} className="goOrder">查看订单</p>
        </div>
      );
    } else if (status === 2) {
      return (
        <div className="result-example">
          <Result
            img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
            title="支付失败"
            message="余额不足"
          />
          <p onClick={this.goOrderDetail.bind(this)} className="goOrder">查看订单</p>
        </div>
      );
    } else {
      return (
        <div className="result-example">
          <Result
            img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
            title="取消支付"
            message="支付已取消"
          />
          <p onClick={this.goOrderDetail.bind(this)} className="goOrder">查看订单</p>
        </div>
      );
    }
  }
}

export default ResultExample;
