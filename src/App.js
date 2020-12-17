import React from 'react';
import { connect } from "react-redux"
import actions from './store/actions/counter'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        number: 0
    };
  }

  alertText() {
    console.log(123);
  }

  componentWillReceiveProps(nextProps, nextContext) {
      //alert(nextProps.number)
  }

    render() {
    return (
        <div className="App">
          <button onClick={this.alertText}>
              App11111111111111
          </button>
          <p>{this.state.number}{this.props.number}</p>
          <button onClick={() => this.props.increment(110)}>+</button>
        </div>
    );
  }
}

// 连接store
export default connect(
    state => state.counter,  //=> {number: 0}
    actions
)(App);
