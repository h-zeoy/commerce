import React from 'react';
import './markLayer.less';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css'; // 加载 CSS


class MarkLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOne: 0,
      defaultTwo: 0,
      defaultIndex: 0,
      data: '',
      imgSrc: '',
      count: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { defaultOne, defaultIndex } = this.state;
    this.mark(nextProps.active);
    this.setState({
      defaultOne: nextProps.defaultOne,
      defaultTwo: nextProps.defaultTwo,
      defaultIndex: nextProps.defaultIndex,
      imgSrc: nextProps.imgSrc,
      data: nextProps.data,
      stock: nextProps.stock,
    });
    if (defaultOne !== nextProps.defaultOne) {

    }

    if (defaultIndex !== nextProps.defaultIndex) {

    }
  }

  handleClose() {
    const { childHandleClose } = this.props;
    childHandleClose();
  }

  handleOne(index, it) {
    const { childHandleOne } = this.props;
    console.log(it);
    childHandleOne(index, it);
  }

  handleTwo(index, it) {
    const { childHandleTwo } = this.props;
    childHandleTwo(index, it);
  }

  handleIndex(index, it) {
    const { childHandleIndex } = this.props;
    childHandleIndex(index, it);
  }

  handleDecrease() {
    const { count } = this.state;
    if (count !== 1) {
      this.setState((prevState, props) => ({
        count: prevState.count - 1,
      }));
    }
  }

  handleAdd() {
    const { count } = this.state;
    if (count !== 20) {
      this.setState((prevState, props) => ({
        count: prevState.count + 1,
      }));
    }
  }

  handleAddCart() {
    const { childHandleAddCart } = this.props;
    const { count } = this.state;
    childHandleAddCart(count);
  }

  handleGoBuy() {
    const { childHandleGoBuy } = this.props;
    const { count } = this.state;
    childHandleGoBuy(count);
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
    const { detailData, price, type } = this.props;
    const { defaultIndex, data, defaultOne, defaultTwo, imgSrc, stock, count } = this.state;
    return (
      <div className="mark-layer-wrap">
        <div className="sku-prop">
          <i className="icon-closed iconfont" onClick={this.handleClose.bind(this)} />
          <div className="sku-container">
            <div className="prop-header">
              <img src={imgSrc} id="img" alt="产品图片" />
              <div className="infos">
                <p className="price">¥<strong>{price}</strong>
                  <span id="sku-earn-price" />
                </p>
                {
                  data !== ''
                    ? (
                      <div>
                        <p className="text" id="markText"> 已选 "<em>{data}</em>"</p>
                        <p className="text" id="markText"> 库存 "<em>{stock}</em> </p>
                      </div>
                    )
                    : ''
                }

              </div>
            </div>
            <div className="scroll-container">
              {
                detailData && detailData.title.length > 1
                  ? (
                    <div className="J_scroll" key={Math.random()}>
                      <div className="prop-mainer">
                        <h3 className="J_prop-name">{detailData.title[0]}</h3>
                        <ul className="J_sku-list">
                          {
                            detailData && detailData.info[detailData.title[0]].map((it, index) => {
                              return (
                                <li onClick={this.handleOne.bind(this, index, it)} className={defaultOne === index ? 'sku-item active' : 'sku-item'} key={Math.random()}>{it}</li>
                              );
                            })
                          }

                        </ul>
                      </div>
                      <div className="prop-mainer">
                        <h3 className="J_prop-name">{detailData.title[1]}</h3>
                        <ul className="J_sku-list">
                          {
                            detailData && detailData.info[detailData.title[1]].map((it, index) => {
                              return (
                                <li onClick={this.handleTwo.bind(this, index, it)} className={defaultTwo === index ? 'sku-item active' : 'sku-item'} key={Math.random()}>{it}</li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  )
                  : detailData && detailData.title.length > 1
                    ? (
                      <div className="J_scroll" key={Math.random()}>
                        <div className="prop-mainer">
                          <h3 className="J_prop-name">{detailData.title[0]}</h3>
                          <ul className="J_sku-list">
                            {
                              detailData && detailData.info[detailData.title[0]].map((it, index) => {
                                return (
                                  <li onClick={this.handleIndex.bind(this, index, it)} className={defaultIndex === index ? 'sku-item active' : 'sku-item'} key={Math.random()}>{it}</li>
                                );
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    ) : ''
              }
              <div className="amount-box">
                <p className="amount-label">购买数量</p>
                <p className="ui-amount">
                  <span className="J_amount-minus" onClick={this.handleDecrease.bind(this)}>－</span><em>{count}</em><span className="J_amount-plus" onClick={this.handleAdd.bind(this)}>＋</span>
                </p>
              </div>
            </div>
          </div>
          {
            String(stock) === '0'
              ? (
                <div className="prop-footer">
                  <p className="active">加入购物车</p>
                  <p className="active">立即购买</p>
                </div>
              )
              : (
                <div className="prop-footer">
                  <p onClick={this.handleAddCart.bind(this)}>加入购物车</p>
                  <p onClick={this.handleGoBuy.bind(this)}>立即购买</p>
                </div>
              )
          }

        </div>
      </div>
    );
  }
}
export default MarkLayer;
