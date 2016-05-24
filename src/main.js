import React from 'react';
import ReactDom from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import {AppContainer, Routes as appRoutes} from './app/features/App';
import {Routes as jobRoutes} from './app/features/Jobs';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      {appRoutes}
      {jobRoutes}
    </Route>
  </Router>
);

ReactDom.render(router, document.getElementById('app'));
