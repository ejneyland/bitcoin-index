import { useState, useEffect } from "react";

// State and Lifecycle

function BitcoinIndex({ currency }) {
  const [price, setPrice] = useState();
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(`updated count to ${count}`)
  // }, [count])

  // useEffect(() => {
  //   console.log("updated price");
  // }, [price]);

  useEffect(() => {
    console.log("mounted");
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then((res) => res.json())
      .then((data) => setPrice(data.bpi[currency].rate));
  }, []);

  useEffect(() => {
    console.log("any state or prop change");
  });

  useEffect(() => {
    console.log(`count has changed: ${count}`);
  }, [count]);

  return (
    <>
      {price ? (
        <h2>
          Current Value: {currency} {price}
        </h2>
      ) : (
        <h3>Loading...</h3>
      )}
      <button onClick={() => setCount(count + 1)}>{count} Upvotes</button>
    </>
  );
}

export default BitcoinIndex;
