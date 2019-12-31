import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Home from './pages/home';
import Login from './pages/login';


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
            <Route path='/'>
              <Switch>
                <Route path='/ui/home' exact component={Home}></Route>
                <Redirect to='/ui/home'></Redirect>
              </Switch>
            </Route>

          </Switch>
        </App>
      </Router>

    );
  }
}

export default BasicRoute;  