import React from 'react';
import {Route, IndexRoute} from 'react-router';
import NavComponent from './nav.component';
import IndexContainer from './index.container';
import ContactContainer from './contact.container';

export default (
  <Route name="pages">
    <IndexRoute component={IndexContainer}></IndexRoute>
    <Route path="/contact" component={ContactContainer}></Route>
  </Route>
);
