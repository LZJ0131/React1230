import './index.css'

import React, { Component } from 'react';



class LeftAside extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleClick = e => {
    console.log('click ', e);
  };
  render() {
    return (
      <aside className='layout-left'>
         <ul>
          <li></li>
         </ul>
      </aside>
    );
  }
}

export default LeftAside;