import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux'
import './App.css';
// import { login } from './redux/action';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.reg = this.reg.bind(this)
  }
  // reg() {
  //   console.log(11)
  //   this.props.login()
  // }

  render() {
    // const { show } = this.props
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }

}

// function mapStateToProps(state) {
//   return {
//     show: state.login_status
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return ({
//     login: () => { dispatch(login('lziijia1')) }
//   })
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;