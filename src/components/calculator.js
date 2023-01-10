/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
import React from 'react';

import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='cal'>
        <div className='displayArea'>
          <input className='cal-input' type='text' value='0'></input>
        </div>
        <div className='operators'>
          <ul className='rows'>
            <li className='row'>
              <button className='btn'>AC</button>
              <button className='btn'>+/-</button>
              <button className='btn'>%</button>
              <button className='btn'>&#247</button>
            </li>
            <li className='row'>
              <button className='btn'>7</button>
              <button className='btn'>8</button>
              <button className='btn'>9</button>
              <button className='btn'>X</button>
            </li>
            <li className='row'>
              <button className='btn'>4</button>
              <button className='btn'>5</button>
              <button className='btn'>6</button>
              <button className='btn'>-</button>
            </li>
            <li className='row'>
              <button className='btn'>3</button>
              <button className='btn'>2</button>
              <button className='btn'>1</button>
              <button className='btn'>+</button>
            </li>
            <li className='row'>
              <button className='btn'>0</button>
              <button className='btn'>.</button>
              <button className='btn'>=</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
