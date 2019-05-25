import React, { Component } from 'react';
import { connect } from 'react-redux';
import InvitedUserCard from '@h5components/InvitedUserCard';
import H5NavBar from '@h5components/H5NavBar';
import '../screen.less';

export default class InvitedUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <H5NavBar />
        <div className="content-container">
          <InvitedUserCard />
          <InvitedUserCard />
          <InvitedUserCard />
          <InvitedUserCard />
          <InvitedUserCard />
          <InvitedUserCard />
          <InvitedUserCard />
          <InvitedUserCard />
        </div>
      </div>
    );
  }
}
