import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const Nav = () => (
  <header>
    <nav className={classes.navbar}>
      <h2 className={classes.logo}>
        Math Magicians
      </h2>
      <div className={classes.navlinks}>
        <ul>
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
      </div>
    </nav>
  </header>
);

export default Nav;
