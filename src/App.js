import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import Nav from './components/Navbar';
import CalculatorUI from './components/calculator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/calculator"
            element={<CalculatorUI />}
          />
          <Route
            path="/quote"
            element={<Quote />}
          />
        </Routes>
      </Router>
    );
  }
}
export default App;
