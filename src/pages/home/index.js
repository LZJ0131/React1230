import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.css'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { title } = this.props
    return (
      <div className='home'>
        <header className='header' id='header'>
          <div className='container-inner'>
            {title}
          </div>
        </header>

        <div className='main' id='main'>
          <ul className=''>
            <li>
              <div>
                <img alt='文章封面' src={require('../../resource/images/loginbg.jpg')} />
              </div>
              <div className=''>
                <h4>我知道了，别说你不知道</h4>
              </div>

            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps)(Home);