import React from 'react';
import { Link } from 'react-router-dom';
import ComponentList from 'components/componentList/componentList';
import './brandClear.less';


class hotSale extends React.Component {
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
        <div className="headBg hotBg">
          <h1 className="title">大家都在买的超值好货</h1>
          <ComponentList listData={list} type="hot" />
        </div>
      </div>
    );
  }
}

export default hotSale;
