import React, { Component } from 'react';

import './index.css'

class LeftAside extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <aside className='layout-left'>
        <ul>
          <li className='active'>基本数据</li>
        </ul>
      </aside>
    );
  }
}

export default LeftAside;