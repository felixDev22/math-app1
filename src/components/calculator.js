import React from 'react';

import './calculator.css';

class CalculatorUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
              <div type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                AC
              </div>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                +/-
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                %
              </button>
              <button
                type="button"
                className="btn-2"
                onClick=onClick={this.onClickEventHandler}
              >
                &#247;
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                7
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                8
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                9
              </button>
              <button
                type="button"
                className="btn-2"
                onClick=onClick={this.onClickEventHandler}
              >
                x
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                4
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                5
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                6
              </button>
              <button
                type="button"
                className="btn-2"
                onClick=onClick={this.onClickEventHandler}
              >
                -
              </button>
            </li>
            <li className="row">
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                1
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                2
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                3
              </button>
              <button
                type="button"
                className="btn-2"
                onClick=onClick={this.onClickEventHandler}
              >
                +
              </button>
            </li>
            <li className="row2">
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                0
              </button>
              <button type="button" className="btn" onClick=onClick={this.onClickEventHandler}>
                .
              </button>
              <button
                type="button"
                className="btn-2"
                onClick=onClick={this.onClickEventHandler}
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
