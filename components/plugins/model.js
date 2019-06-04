

import React from 'react';
import Modal from 'antd-mobile/lib/modal'; // 加载 JS
import 'antd-mobile/lib/modal/style/css'; // 加载 CSS
import Button from 'antd-mobile/lib/button'; // 加载 JS
import 'antd-mobile/lib/button/style/css'; // 加载 CSS
import WingBlank from 'antd-mobile/lib/wing-blank'; // 加载 JS
import 'antd-mobile/lib/wing-blank/style/css'; // 加载 CSS

const { alert } = Modal;

class Model extends React.Component {
  render() {
    return (
      <WingBlank size="lg">
        <Button
          onClick={() => alert('Delete', 'Are you sure???', [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') },
          ])
          }
        >
          confirm
        </Button>
      </WingBlank>
    );
  }
}
export default Model;
