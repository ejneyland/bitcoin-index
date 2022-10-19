import { useState } from 'react'
// tracks a data type and reflects changes to it where it is mentioned

function ShowCount({ count }) {
  return <p>You have {count} upvotes</p>
}

function State() {
  let [count, setCount] = useState(0)
  // [getter (current value of state), setter (what we use to change the state)]

  return (
    <>
      <h1>State</h1>
      <ShowCount count={count} />
      <button onClick={() => setCount(count + 1)}>Upvote</button>
    </>
  );
}

export default State

// In object-oriented programming, the state of an object is the combination of the original values in the object plus any modifications made to them.

  // function updateCount() {
  //   // count++ // doesn't tell React what to do with the count
  //   setCount(count + 1)
  //   // document.querySelector('p').innerText = `You have ${count} upvotes`
  // }
  // inline function better if only using it in one location
  // otherwise, leaving it as a function is fine if applied in multiple places
  // button onClick={updateCount}