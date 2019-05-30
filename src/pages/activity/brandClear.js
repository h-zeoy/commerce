import React from 'react';
import { Link } from 'react-router-dom';
import ComponentList from 'components/componentList/componentList';
import './brandClear.less';


class ActivityTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [{
        name: '芊艺 2019流行外套女新款小香风很仙的短外套夏天小个子防晒衣宽松潮9778',
        zhekou: '4.2',
        person: 8,
        price: 65,
        linePrice: 156,
      },
      {
        name: '芊艺 2019流行外套女新款小香风很仙的短外套夏天小个子防晒衣宽松潮9778',
        zhekou: '4.2',
        person: 8,
        price: 65,
        linePrice: 156,
      }],
    };
  }

  componentWillMount() {
  }

  render() {
    const { edit, list, loading } = this.state;
    return (
      <div className="brand-clear-wrap">
        <div className="headBg">
          <h1 className="title">超值好货低价购</h1>
          <div className="first-product-wrap">
            <img className="item-img lazy" src="http://b1.hucdn.com/upload/item/1903/13/55254119635830_800x800.jpg!320x320.jpg" alt="" />
            <div className="first-product-info">
              <p className="title">南极人 纯棉枕套 单人全棉枕头枕芯套 一对装</p>
              <div className="tags_bubble">
                <span className="tag0">清仓</span>
                <span className="tag1">5.2折</span>
              </div>
              <div className="first-price-info">
                <span className="cur-price">
                  <span className="currency">¥</span><span className="price-num">35.9</span>
                </span>
                <span className="old-price">
                  <span className="currency">¥69</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <ComponentList listData={list} type="brand" />
      </div>
    );
  }
}

export default ActivityTwo;
