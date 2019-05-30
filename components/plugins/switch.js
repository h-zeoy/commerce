import React from 'react';
import List from 'antd-mobile/lib/list'; // 加载 JS
import 'antd-mobile/lib/list/style/css'; // 加载 CSS
import Switch from 'antd-mobile/lib/switch'; // 加载 JS
import 'antd-mobile/lib/switch/style/css'; // 加载 CSS
import { createForm } from 'rc-form';

class SwitchExample extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.checked);
    this.state = {
      checked: props.checked,
    };
  }

  handleClick(checked) {
    const { handleSwitch } = this.props;
    this.setState({ checked });
    handleSwitch(checked);
  }

  render() {
    const { checked } = this.state;
    console.log(checked);
    const { form } = this.props;
    const { getFieldProps } = form;
    return (
      <List>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch7', {
              initialValue: checked,
              valuePropName: 'checked',
            })}
            platform="ios"
            onClick={this.handleClick.bind(this)}
          />}
        >默认收货地址
        </List.Item>
      </List>
    );
  }
}

const Se = createForm()(SwitchExample);

export default Se;
