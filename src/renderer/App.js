import React, { Component } from 'react';
import { ticker } from 'coinmarketcap';
import Listing from './components/listing/listing';

import './styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: []
    };

    this.fetchTicker = this.fetchTicker.bind(this);
    this.fetchTicker();
  }

  fetchTicker() {
    ticker({
      limit: 100,
      convert: 'usd'
    }).then((currencies) => {
      this.setState({ currencies });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.currencies.map(({ name, symbol, price_usd, id }) => (
            <Listing
              key={id}
              currency={name}
              amount={1}
              currencyCode={symbol}
              exchangeRate={price_usd}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
