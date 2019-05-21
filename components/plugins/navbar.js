import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'; // 加载 JS
import 'antd-mobile/lib/nav-bar/style/css'; // 加载 CSS
import Icon from 'antd-mobile/lib/icon'; // 加载 JS
import 'antd-mobile/lib/icon/style/css'; // 加载 CSS

class NavBarExample extends React.Component {
  handleClick() {
    const { navHandleClick } = this.props;
    navHandleClick();
  }

  render() {
    const { title, icon } = this.props;
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.back(-1)}
        rightContent={[
          <p key="0" onClick={this.handleClick.bind(this)}>{ icon }</p>,
        ]}
      >{title}
      </NavBar>
    );
  }
}
export default NavBarExample;
