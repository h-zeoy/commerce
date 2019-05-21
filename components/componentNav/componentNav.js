import React, { Component } from 'react';
import { SwiperSlide } from '../plugins/swiper';
import './componentNav.less';

class ComponentNav extends Component {
  constructor(props) {
    super(props);
    const { navData } = this.props;
    this.state = {
      data: navData.navData,
      indexDefult: navData.navData.default,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    SwiperSlide('.swiper-container-slide');
  }

  componentWillReceiveProps(nextProps) {
    const { navData } = this.props;
    if (nextProps.navData.navData !== navData.navData) {
      this.setState({
        data: nextProps.navData.navData,
      });
    }
  }

  handleClick(item) {
    const { comNav } = this.props;
    this.setState({
      indexDefult: item.index,
    });
    comNav(item);
  }

  render() {
    const { data, indexDefult } = this.state;
    return (
      <div className="component-nav-wrap">
        <nav className="swiper-container swiper-container-slide">
          <ul className="swiper-wrapper">
            {
              data.list.map((item) => {
                return (
                  <li className="swiper-slide swiper-slide-tab" key={item.index} onClick={this.handleClick.bind(this, item)}>
                    <em>{item.title}
                      {item.index === indexDefult ? <p className="activeBore" /> : '' }
                    </em>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </div>
    );
  }
}
export default ComponentNav;
