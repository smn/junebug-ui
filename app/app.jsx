import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import { bindActionCreators } from 'redux';
import makeStore from './store';

import { ConnectBox } from './components/connect';
import { ChannelListContainer } from './components/channels';


export const store = makeStore();

class App extends React.Component {
  render() {
    return this.props.children;
  }
}

window.store = store;

const routes = <Route component={App}>
  <Route path="/channels" component={ChannelListContainer} />
  <Route path="/" component={ConnectBox} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
