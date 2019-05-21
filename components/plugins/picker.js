import React from 'react';
import Picker from 'antd-mobile/lib/picker'; // 加载 JS
import 'antd-mobile/lib/picker/style/css'; // 加载 CSS
import {
  createForm,
} from 'rc-form';
import area from '../../utils/area';
import './picker.less';

const CustomChildren = ({ onClick, children, extra }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15, paddingRight: 15 }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', alignItems: 'center', borderBottomWidth: '1px', borderBottomColor: '#ccc', borderBottomStyle: 'solid' }}>
      <div style={{ flex: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{children}</div>
      <div style={{ flex: 7, textAlign: 'right', color: '#888', marginRight: 15 }}>{extra}</div>
    </div>
  </div>
);

class Test extends React.Component {
  state = {
    data: [],
    pickerValue: [],
  };

  render() {
    const { pickerValue } = this.state;
    return (
      <Picker
        title="选择地区"
        data={area}
        value={pickerValue}
        onChange={v => this.setState({ pickerValue: v })}
        onOk={v => this.setState({ pickerValue: v })}
      >
        <CustomChildren>选择地址</CustomChildren>
      </Picker>
    );
  }
}

const TestWrapper = createForm()(Test);
export default TestWrapper;
