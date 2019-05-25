import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '@h5components/Header';
import AccordionPanel from '../AccordionPanel';
import '../screen.less';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <AccordionPanel />
        </div>
      </div>
    );
  }
}
