import React, { Component } from 'react';
import './goodsEdit.less';
// import { ImagePicker } from 'antd-mobile';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import ImagePicker from './ImagePicker'; // 加载 JS

const tabs = [
  { title: '商品信息' },
  { title: '商品详情' },
];

class goodsEdit extends Component {
  render() {
    return (
      <div className="dataGoods">
        <Tabs
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <ul className="goods-info-wrap">
            <li><label>商品名称</label><input type="text" /></li>
            <li>
              <label>商品类型</label>
              <p>
                <input name="type" type="radio" />童装
                <input name="type" type="radio" />母婴
                <input name="type" type="radio" />居家
                <input name="type" type="radio" />美食
                <input name="type" type="radio" />女装
                <input name="type" type="radio" />鞋包
                <input name="type" type="radio" />美妆
                <input name="type" type="radio" />进口
              </p>
            </li>
            <li><label>商品价格</label><input type="text" /></li>
            <li><label>商品原价格</label><input type="text" /></li>
            <li><label>商品上架时间</label><input type="text" /></li>
            <li><label>商品下架时间</label><input type="text" /></li>
            <li><label>缩略图</label><ImagePicker /></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <input type="text" />
          </div>
        </Tabs>
      </div>
    );
  }
}
export default goodsEdit;
