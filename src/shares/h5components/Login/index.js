import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd-mobile';
import PhoneInput from '@h5components/PhoneInput';
import NumberInput from '@h5components/NumberInput';

const LoginPanel = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneError: false,
      codeError: false,
      phoneValue: '',
      codeValue: '',
    };
  }

  onPhoneChange = (phoneValue) => {
    console.log('onPhoneChange phoneValue: ', phoneValue);
  }

  onCodeChange = (codeValue) => {
    console.log('onCodeChange codeValue: ', codeValue);
  }

  onSubmit = () => {
    this.props.history.push('/main');
  }

  render() {
    return (
      <div>
        Avatar
        <div>
          <div>快成团推广项目</div>
          <div>管理系统</div>
        </div>
        <PhoneInput onChange={this.onPhoneChange} />
        <NumberInput placeholder="请输入6位校验码" label="校验码" onChange={this.onCodeChange} />
        <Button type="primary" onClick={this.onSubmit}>登录</Button>
      </div>
    );
  }
};

export default withRouter(LoginPanel);
