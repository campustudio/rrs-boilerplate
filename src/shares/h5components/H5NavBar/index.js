import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

const H5NavBar = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  backToMain = () => {
    const { backPath = '/main' } = this.props;
    this.props.history.push(backPath);
  }

  render() {
    const { text = 'NavBar' } = this.props;

    return (
      <NavBar
        mode="dark"
        leftContent={<Icon onClick={this.backToMain} type="left" />}
        style={{ position: 'fixed', width: '100%', zIndex: 99 }}
      >
        {text}
      </NavBar>
    );
  }
};

export default withRouter(H5NavBar);
