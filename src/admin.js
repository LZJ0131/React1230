
/**
 * 管理员端页面配置
 * 2019-12-31 14:27
 * lizijia
 */
import React, { Component, Fragment } from 'react';

import Header from './components/header'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <Header></Header>
        <div className='admin-container'>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Admin;