import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const calcValue = (amount) => {
  // do calculations
  return amount;
};

const Listing = ({ currency, amount }) => (
  <div className={styles.listing}>
    <p className={styles.currency}>{currency}</p>
    <p className={styles.amount}>{amount}</p>
    <p className={styles.value}>{calcValue(amount)}</p>
  </div>
);

Listing.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default Listing;
