import React from 'react';
import classes from './Quote.module.css';

const Quote = () => (
  <section className={classes.quote_section}>
    <h2>Quote</h2>
    <span className={classes.quote_icon}>
      <i className="fa-sharp fa-solid fa-quote-left" />
    </span>
    <p className={classes.quote_words}>
      It is not knowledge, but the act of learning, not possession but the act
      of getting there, which grants the greatest enjoyment.
      <br />
      <b>Carl Friedrich Gauss.</b>
    </p>
  </section>
);

export default Quote;
