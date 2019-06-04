import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './goodsDetail.less';
import { SwiperComponent } from '../../../components/plugins/swiper';
import MarkLayer from '../../../components/markLayer/markLayer';
import sw1 from '../../../static/image/detail/sw1.jpg';
import sw2 from '../../../static/image/detail/sw2.jpg';
import sw3 from '../../../static/image/detail/sw3.jpg';
import sw4 from '../../../static/image/detail/sw4.jpg';
import d1 from '../../../static/image/detail/d1.jpeg';
import d2 from '../../../static/image/detail/d2.jpeg';
import d3 from '../../../static/image/detail/d3.jpeg';
import d4 from '../../../static/image/detail/d4.jpeg';
import d5 from '../../../static/image/detail/d5.jpeg';
import d6 from '../../../static/image/detail/d6.jpeg';
import d7 from '../../../static/image/detail/d7.jpeg';
import d8 from '../../../static/image/detail/d8.jpeg';
import d9 from '../../../static/image/detail/d9.jpeg';
import d10 from '../../../static/image/detail/d10.jpeg';
import d11 from '../../../static/image/detail/d11.jpeg';
import d12 from '../../../static/image/detail/d12.jpeg';
import d13 from '../../../static/image/detail/d13.jpeg';
import d14 from '../../../static/image/detail/d14.jpeg';
import d15 from '../../../static/image/detail/d15.jpeg';
import d16 from '../../../static/image/detail/d16.jpeg';


class goodsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '"未选择任何商品"',
      imgUrl: [],
      imgSrc: '',
      detail: {},
      active: false,
      default: 0,
      defaultOne: 0,
      defaultTwo: 0,
      defaultIndex: 0,
      checkGoods: '',
      checkId: [0, 0],
      stock: 0,
    };
  }

  componentWillMount() {
    this.isUnmount = true;
    this.init();
  }

  componentDidMount() {
    SwiperComponent('.swiper-container-banner', '.swiper-pagination', false);
  }

  componentWillUnmount() {
    this.isUnmount = false;
  }

  onRef = (ref) => {
    this.child = ref;
  }

  childHandleClose() {
    this.setState({
      active: false,
    });
  }

  async init() {
    const { history } = this.props;
    const id = String(history.location.search).split('=')[1];
    console.log(String(history.location.search).split('=')[1]);
    const _ = await fetch(`http://localhost:3000/api/baby/listone?id=${id}`, {
      mode: 'cors',
      cache: 'default',
    }).then(response => response.json());
    const { goodsInfo } = _.data;
    const checkDate = [];
    for (let i = 0; i < goodsInfo.title.length; i++) {
      checkDate[i] = (goodsInfo.info[goodsInfo.title[i]])[0];
    }
    this.isUnmount
      ? this.setState({
        detail: _.data,
        imgUrl: _.data.imgUrl.split(','),
        imgSrc: (_.data.goodsInfo.info['图片'])[0],
        checkGoods: checkDate.join(','),
        stock: (goodsInfo.stock[0])[0],
      })
      : '';
  }

  handleClick() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  childHandleOne(index, it) {
    const { detail, checkGoods, stock, checkId } = this.state;
    const { goodsInfo } = detail;
    const img = detail.goodsInfo.info['图片'];
    const check = checkGoods.split(',');
    checkId[0] = index;
    this.setState({
      defaultOne: index,
      imgSrc: img[index],
      checkGoods: check.join(','),
      stock: (goodsInfo.stock[checkId[0]])[checkId[1]],
    });
  }

  childHandleTwo(index, it) {
    const { detail, checkGoods, checkId } = this.state;
    const { goodsInfo } = detail;
    const check = checkGoods.split(',');
    check[1] = it;
    checkId[1] = index;
    this.setState({
      defaultTwo: index,
      checkGoods: check.join(','),
      stock: (goodsInfo.stock[checkId[0]])[checkId[1]],
    });
  }

  childHandleIndex(index, it) {
    const { detail, checkGoods, checkId } = this.state;
    const check = checkGoods.split(',');
    const { goodsInfo } = detail;
    check[0] = it;
    checkId[0] = index;
    this.setState({
      defaultIndex: index,
      stock: goodsInfo.stock[checkId[0]],
    });
  }

  childHandleAddCart(count) {

  }

  childHandleGoBuy(count) {
    const { checkGoods, detail } = this.state;
    const { history } = this.props;
    const goodsInfo = {
      checkGoods,
      thumbnailUrl: detail.thumbnailUrl,
      num: count,
      price: detail.price,
      name: detail.name,
    };
    sessionStorage.setItem('goodsInfo', JSON.stringify(goodsInfo));
  }

  render() {
    const { imgUrl, detail, active, defaultOne, defaultTwo, defaultIndex, imgSrc, checkGoods, stock } = this.state;
    return (
      <div className="detail-wrap">
        <MarkLayer
          active={active}
          onRef={this.onRef}
          childHandleClose={this.childHandleClose.bind(this)}
          childHandleOne={this.childHandleOne.bind(this)}
          childHandleTwo={this.childHandleTwo.bind(this)}
          detailData={detail.goodsInfo}
          defaultOne={defaultOne}
          defaultTwo={defaultTwo}
          imgSrc={imgSrc}
          price={detail.price}
          data={checkGoods}
          defaultIndex={defaultIndex}
          stock={stock}
          childHandleAddCart={this.childHandleAddCart.bind(this)}
          childHandleGoBuy={this.childHandleGoBuy.bind(this)}
          type="detail"
        />
        {/* 轮播图 */}
        <aside className="swiper-container swiper-container-banner">
          <ul className="swiper-wrapper swiper-img-detail">
            {
              imgUrl.map((it) => {
                return (
                  <li className="swiper-slide" key={Math.random()}>
                    <img src={it} alt="" />
                  </li>
                );
              })
            }
          </ul>
          <div className="swiper-pagination" />
        </aside>
        {/* <div className="sale-scene-area onsale">
          <img className="scene-icon" src="http://h0.hucdn.com/open201915/61538a1101becc26_183x45.png" alt="" />
          <div className="panic-buy-time-box">
            <span className="panic-buy-time-txt">距结束仅剩</span>
            <div className="panic-buy-time">
              <span className="time">08</span>
              <span className="dot">:</span>
              <span className="time">12</span>
              <span className="dot">:</span>
              <span className="time">59.9</span>
            </div>
          </div>
        </div> */}
        <div className="detail-sale-wrap">
          <div className="sale-price-wrap">
            <div className="sale-price-con">
              <p className="sale-price">¥{detail.price}</p>
              <p className="sale-origin">¥{detail.linePrice}</p>
            </div>
            <div className="sale-progress-wrap">{detail.person}人已团</div>
          </div>
          <div className="sale-title-wrap">
            <div className="sale-title">
              <h3 data-sync="" data-sync-title=""> {detail.name} </h3>
            </div>
          </div>
        </div>
        <div className="promotion-wrap">
          <div className="label">服务</div>
          <div className="info">全场包邮· 平台保价· 正品保证· 24小时发货</div>
        </div>
        <div className="sku-wrap" onClick={this.handleClick.bind(this)}>
          <div className="sku">
            <span className="J_skuText">已选 "{ checkGoods }"</span>
            <i />
          </div>
        </div>
        <div className="detail-area">
          <div className="title-container">
            <span className="title">图文详情</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: detail.detail }} />
        </div>
        <footer>
          <div className="btn-container">
            <div className="go-home go">
              <Link to="/home">
                <svg className="icon" width="22px" height="22px" viewBox="0 0 1024 1024" version="1.1">
                  <path fill="#333333" d="M940.8512 409.31328 518.77888 99.18464c-4.58752-3.3792-9.95328-4.89472-15.23712-4.75136-5.28384-0.14336-10.67008 1.37216-15.23712 4.75136L66.21184 409.31328c-10.91584 8.02816-13.23008 23.32672-5.18144 34.18112 8.04864 10.87488 23.42912 13.16864 34.34496 5.16096l58.04032-42.63936 0 442.44992c0 33.03424 27.11552 64.86016 65.16736 64.86016l177.19296 0c0 0 4.99712 0.16384 10.73152-2.62144 2.64192-1.20832 5.36576-2.99008 7.61856-5.59104 6.22592-6.61504 6.22592-15.54432 6.22592-15.54432l0-164.9664c0 0-1.76128-28.30336 27.7504-28.30336l89.41568 0c15.31904 0 27.7504 11.93984 27.7504 26.68544l0 167.85408c0 0-0.12288 8.0896 7.00416 15.42144 6.08256 6.94272 17.24416 7.0656 17.24416 7.0656l200.704 0c38.05184 0 65.16736-31.82592 65.16736-64.86016L855.38816 407.2448l56.34048 41.39008c10.91584 8.02816 26.29632 5.71392 34.34496-5.16096C954.08128 432.61952 951.76704 417.32096 940.8512 409.31328L940.8512 409.31328M807.34208 827.24864c0 16.11776-5.98016 37.13024-40.93952 37.13024l-152.02304 0 0-153.68192c0-34.38592-34.67264-62.19776-63.11936-62.19776l-116.98176 0c-28.44672 0-63.11936 27.81184-63.11936 62.19776l0 153.68192-128.79872 0c-34.97984 0-40.93952-21.01248-40.93952-37.13024l0.36864-456.8064L503.54176 148.74624l303.43168 222.94528L807.34208 827.24864 807.34208 827.24864M807.34208 827.24864" />
                </svg>
                <p>首页</p>
              </Link>
            </div>

            <div className="go-cart go">
              <Link to="/home">
                <svg className="icon" width="22px" height="22px" viewBox="0 0 1024 1024" version="1.1">
                  <path fill="#333333" d="M860.397898 715.100698l-513.658779 0c-2.804882 0-7.589862-3.997034-8.222265-9.335622l-49.822732-350.723873-27.975145-161.320129c-6.300496-51.511187-51.683103-91.877547-103.307877-91.877547l-56.874335 0c-10.876722 0-19.674085 8.797363-19.674085 19.674085 0 10.875698 8.80248 19.674085 19.674085 19.674085l56.874335 0c32.085766 0 60.329017 25.190729 64.403822 58.295708l28.011984 161.682379 49.66719 349.70466c2.883677 24.035416 24.077372 43.574425 47.246047 43.574425l513.658779 0c10.872628 0 19.674085-8.797363 19.674085-19.674085C880.073007 723.902154 871.270527 715.100698 860.397898 715.100698L860.397898 715.100698zM860.397898 715.100698M925.820933 203.003484c-8.41567-9.530051-19.50217-14.564717-32.029484-14.564717L363.284957 188.438767c-10.876722 0-19.674085 8.80248-19.674085 19.674085 0 10.876722 8.797363 19.674085 19.674085 19.674085l530.506493 0c0.960885 0 1.458211 0.062422 2.533706 1.2689 2.632967 2.977821 4.979408 9.993608 4.26821 16.063861l-52.857858 302.786071c-0.788969 6.321986-7.840572 12.126178-16.121166 12.219299l-410.863578 30.30112c-10.835789 0.788969-18.984377 10.223852-18.174941 21.057595 0.748037 10.354835 9.393951 18.23327 19.596314 18.23327 0.480954 0 0.981351-0.016373 1.461281-0.058328l409.537374-30.241768c26.861788-0.152473 50.417273-20.672832 53.468772-45.728484L939.517887 250.846118C941.634084 233.302557 936.36815 214.951607 925.820933 203.003484L925.820933 203.003484zM925.820933 203.003484M796.019659 815.722396c-29.286 0-53.108568 23.827685-53.108568 53.104475 0 29.264511 23.838941 53.088102 53.108568 53.088102 29.248138 0 53.078893-23.826662 53.078893-53.088102C849.099574 839.550081 825.281099 815.722396 796.019659 815.722396L796.019659 815.722396zM796.019659 815.722396M379.569852 815.722396c-29.281907 0-53.108568 23.827685-53.108568 53.104475 0 29.264511 23.838941 53.088102 53.108568 53.088102 29.248138 0 53.082986-23.826662 53.082986-53.088102C432.653861 839.550081 408.831292 815.722396 379.569852 815.722396L379.569852 815.722396zM379.569852 815.722396" />
                </svg>
                <p>购物车</p>
              </Link>
            </div>

            <div className="add-cart auto-btn">
            加入购物车
            </div>

            <div className="buy-single auto-btn">
            立即购买
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default withRouter(goodsDetail);
