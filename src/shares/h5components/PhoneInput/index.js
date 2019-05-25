import React, { Component } from 'react';
import { InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

class PhoneInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneError: false,
      phoneValue: '',
    };
  }

  onPhoneErrorClick = () => {
    const { phoneError } = this.state;

    if (phoneError) {
      Toast.info('请输入11位数字号码');
    }
  }

  onPhoneChange = (phoneValue) => {
    if (phoneValue.replace(/\s/g, '').length < 11) {
      this.setState({
        phoneError: true,
      });
    } else {
      this.setState({
        phoneError: false,
      });
      const { onChange = () => {} } = this.props;
      onChange(phoneValue);
    }
    this.setState({
      phoneValue,
    });
  }

  render() {
    const { phoneError, phoneValue } = this.state;

    return (
      <div>
        <InputItem
          type="phone"
          placeholder="请输入11位手机号码"
          error={phoneError}
          onErrorClick={this.onPhoneErrorClick}
          onChange={this.onPhoneChange}
          value={phoneValue}
        >
          手机号码
        </InputItem>
      </div>
    );
  }
}

export default createForm()(PhoneInput);
