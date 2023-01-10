import React from 'react';

import './calculator.css';

class Calculator extend React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='cal'>
        <div className='displayArea'>
          <input className="cal-input" type="text" value='0'></input>
        </div>
        <div className='operator'>
        <ul className="rows">
          <li className="row">
            <button className='btn'>AC</button>
             <button className='btn'>+/-</button>
              <button className='btn'>%</button>
               <button className='btn'>&#247</button>
          </li>
          <ul className="rows">
          <li className="row">
            <button className='btn'>7</button>
             <button className='btn'>8</button>
              <button className='btn'>9</button>
               <button className='btn'>X</button>
          </li>
        </ul>
        </div>
        










    )









  }








}