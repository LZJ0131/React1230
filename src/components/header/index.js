import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let userlogin;
    if(this.props.loginstatus){
      userlogin=(
        <div>{this.props.username}</div>
      )
    }else{

    }
  
    return (
      <div className='layout-header'>
        <div className='layout-headerbox'>
          <div className='layout-logo'></div>
          {userlogin}
          </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  if (state.userinfo.username.length!==0) {
    return {
      loginstatus: true,
      username: state.userinfo.username
    }
  } else {
    return {
      loginstatus: false
    }
  }

}

export default connect(mapStateToProps)(Header);