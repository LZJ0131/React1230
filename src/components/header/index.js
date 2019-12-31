import React, { Component } from 'react';

import './index.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='layout-header'>
        <div className='layout-headerbox'>
          <div className='layout-logo'></div>
        </div>
      </div>
    );
  }
}

export default Header;