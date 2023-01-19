import React, { useState } from 'react';

import calculate from '../components/logic/calculate';
import './calculator.css';

const CalculatorUI = () => {
  const [calculateState, setCalculateState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  // Event handler
  const clickHandler = (e) => {
    const result = calculate(calculateState, e.target.textContent);
    setCalculateState((initialState) => ({
      ...initialState,
      ...result,
    }));
  };

  const { total, next } = calculateState;

  return (
    // <h2>Let's do Math!</h2>
    <div className="cal">
      <div className="displayArea">
        <p className="cal-input" type="text">{ next || total || 0}</p>
      </div>
      <div className="operators">
        <ul className="rows">
          <li className="row">
            <button type="button" className="btn" onClick={clickHandler}>
              AC
            </button>
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
};

export default CalculatorUI;
