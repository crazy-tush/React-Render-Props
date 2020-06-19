import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Wrapper render={(count, incCount) => {
          return (
            <div>
              <Counter1 count={count} incCount={incCount} />
            </div>
          )
        }} />

        <Wrapper render={(count, incCount) => {
          return (
            <div>
              <Counter2 count={count} incCount={incCount} />
            </div>
          )
        }} />
      </div>
    );
  }
}

export default App;
