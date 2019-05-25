import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.less';
import Home from '@pages/Home';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';
import NotFound from '@components/NotFound';

export default class Main extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <div className="page-container">
          <div className="left-panel" />
          <Sidebar />
          <div className="right-panel">
            <Switch>
              <Route exact path="/main" component={Home} />
              <Route exact path="/main/user/:id" component={Home} />
              <Route exact path="/main/user-add" component={Home} />
              <Route exact path="/main/user-edit/:id" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
