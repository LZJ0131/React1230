
/**
 * 管理员端页面配置
 * 2019-12-31 14:27
 * lizijia
 */
import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import Header from './components/header'

import { login } from './redux/action/index'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <Header></Header>
        <div className='admin-container' style={{paddingTop:'70px'}}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }

  componentDidMount(){
    var session=window.sessionStorage;
    var userinfo=JSON.parse(session.getItem('userinfo'));
    if(userinfo){
      this.props.logindispatch(userinfo)
    }else{
      this.props.history.push('/login')
    }
  }
  
}
function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logindispatch: (userinfo) => { dispatch(login(userinfo)) }
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Admin));