import React from 'react';
import Listing from './components/listing/listing';

import './styles/main.scss';

const App = () => (
  <div>
    <Listing currency="Bitcoin" amount={1234.56} currencyCode="BTC" />
    <Listing currency="Ethereum" amount={4321.12} currencyCode="ETH" />
  </div>
);

export default App;
