import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import './index.css'

import { Breadcrumb } from 'antd';

class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Breadcrumb className='layout-righttop'>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadCrumb;