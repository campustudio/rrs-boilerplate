import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';
import store, { history } from './shares/store';
import * as serviceWorker from './shares/serviceWorker';
import './index.less';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';

const rootElement = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div style={{ height: '100%' }}>
            <Header />
            <div className="page-container">
              <BrowserRouter basename="/rspa/auth">
                <div>
                  <div className="left-panel" />
                  <Sidebar />
                  <div className="right-panel">
                    <Switch>
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/authlist" component={Home} />
                      <Route exact path="/authdetail/:id" component={Home} />
                      <Route exact path="/authadd" component={Home} />
                      <Route exact path="/authedit/:id" component={Home} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </div>
              </BrowserRouter>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

render(<div className="bbgColor"><App /></div>, rootElement);

serviceWorker.unregister();
