import React, { Component } from 'react';
import SearchBarExample from 'components/plugins/search';
import './goodsList.less';

class goodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: { default: 1, list: [{ index: 1, title: '最新' }, { index: 2, title: '销量' }, { index: 3, title: '价格' }] },
      defaultIndex: 1,
    };
  }

  handleClick(item) {
    this.setState({
      defaultIndex: item.index,
    });
  }

  render() {
    const { nav, defaultIndex } = this.state;
    return (
      <div>
        <SearchBarExample />
        <section className="search-item J_fix_scroll">
          <ul className="nav">
            {
              nav.list.map((item) => {
                return (
                  <li className={item.index === defaultIndex ? 'active' : null} onClick={this.handleClick.bind(this, item)}>
                    <em>{item.title}</em>
                    <i />
                  </li>
                );
              })
            }
          </ul>
        </section>
      </div>
    );
  }
}
export default goodsList;
