import React from 'react';
import {Router, browserHistory} from 'react-router';

const featuresDir = '../app/features';
import {Routes as appRoutes} from '../app/features/App'
import {Routes as jobsRoutes } from '../app/features/Jobs';
const routes = [appRoutes, jobsRoutes];

export default (
  <Router history={browserHistory}>
    {
      routes.map((route, index) => {
        return <div key={index}>{route}</div>
      })
    }
  </Router>
);
