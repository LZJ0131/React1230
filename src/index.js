import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './router';

import store from './redux/store'

const dbState=store()

ReactDOM.render(
  <Provider store={dbState}>
    <BasicRoute />
  </Provider>
  , document.getElementById('root'));


