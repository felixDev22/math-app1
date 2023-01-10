/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
import React from 'react';

import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <header className='Cal-header'>
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
