import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd-mobile';
import PhoneInput from '@h5components/PhoneInput';
import NumberInput from '@h5components/NumberInput';
import Avatar from '@h5components/Avatar';
import '../h5c.less';
import './index.less';
import logo from '@static/media/favicon.ico';
import apis from '@apis';

const LoginPanel = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneError: false,
      codeError: false,
      phoneValue: '',
      codeValue: '',
      guiderVisible: false,
    };
  }

  onPhoneChange = (phoneValue) => {
    console.log('onPhoneChange phoneValue: ', phoneValue);
  }

  onCodeChange = (codeValue) => {
    console.log('onCodeChange codeValue: ', codeValue);
  }

  showCodeGuider = () => {
    this.setState({
      guiderVisible: true,
    });
  }

  hideCodeGuider = () => {
    this.setState({
      guiderVisible: false,
    });
  }

  onSubmit = async () => {
    this.setState({
      loading: true,
    });
    const loginedObj = await apis.login({
      phoneValue: 15026946018,
      codeValue: 123456,
    });
    console.log('loginedObj: ', loginedObj);

    if (loginedObj.status === 0) {
      localStorage.setItem('mobile', 15026946018);
      localStorage.setItem('token', loginedObj.meowToken);
      this.setState({
        loading: false,
      });
      this.props.history.push('/main');
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="login-container">
        <div className="updown-space">
          <Avatar size={80} src={logo} />
        </div>
        <div className="updown-space title">
          <div>快成团推广项目</div>
          <div>管理系统</div>
        </div>
        <div className="updown-space">
          <PhoneInput onChange={this.onPhoneChange} />
        </div>
        <div className="white-f">*需要与登录快成团小程序的手机号码一致</div>
        <div className="updown-space">
          <NumberInput placeholder="请输入6位校验码" label="校验码" onChange={this.onCodeChange} />
        </div>
        <div className="white-f">
          *校验码获取方式？
          <span onClick={this.showCodeGuider} style={{ textDecoration: 'underline' }}>戳 点此查看</span>
        </div>
        <div className="updown-space">
          <Button type="primary" onClick={this.onSubmit} loading={loading}>登录</Button>
        </div>
      </div>
    );
  }
};

export default withRouter(LoginPanel);
