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
      value: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { listData } = this.props;
    if (nextProps.listData !== listData) {
      this.setState({
        data: [...nextProps.listData],
      });
    }
  }

  handleClickList(item) {
    const { history } = this.props;
    console.log(history);
    history.push({
      pathname: '/goods/detail',
      search: `?id=${item.goodsId}`,
    });
    console.log('list父组件的', item.goodsId);
  }

  handleClickEdit(item) {
    const { handleEdit } = this.props;
    handleEdit(item);
    console.log('list父组件的', item.id);
  }

  handleChildDelete(item) {
    const { handleDelete } = this.props;
    handleDelete(item);
  }

  handleAddressList(item) {
    const { handleClick } = this.props;
    handleClick(item);
  }

  render() {
    const { data } = this.state;
    const { type, handleInput, edit, defaultIndex } = this.props;
    if (type === 'big' || type === 'order') {
      return (
        <div className="list-item1-wrap">
          {
            data.map((item) => {
              return (
                <ComponentItem
                  item={item}
                  type={type}
                  key={Math.random()}
                  handlList={this.handleClickList.bind(this)}
                />
              );
            })
          }
        </div>
      );
    } else if (type === 'orderlist') {
      return (
        <div className="order-list-wrap">
          {
            data.map((item) => {
              return (
                <ComponentItem
                  item={item}
                  type={type}
                  key={Math.random()}
                  handlList={this.handleClickList.bind(this)}
                />
              );
            })
          }
        </div>
      );
    } else if (type === 'brand' || type === 'hot') {
      return (
        <div className="brand-list-wrap">
          {
            data.map((item) => {
              return (
                <ComponentItem
                  item={item}
                  type={type}
                  key={Math.random()}
                  // handlList={this.handleClickList.bind(this)}
                />
              );
            })
          }
        </div>
      );
    } else if (type === 'address') {
      return (
        <div className="list-item1-wrap address-wrap margin">
          {
            data.map((item) => {
              return (
                <ComponentItem
                  item={item}
                  type={type}
                  key={Math.random()}
                  handlList={this.handleClickList.bind(this)}
                  handleChildEdit={this.handleClickEdit.bind(this)}
                  handleChildDelete={this.handleChildDelete.bind(this)}
                  handleAddressList={this.handleAddressList.bind(this)}
                />
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
                <ComponentItem item={item} type={type} key={Math.random()} handleInput={handleInput} />
              );
            })
          }
        </div>
      );
    } else if (type === 'orderDetail') {
      console.log(data);
      return (
        <div className="pay-list-wrap">
          {
            data.map((item) => {
              return (
                <div>
                  <ComponentItem item={item} type={type} key={Math.random()} />
                  <div className="order-remark order-detail-re">
                    <p><label>买家留言</label>留言</p>
                  </div>
                  <div className="order-sum">
                    <div> <span className="u-sum-left">小计:</span> <span className="order-sum-price">￥{item.price}</span> </div>
                  </div>
                </div>
              );
            })
          }

        </div>
      );
    } else if (type === 'small') {
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
