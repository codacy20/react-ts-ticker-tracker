import './App.scss';
import Price from '../Price/Price';
import Chart from '../Chart/Chart';
import React from 'react';
import { ItemDataProvider } from '../DataProvider';

function App() {
  return (
    <div className="app-container">
      <ItemDataProvider param={'AAPL'}>
        <Chart />
        <Price />
      </ItemDataProvider>
    </div>
  );
}

export default App;
