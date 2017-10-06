import React from 'react';
import Listing from './components/listing/listing';

import './styles/main.scss';

const App = () => (
  <div>
    <Listing currency="Bitcoin" amount={1234.56} />
    <Listing currency="Ethereum" amount={4321.12} />
  </div>
);

export default App;
