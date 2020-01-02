import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.css'



class Header extends Component {
  constructor(props) {
    super(props);
    this.exit = this.exit.bind(this)
  }
  render() {
    let userlogin;
    if (this.props.loginstatus) {
      userlogin = (
        <div style={{ color: '#fff' }}>
          <span>{this.props.username},欢迎您!</span>
          <span onClick={this.exit}>退出</span>
        </div>
      )
    } else {

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


  exit() {
    var session = window.sessionStorage;
    session.clear();
    window.location.reload()
  }
}
function mapStateToProps(state) {
  if (state.userinfo.username.length !== 0) {
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