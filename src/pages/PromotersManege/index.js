import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardEntry from '@h5components/CardEntry';
import './index.less';
import '../pages.less';

export default class PromotersManege extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="content">
        <ul>
          <CardEntry content="项目推广人管理" path="/main/promoters" />
          <CardEntry content="活动配置" path="/main/promoters" />
          <CardEntry content="模块3" path="/main/promoters" />
          <CardEntry content="模块4" path="/main/promoters" />
          <CardEntry content="模块5" path="/main/promoters" />
          <CardEntry content="模块6" path="/main/promoters" />
        </ul>
      </div>
    );
  }
}
