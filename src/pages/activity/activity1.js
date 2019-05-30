import React from 'react';
import { Link } from 'react-router-dom';
import ComponentList from 'components/componentList/componentList';
import bg from '../../../static/image/banner/act1.jpg';

import './activity1.less';


class ActivityOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [{
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/6514/d-635fe4b0-1f6a-4a42-a7ab-217f1468fedc-400x400.jpg',
        title: '飞鹤 星飞帆婴儿配方奶粉1段 700g',
        price: '368.00',
      },
      {
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/6511/d-48ebedc8-932f-4029-b61a-cc5a87fdef06-400x400.jpg',
        title: '飞鹤 星飞帆较大婴儿配方奶粉2段 700g',
        price: '261.80',
        linePrice: '308.00',
      },
      {
        title: '飞鹤 星飞帆较大婴儿配方奶粉3段 700g',
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/6496/d-2f227d40-7182-41fe-b00a-3e6b4bfeb90f-400x400.jpg',
        price: '261.80',
        linePrice: '308.00',
      },
      {
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/44631/d-1-400x400.jpg',
        title: '飞鹤智纯臻稚婴儿配方奶粉1段300g桶',
        price: '198.00',
      },
      {
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/44633/d-1-400x400.jpg',
        title: '飞鹤智纯臻稚婴儿配方奶粉1段700g桶',
        price: '408.00',
      },
      {
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/44646/d-1-400x400.jpg',
        title: '飞鹤智纯臻稚较大婴儿配方奶粉2段300g桶',
        price: '159.80',
        linePrice: '188.00',
      },
      {
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/44646/d-1-400x400.jpg',
        title: '飞鹤智纯臻稚较大婴儿配方奶粉2段700g桶',
        price: '321.30',
        linePrice: '378.00',
      },
      {
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/44647/d-1-400x400.jpg',
        title: '飞鹤智纯臻稚幼儿配方奶粉3段700g桶',
        price: '304.30',
        linePrice: '358.00',
      },
      {
        thumbnailUrl: 'http://ljmall-1258518961.file.myqcloud.com/product-image/product/44645/d-02-400x400.jpg',
        title: '飞鹤星蕴孕产妇奶粉700g桶',
        price: '288.00',
      }],
    };
  }

  componentWillMount() {
  }

  render() {
    const { edit, list, loading } = this.state;
    return (
      <div className="activity-one-wrap">
        <div>
          <img src={bg} alt="" />
        </div>
        <p className="activity-img-a-1"><Link to="/goods/detail" /></p>
        <p className="activity-img-a-2"><Link to="/goods/detail" /></p>
        <p className="activity-img-a-3"><Link to="/goods/detail" /></p>
        <ComponentList listData={list} type="small" />
      </div>
    );
  }
}

export default ActivityOne;
