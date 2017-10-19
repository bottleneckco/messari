import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Listing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: this.props.amount
    };

    this.onAmountChange = this.onAmountChange.bind(this);
    this.calcValue = this.calcValue.bind(this);
  }

  onAmountChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  calcValue() {
    // do calculations
    return this.state.amount * this.props.exchangeRate;
  }

  render() {
    const { currency, currencyCode } = this.props;
    const { amount } = this.state;
    return (
      <div className="listing">
        <p className="currency">{currency}</p>
        <div className="amount">
          <input
            name="amount"
            defaultValue={amount}
            type="number"
            step="0.01"
            min="0"
            onChange={this.onAmountChange}
          />
          <label htmlFor="amount">{currencyCode}</label>
        </div>
        <p className="value">$&nbsp;{this.calcValue()}</p>
      </div>
    );
  }
}

Listing.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currencyCode: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired
};

export default Listing;
