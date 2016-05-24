import React from 'react';
import {Route, IndexRoute} from 'react-router';
import JobsContainer from './jobs.container';
import JobContainer from './job.container';

export default (
  <Route name="jobs" path="/jobs">
    <IndexRoute component={JobsContainer}></IndexRoute>
    <Route path="/jobs/:id" component={JobContainer}></Route>
  </Route>
);
