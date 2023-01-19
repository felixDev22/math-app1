import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const Nav = () => (
  <header>
    <nav className={classes.navbar}>
      <h1 className="Logo">
        <span>Math</span>
        Magicians
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
