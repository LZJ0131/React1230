import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import './index.css'

class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='layout-righttop'>
        <ul className='layout-righttop-left'>
          <li>教师管理</li>
          <li><Link to='/login'>教师管理</Link></li>
        </ul>
      </div>
    );
  }
}

export default BreadCrumb;