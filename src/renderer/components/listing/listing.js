import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const calcValue = (amount) => {
  // do calculations
  return amount;
};

const Listing = ({ currency, amount, currencyCode }) => (
  <div className="listing">
    <p className="currency">{currency}</p>
    <p className="amount">{amount}&nbsp;{currencyCode}</p>
    <p className="value">$&nbsp;{calcValue(amount)}</p>
  </div>
);

Listing.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currencyCode: PropTypes.string.isRequired
};

export default Listing;
