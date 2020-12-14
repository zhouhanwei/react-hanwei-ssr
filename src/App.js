import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
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
              App11111111111111
          </button>
        </div>
    );
  }
}

export default App;
