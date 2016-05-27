import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

export default applyMiddleware(reduxThunk)(createStore);
