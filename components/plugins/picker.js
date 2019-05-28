import React from 'react';
import Picker from 'antd-mobile/lib/picker'; // 加载 JS
import 'antd-mobile/lib/picker/style/css'; // 加载 CSS
import arrayTreeFilter from 'array-tree-filter';
import {
  createForm,
} from 'rc-form';
import area from '../../utils/area';
import './picker.less';

const CustomChildren = ({ onClick, children, extra }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: '#fff' }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', alignItems: 'center', borderBottomWidth: '1px', borderBottomColor: '#ccc', borderBottomStyle: 'solid' }}>
      <div style={{ flex: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{children}</div>
      <div style={{ flex: 7, textAlign: 'right', color: '#888', marginRight: 15 }}>{extra}</div>
    </div>
  </div>
);


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pickerValue: [],
    };
  }

  getSel(v) {
    const value = v;
    const { handleChild } = this.props;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(area, (c, level) => c.value === value[level]);
    const newArr = treeChildren.map(v => v.label).join(',');
    if (v[0] === '') {
      this.setState({
        pickerValue: ['请选择'],
        data: newArr,
      });
      handleChild([], []);
    } else {
      this.setState({
        pickerValue: v,
        data: newArr,
      });
      handleChild(v, newArr);
    }
  }

  handleOn(v) {
    if (v[0] === '') {
      this.setState({
        pickerValue: ['请选择'],
      });
    } else {
      this.setState({
        pickerValue: v,
      });
    }
  }

  render() {
    const { pickerValue } = this.state;
    return (
      <Picker
        title="选择地区"
        data={area}
        value={pickerValue}
        onChange={this.getSel.bind(this)}
        onOk={this.handleOn.bind(this)}
      >
        <CustomChildren>选择地址</CustomChildren>
      </Picker>
    );
  }
}
const TestWrapper = createForm()(Test);
export default TestWrapper;
