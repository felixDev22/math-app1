import React from 'react';

import calculate from './logic/calculate';

import './calculator.css';

class CalculatorUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }
  
  const clickHandler = (event) => {
    const { value } = event.target;
    this.setState((state) => calculate({
      total: state.total,
      next: state.next,
      operation: state.operation,
    }, value));
  }

  render() { 
    return (
      <div className="cal">
        <div className="displayArea">
          <p className="cal-input" type="text">{result || 0}</p>
        </div>
        <div className="operators">
          <ul className="rows">
            <li className="row">
              <div type="button" className="btn" onClick={clickHandler}>
                AC
              </div>
              <button type="button" className="btn" onClick={clickHandler}>
                +/-
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                %
              </button>
              <button
                type="button"
                className="btn-2"
                onClick={clickHandler}
              >
                &#247;
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn" onClick={clickHandler}>
                7
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                8
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                9
              </button>
              <button
                type="button"
                className="btn-2"
                onClick={clickHandler}
              >
                x
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn" onClick={clickHandler}>
                4
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                5
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                6
              </button>
              <button
                type="button"
                className="btn-2"
                onClick={clickHandler}
              >
                -
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn" onClick={clickHandler}>
                1
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                2
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                3
              </button>
              <button
                type="button"
                className="btn-2"
                onClick={clickHandler}
              >
                +
              </button>
            </li>
            <li className="row2">
              <button type="button" className="btn" onClick={clickHandler}>
                0
              </button>
              <button type="button" className="btn" onClick={clickHandler}>
                .
              </button>
              <button
                type="button"
                className="btn-2"
                onClick={clickHandler}
              >
                =
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CalculatorUI;
