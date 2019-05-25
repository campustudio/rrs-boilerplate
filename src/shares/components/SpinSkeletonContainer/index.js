import React, { Component } from 'react';
import { Spin, Skeleton } from 'antd';

export const SpinSkeletonContainer = class extends Component {
  render() {
    const {
      dataSrc,
      children,
      rows,
      title = false,
      height,
    } = this.props;

    return (
      <div style={{ height }}>
        <Spin spinning={!dataSrc}>
          {
            dataSrc
              ? (
                children
              ) : (
                <Skeleton active paragraph={{ rows }} title={title} />
              )
          }
        </Spin>
      </div>
    );
  }
};

export default SpinSkeletonContainer;
