import React, { Component } from 'react';
import { Card } from 'antd';

export const BasicCard = class extends Component {
  render() {
    const { title = '标题', children, subTitle = '' } = this.props;

    return (
      <Card
        title={<span>{title}<span style={{ fontSize: 12 }}>{subTitle}</span></span>}
        bordered={false}
        style={{ margin: '20px 0px' }}
      >
        {children}
      </Card>
    );
  }
};

export default BasicCard;
