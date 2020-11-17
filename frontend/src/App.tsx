import React from 'react';

import './styles/global.css';

import Header from './components/Header'
import TinderCards from './components/TinderCards'
import SwipeButtoins from './components/SwipeButtons'

function App() {
  return (
    <div>
      <Header />

      <TinderCards />

      <SwipeButtoins />
    </div>
  );
}

export default App;
