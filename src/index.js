import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import store from './redux/store'

const dbState=store()

ReactDOM.render(
  <Provider store={dbState}>
    <App />
  </Provider>
  , document.getElementById('root'));


