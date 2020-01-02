import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import App from './App'
import Admin from './admin'
import Login from './pages/login';
import NotFound from './notFound'
import { AdminPages } from './routerMap'


class BasicRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let token = this.props.token
    return (
      <Router>
        <App>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin' exact>
              <Switch>
                {AdminPages.map((item, index) => {
                  return <Route key={index} path={item.path} exact render={props =>
                    (!item.auth ? (<Admin><item.component {...props} /></Admin>) : (token ? <Admin> <item.component {...props} /> </Admin> : <Redirect to={{
                      pathname: '/login',
                      state: { from: props.location.pathname }
                    }} />)
                    )} />
                })}
                <Route component={NotFound} />
              </Switch>
            </Route>
            <Route render={() => (
              token ? <Route component={NotFound} /> : <Redirect to='/login'/>
            )}>
            </Route>
          </Switch>
        </App>
      </Router>
    );
  }
}

// 从redux获取token
function MapStateToProps(state) {
  return {
    token: state.token
  }
}


export default connect(MapStateToProps)(BasicRoute);  