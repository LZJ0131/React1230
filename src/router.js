import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from './App'
import Home from './pages/home';
import Login from './pages/login';

import Admin from './admin'

class BasicRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin'>
              <Switch>
                <Admin>
                  <Route path='/admin/home' exact component={Home}></Route>
                </Admin>
              </Switch>
            </Route>
            <Redirect to='/login'></Redirect>
          </Switch>
        </App>
      </Router>
    );
  }
}

export default BasicRoute;  