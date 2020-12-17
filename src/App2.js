import React from 'react';
import './App.css';
import {connect} from "react-redux";
import actions from "./store/actions/counter";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  alertText() {
    console.log(123);
  }

  render() {
    return (
        <div className="App">
          <button onClick={this.alertText}>
            App2222222222222222222
              <p>{this.state.number}{this.props.number}</p>
              <button onClick={() => this.props.increment(110)}>+</button>
          </button>
        </div>
    );
  }
}

// 连接store
export default connect(
    state => state.counter,  //=> {number: 0}
    actions
)(App2);
