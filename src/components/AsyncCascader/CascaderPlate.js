import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cascader } from 'antd';

export default class CascaderPlate extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.array,
    matchOption: PropTypes.object,
  }

  static defaultProps = {
    matchOption: null,
    value: [],
  }

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
    const { options, value, matchOption, fieldNames } = this.props;
    console.log('render value: ', value);

    const basicOptions = {
      options,
      notFoundContent: '暂无数据',
      placeholder: '请选择省市',
      loadData: this.loadData,
      onChange: this.onChange,
      changeOnSelect: true,
      fieldNames,
      style: { width: 300 }
    };

    const props = options.length === 0 ? {
      ...basicOptions,
      placeholder: '暂无数据',
    } : (
      matchOption ? {
        ...basicOptions,
        value,
      } : {
        ...basicOptions,
        placeholder: '暂无匹配数据',
      }
    );

    return (
      <Cascader
        {...props}
      />
    );
  }
}
