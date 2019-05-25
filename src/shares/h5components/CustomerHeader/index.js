import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import './index.less';
import logo from '@static/media/favicon.ico';
import apis from '@apis';

const CustomerHeader = class extends Component {
  logout = async () => {
    const logoutedObj = await apis.logout({
      token: localStorage.getItem('token'),
    });
    console.log('logoutedObj: ', logoutedObj);
    if (logoutedObj.status === 0) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="header header-container">
        <div>
          <img src={logo} alt="logo" style={{ width: 30, margin: '0px 10px' }} />
          <span style={{ color: '#fff' }}>车件儿</span>
        </div>
        <div>
          <span>{`账号：${localStorage.getItem('mobile') || ''}`}</span>
          <span onClick={this.logout} onKeyPress={this.logout} style={{ margin: '0px 20px', color: 'blue' }}>
            退出
          </span>
        </div>
      </div>
    );
  }
};

export default withRouter(CustomerHeader);
