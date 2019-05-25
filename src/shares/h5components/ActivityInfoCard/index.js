import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { WingBlank, WhiteSpace } from 'antd-mobile';

const ActivityInfoCard = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { size = 'lg', children } = this.props;

    return (
      <WingBlank size={size}>
        <WhiteSpace size={size} />
        {children}
        <WhiteSpace size={size} />
      </WingBlank>
    );
  }
};

export default withRouter(ActivityInfoCard);
