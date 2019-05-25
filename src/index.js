import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';
import store, { history } from './shares/store';
import * as serviceWorker from './shares/serviceWorker';
import Home from './pages/Home';

const rootElement = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div>
              <BrowserRouter basename="/rspa/auth">
                <Switch>
                  <Route exact path="/home" component={Home} />
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

render(<App />, rootElement);

serviceWorker.unregister();
