import React from 'react';
import Tabs from 'antd-mobile/lib/tabs'; // 加载 JS
import 'antd-mobile/lib/tabs/style/css'; // 加载 CSS
import ComponentList from '../componentList/componentList';

class TabExample extends React.Component {
  constructor(props) {
    super(props);
    const { tabData } = this.props;
    this.state = {
      defaultIndex: tabData.default,
    };
  }

  componentDidMount() {
    const { listData } = this.props;
    console.log(listData);
  }

  handleTabClick(tab, index) {
    const { tabDefault } = this.props;
    this.setState({
      defaultIndex: index,
    }, () => {
      tabDefault(index);
    });
  }

  render() {
    const { tabData, listData } = this.props;
    const { defaultIndex } = this.state;
    return (
      <div>
        <Tabs
          tabs={tabData.list}
          initialPage={defaultIndex}
          animated={false}
          useOnPan={false}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={this.handleTabClick.bind(this)}
        >
          {
            tabData.list.map((item, index) => {
              return (
                index === defaultIndex ? (
                  <div key={Math.random()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <ComponentList listData={listData} type="big" />
                  </div>
                ) : ''
              );
            })
          }
        </Tabs>
      </div>
    );
  }
}
export default TabExample;
