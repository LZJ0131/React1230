
import React, { Component } from 'react';

import { connect } from 'react-redux'

import Header from '../../components/header'
import Bottom from '../../components/bottom'
import './index.css'


import { login } from '../../redux/action/index'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginflag: false,
      userinfo: {
        username: '',
        password: ''
      }
    }
    this.loginsubmit = this.loginsubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }
  render() {
    return (
      <div className='loginwrap'>
        <Header></Header>
        <div className='layout-loginbox'>
          <div className='layout-title'>登录</div>
          <div className='layout-form'>
            <div className='layout-formele'>
              <input placeholder='请输入用户名' value={this.state.userinfo.username} onChange={this.handleUsername} />
            </div>
            <div className='layout-formele'>
              <input placeholder='请输入密码' type='password' value={this.state.userinfo.password} onChange={this.handlePassword} />
            </div>
            <div className='layout-formbtn'>
              <button onClick={this.loginsubmit}>登录</button>
            </div>
            <div className='layout-forget'>
              <span>找回密码</span>
            </div>
            <div className='layout-tip'>
              本平台推荐使用IE10及以上版本、火狐、谷歌、360浏览器
            </div>
          </div>
        </div>
        <Bottom></Bottom>
      </div>
    );
  }
  // 监听username
  handleUsername(event) {
    var obj = Object.assign({}, this.state.userinfo, { username: event.target.value })
    this.setState({
      userinfo: obj
    })
  }
  // 监听password
  handlePassword(event) {
    var obj = Object.assign({}, this.state.userinfo, { password: event.target.value })
    this.setState({
      userinfo: obj
    })
  }
  // 登录按钮
  loginsubmit() {
    if (!this.state.loginflag) {
      this.setState({
        loginflag: true
      })
      this.props.logindispatch(this.state.userinfo)
      this.props.history.push('/admin/home')
    } else {
      console.log('稍等!')
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

export default connect(mapStateToProps,mapDispatchToProps)(Login);