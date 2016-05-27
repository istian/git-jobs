import React from 'react';
import ReactDom from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import routerConfig from './config/router';

ReactDom.render(routerConfig, document.getElementById('app'));
