import React from 'react';
import SearchBar from 'antd-mobile/lib/search-bar'; // 加载 JS
import 'antd-mobile/lib/search-bar/style/css'; // 加载 CSS

class SearchBarExample extends React.Component {
  state = {
    value: '',
  };

  onChange= (value) => {
    this.setState({ value });
  };

  clear = () => {
    this.setState({ value: '' });
    console.log('清除');
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <SearchBar
          value={value}
          placeholder="发现您喜欢的商品"
          cancelText="搜索"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log(value, 'onCancel')}
          showCancelButton
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default SearchBarExample;
