import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import store, { history } from './store';
import Home from './screens/Home';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div>
              <BrowserRouter basename="/rspa/auth">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/authlist" component={Home} />
                  <Route exact path="/authdetail/:id" component={Home} />
                  <Route exact path="/authadd" component={Home} />
                  <Route exact path="/authedit/:id" component={Home} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
