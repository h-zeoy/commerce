import React from 'react';
import { withRouter } from 'react-router-dom';
import './componentList.less';
import ComponentItem from '../componentItem/componentItem';


class CompomemtList extends React.Component {
  constructor(props) {
    super(props);
    const { listData } = this.props;
    this.state = {
      data: listData,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { listData } = this.props;
    const { data } = this.state;
    if (nextProps.listData !== listData) {
      this.setState({
        data: [...nextProps.listData],
      });
    }
  }

  async handleClickList(item) {
    const { history } = this.props;
    console.log(history);
    history.push({
      pathname: '/goodsDetail',
      search: `?id=${item.goodsId}`,
    });
    console.log('list父组件的', item.goodsId);
  }

  render() {
    const { data } = this.state;
    const { type } = this.props;
    if (type === 'big' || type === 'order' || type === 'address') {
      return (
        <div className="list-item1-wrap">
          {
            data.map((item) => {
              return (
                <ComponentItem item={item} type={type} key={Math.random()} handlList={this.handleClickList.bind(this)} />
              );
            })
          }
        </div>
      );
    } else if (type === 'pay') {
      return (
        <div className="pay-list-wrap">
          {
            data.map((item) => {
              return (
                <ComponentItem item={item} type={type} key={Math.random()} />
              );
            })
          }
          <div className="order-remark">
            <input
              defaultValue=""
              type="text"
              placeholder="买家留言（选填）"
            />
          </div>
          <div className="order-sum">
            <div> <span className="u-sum-left">小计:</span> <span className="order-sum-price">¥13.1</span> </div>
          </div>
        </div>
      );
    } else if (type === 'orderDetail') {
      return (
        <div className="pay-list-wrap">
          {
            data.map((item) => {
              return (
                <ComponentItem item={item} type={type} key={Math.random()} />
              );
            })
          }
          <div className="order-remark order-detail-re">
            <p><label>买家留言</label>留言</p>
          </div>
          <div className="order-sum">
            <div> <span className="u-sum-left">小计:</span> <span className="order-sum-price">¥13.1</span> </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="list-item2-wrap">
          {
            data.map((item) => {
              return (
                <ComponentItem item={item} type={type} key={Math.random()} />
              );
            })
          }
        </div>
      );
    }
  }
}
export default withRouter(CompomemtList);
