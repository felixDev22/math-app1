import React from 'react';

import Calc from './components/Calc';
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
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
