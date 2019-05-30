import React from 'react';
import { Link } from 'react-router-dom';
import './activity2.less';
import act2 from '../../../static/image/banner/act2.jpg';
import act22 from '../../../static/image/banner/act2-2.jpg';

class ActivityTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
  }

  componentWillMount() {
  }

  render() {
    const { edit, list, loading } = this.state;
    return (
      <div className="activity-two-wrap">
        <img className="collection-promotion-image" src={act22} alt="" />
        <img src={act2} alt="" />
        <p className="activity-img-a2-1"><Link to="/goods/detail" /></p>
        <p className="activity-img-a2-2"><Link to="/goods/detail" /></p>
        <p className="activity-img-a2-3"><Link to="/goods/detail" /></p>
        <p className="activity-img-a2-4"><Link to="/goods/detail" /></p>
      </div>
    );
  }
}

export default ActivityTwo;
