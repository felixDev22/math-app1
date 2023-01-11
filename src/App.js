import React from 'react';
import './App.css';
import CalculatorUI from './components/Calculator';

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
