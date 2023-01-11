import React from 'react';

import './Calculator.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="cal">
        <div className="displayArea">
          <input className="cal-input" type="text" value="0" readOnly />
        </div>
        <div className="operators">
          <ul className="rows">
            <li className="row">
              <button type="button" className="btn">
                AC
              </button>
              <button type="button" className="btn">
                +/-
              </button>
              <button type="button" className="btn">
                %
              </button>
              <button type="button" className="btn-2">
                &#247;
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn">
                7
              </button>
              <button type="button" className="btn">
                8
              </button>
              <button type="button" className="btn">
                9
              </button>
              <button type="button" className="btn-2">
                x
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn">
                4
              </button>
              <button type="button" className="btn">
                5
              </button>
              <button type="button" className="btn">
                6
              </button>
              <button type="button" className="btn-2">
                -
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn">
                1
              </button>
              <button type="button" className="btn">
                2
              </button>
              <button type="button" className="btn">
                3
              </button>
              <button type="button" className="btn-2">
                +
              </button>
            </li>
            <li className="row2">
              <button type="button" className="btn">
                0
              </button>
              <button type="button" className="btn">
                .
              </button>
              <button type="button" className="btn-2">
                =
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calc;
