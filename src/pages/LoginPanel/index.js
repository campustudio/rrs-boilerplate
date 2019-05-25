import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '@h5components/Login';

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
