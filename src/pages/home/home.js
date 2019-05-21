import React, { Component } from 'react';
import { SwiperComponent } from '../../../components/plugins/swiper';
import ComponentNav from '../../../components/componentNav/componentNav';
import ComponentList from '../../../components/componentList/componentList';
import Tabbar from '../../../components/componentTabbar/componentTabbar';
import navdata from '../../../utils/navData';
import banner1 from '../../../static/image/banner/banner1.jpg';
import banner2 from '../../../static/image/banner/banner2.jpg';
import banner3 from '../../../static/image/banner/banner3.jpg';
import banner4 from '../../../static/image/banner/banner4.jpg';
import h1 from '../../../static/image/home/h1.png';
import h2 from '../../../static/image/home/h2.png';
import h3 from '../../../static/image/home/h3.png';

import './home.less';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: [banner1, banner2, banner3, banner4],
      navIndex: 1,
      listData: [],
    };
    // this.goList = this.goList.bind(this);
  }

  componentWillMount() {
    this.isUnmount = true;
    this.getTodaySale();
  }

  componentDidMount() {
    SwiperComponent('.swiper-container-banner', '.swiper-pagination', true);
  }

  componentWillUnmount() {
    this.isUnmount = false;
  }

  async getTodaySale() {
    const _ = await fetch('http://localhost:3000/api/baby/todaysale?channel=今日特卖&type=', {
      mode: 'cors',
      cache: 'default',
    }).then(response => response.json());
    this.isUnmount
      ? this.setState({ listData: [..._.data] })
      : '';
  }

  async homeNavClick(item) {
    const type = item.title !== '今日特卖' ? item.title : '';
    const _ = await fetch(`http://localhost:3000/api/baby/todaysale?channel=今日特卖&type=${type}`, {
      mode: 'cors',
      cache: 'default',
    }).then(response => response.json());
    this.isUnmount
      ? this.setState({ listData: [..._.data] })
      : '';
    this.setState({
      navIndex: item.index,
    });
    console.log('父组件的', item.title);
  }

  goList(num) {
    if (num === 1) {
      console.log('新品特惠');
    } else if (num === 2) {
      console.log('限时抢购');
    } else {
      console.log('9.9包邮');
    }
  }

  render() {
    const { imgUrl, listData } = this.state;
    return (
      <div className="wrap">
        <aside className="swiper-container swiper-container-banner">
          <ul className="swiper-wrapper">
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
        <ul className="jieshao">
          <li onClick={this.goList.bind(this, 2)}><img src={h1} alt="限时抢购" /></li>
          <li onClick={this.goList.bind(this, 1)}><img src={h2} alt="9.9包邮" /></li>
          <li onClick={this.goList.bind(this, 3)}><img src={h3} alt="新品特惠" /></li>
        </ul>
        <ComponentNav navData={navdata} comNav={this.homeNavClick.bind(this)} />
        <p className="home-list-header"> 每日新品 </p>
        <ComponentList listData={listData} type="big" />
        <p className="bian">暂无数据</p>
        <Tabbar />
      </div>

    );
  }
}
export default Home;
