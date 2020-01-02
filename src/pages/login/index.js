
import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Header from '../../components/header'
import Bottom from '../../components/bottom'
import './index.css'

import { login, settoken } from '../../redux/action/index'

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
      var token = uuid();
      var session = window.sessionStorage;
      this.props.logindispatch(this.state.userinfo)
      this.props.settoken(token)
      session.setItem('userinfo', JSON.stringify(this.state.userinfo))
      session.setItem('token', token);
      // 跳转页面
      if(this.props.location.state){
        this.props.history.push(this.props.location.state.from)
      }else{
        this.props.history.push('/admin')
      }
    } else {
      console.log('稍等!')
    }
  }
}
// 生成token
function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    logindispatch: (userinfo) => { dispatch(login(userinfo)) },
    settoken: (token) => { dispatch(settoken(token)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));