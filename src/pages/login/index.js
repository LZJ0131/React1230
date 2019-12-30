import React, { Component } from 'react';
import './index.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='loginwrap'>
        <div className='loginbox'>
          <h4>登录</h4>
        </div>
      </div>
    );
  }
}

export default Login;