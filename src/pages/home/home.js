import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SwiperComponent } from '../../../components/plugins/swiper';
import ComponentNav from '../../../components/componentNav/componentNav';
import ComponentList from '../../../components/componentList/componentList';
import Tabbar from '../../../components/componentTabbar/componentTabbar';
import navdata from '../../../utils/navData';
import banner1 from '../../../static/image/banner/banner5.jpg';
import banner2 from '../../../static/image/banner/banner2.jpg';
import banner3 from '../../../static/image/banner/banner3.jpg';
import banner4 from '../../../static/image/banner/banner4.jpg';
import h1 from '../../../static/image/home/h1.png';
import h2 from '../../../static/image/home/h2.png';
import h3 from '../../../static/image/home/h3.png';

import './home.less';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const _ = await axios.get('api/baby/todaysale', { params: {
      channel: '今日特卖',
      type: '',
    } });
    this.isUnmount
      ? this.setState({ listData: [..._.data.data] })
      : '';
  }

  async homeNavClick(item) {
    const type = item.title !== '今日特卖' ? item.title : '';
    const _ = await axios.get('api/baby/todaysale', { params: {
      channel: '今日特卖',
      type,
    } });
    this.setState({
      navIndex: item.index,
    });
    this.isUnmount
      ? this.setState({ listData: [..._.data.data] })
      : '';
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
    const { listData } = this.state;
    return (
      <div className="wrap">
        <aside className="swiper-container swiper-container-banner">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <Link to="/activity/one"><img src={banner1} alt="" /></Link>
            </li>
            <li className="swiper-slide">
              <img src={banner2} alt="" />
            </li>
            <li className="swiper-slide">
              <Link to="/activity/two"><img src={banner3} alt="" /></Link>
            </li>
            <li className="swiper-slide">
              <img src={banner4} alt="" />
            </li>
          </ul>
          <div className="swiper-pagination" />
        </aside>
        <ul className="jieshao">
          <li onClick={this.goList.bind(this, 2)}><img src={h1} alt="限时抢购" /></li>
          <li onClick={this.goList.bind(this, 1)}><img src={h2} alt="9.9包邮" /></li>
          <li onClick={this.goList.bind(this, 3)}><img src={h3} alt="新品特惠" /></li>
        </ul>
        <ComponentNav navData={navdata} comNav={this.homeNavClick.bind(this)} />
        <p className="home-list-header"> 每日特卖 </p>
        <ComponentList listData={listData} type="big" />
        <Tabbar />
      </div>

    );
  }
}
export default Home;
