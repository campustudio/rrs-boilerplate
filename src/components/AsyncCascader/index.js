import React, { Component } from 'react';
import { Cascader } from 'antd';

export default class AsyncCascader extends Component {
  onChange = (value, selectedOptions) => {
    const { onCascaderChange } = this.props;
    if (onCascaderChange) {
      onCascaderChange({
        value,
        selectedOptions,
      });
    }
  }

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];

    const { asyncLoad } = this.props;
    if (asyncLoad) {
      asyncLoad(targetOption);
    }
  }

  render() {
    const { options, value } = this.props;

    return (
      <Cascader
        options={options}
        value={value}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
        style={{ width: 300 }}
      />
    );
  }
}
