import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { files } = this.state;
    console.log('render files: ', files);

    return (
      <div>
        Login
      </div>
    );
  }
}
