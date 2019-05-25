import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

const InvitedUserCard = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { size = 'lg' } = this.props;

    return (
      <WingBlank size={size}>
        <WhiteSpace size={size} />
        <Card>
          <Card.Header
            title={<span>{`微信昵称：${9999}`}</span>}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          />
          <Card.Footer content={`会员类型`} extra={<div>{`注册日期：${190525}`}</div>} />
        </Card>
        <WhiteSpace size={size} />
      </WingBlank>
    );
  }
};

export default withRouter(InvitedUserCard);
