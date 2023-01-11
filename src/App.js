import React from 'react';

import CalculatorUI from './components/calculator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="cal-section">
          <CalculatorUI />
        </header>
      </div>
    );
  }
}

export default App;
