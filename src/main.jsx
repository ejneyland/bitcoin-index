import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BitcoinIndex from './BitcoinIndex'
import CurrencySelector from './CurrencySelector'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <h1>Bitcoin Index</h1>
    <CurrencySelector />
    <BitcoinIndex currency="AUD" />
  </>
);
