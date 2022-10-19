import { useState, useEffect } from "react";

function CurrencySelector({ currency, setCurrency }) {
  // currency moved to App.jsx, so that the state is available to all child components
  // const [currency, setCurrency] = useState("AUD");

  const [currencies, setCurrencies] = useState();

  useEffect(() => {
    console.log("mounted");
    fetch(
      'https://justcors.com/tl_fc40d7a/https://api.coindesk.com/v1/bpi/supported-currencies.json'
    )
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);

  return currencies ? (
    <select
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {currencies.map(cur => <option value={cur.currency}>{cur.currency} {cur.country}</option>)}
    </select>
  ) : (
    <p>Loading...</p>
  );
}

export default CurrencySelector;
