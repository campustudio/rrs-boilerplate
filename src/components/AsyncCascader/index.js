import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import CascaderPlate from './CascaderPlate';
import convertor from './convertor';

export default class AsyncCascader extends Component {
  static propTypes = {
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'add',
  }

  constructor(props) {
    super(props);
    this.state = {
      options: null,
      address: null,
    };
    this.targetOption = null;
  }

  componentDidMount = async () => {
    const { type } = this.props;
    const tempOptions = await this.getOptions();
    const newOptions = convertor.formatKeys(tempOptions);

    if (type === 'edit') {
      const newAddress = await this.getAddress();
      this.setState({
        address: newAddress,
      });
      newOptions.forEach((ele) => {
        if (ele.value === newAddress[0]) {
          this.targetOption = ele;
        }
      });
      console.log('newOptions: ', newOptions);
      if (this.targetOption) {
        // this.targetOption.loading = true;
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          const resData = convertor.formatLeafKeys([{
            label: `${this.targetOption.label}city001`,
            value: `${this.targetOption.value}001`,
          }, {
            label: `${this.targetOption.label}city002`,
            value: `${this.targetOption.value}002`,
          }]);

          // this.targetOption.loading = false;
          this.targetOption.children = resData;
        } catch (err) {
          message.error(err.toString());
          return err;
        }
        console.log('this.targetOption1: ', this.targetOption);
      }
    }
    console.log('this.targetOption2: ', this.targetOption);

    this.setState({
      options: newOptions,
    });
  }

  getOptions = async () => {
    const tempOptions = [{
      value: '000',
      label: 'Zhejiang',
      isLeaf: false,
    }, {
      value: '111',
      label: 'Jiangsu',
      isLeaf: false,
    }];
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    return tempOptions;
  }

  getAddress = async () => {
    const newAddress = ['111', '111001'];
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    return newAddress;
  }

  onLoad = async (targetOption) => {
    console.log('onLoad targetOption: ', targetOption);
    const { options } = this.state;
    targetOption.loading = true;

    // load options lazily
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const resData = convertor.formatLeafKeys([{
        label: `${targetOption.label}city001`,
        value: `${targetOption.value}001`,
      }, {
        label: `${targetOption.label}city002`,
        value: `${targetOption.value}002`,
      }]);
      targetOption.loading = false;
      targetOption.children = resData;

      this.setState({
        options
      });

      return res;
    } catch (err) {
      message.error(err.toString());
      return err;
    }
  }

  onCascaderChange = ({ value }) => {
    console.log('onCascaderChange value: ', value);
    this.setState({
      address: value,
    });
  }

  render() {
    const { options, address } = this.state;
    const { fieldNames } = this.props;

    return (
      <div>
        {  
          options
          && (
            <CascaderPlate fieldNames={fieldNames} matchOption={this.targetOption} value={address} options={options} asyncLoad={this.onLoad} onCascaderChange={this.onCascaderChange} />
          )
        }
      </div>
    );
  }
}

