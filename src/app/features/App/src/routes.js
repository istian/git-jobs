import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppContainer from './app.container';
import IndexContainer from './index.container';
import ContactContainer from './contact.container';

export default (
  <Route name="app" path="/" component={AppContainer}>
    <IndexRoute component={IndexContainer}></IndexRoute>
    <Route path="/contact" component={ContactContainer}></Route>
  </Route>
);
