import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import store, { history } from './store';
import Home from './screens/Home';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter basename="/basename">
            <Route exact path="/" component={Home} />
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}
