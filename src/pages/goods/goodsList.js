import React, { Component } from 'react';
import SearchBarExample from 'components/plugins/search';
import ComponentList from 'components/componentList/componentList';
import './goodsList.less';

class goodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: { default: 1, list: [{ index: 1, title: '最新' }, { index: 2, title: '销量' }, { index: 3, title: '价格' }] },
      defaultIndex: 1,
      data: [{ thumbnailUrl: 'https://b1.hucdn.com/upload/item/1905/20/35935191790000_800x800.jpg!320x320.webp',
        name: '巴布豆超柔亲肤纸尿裤S68/M60/L52/XL44片*2包',
        info: '灰色, 无纺布, 2个装【1横款+1竖款】',
        price: '99',
        linePrice: '209',
      },
      {
        thumbnailUrl: 'https://b1.hucdn.com/upload/item/1905/20/35935191790000_800x800.jpg!320x320.webp',
        name: '巴布豆超柔亲肤纸尿裤 S68/M60/L52/XL44片',
        price: '59',
        linePrice: '75',
      }],
    };
  }

  handleClick(item) {
    this.setState({
      defaultIndex: item.index,
    });
  }

  render() {
    const { nav, defaultIndex, data } = this.state;
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
        <ComponentList type="small" listData={data} />
      </div>
    );
  }
}
export default goodsList;
