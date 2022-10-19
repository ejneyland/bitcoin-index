import { useState } from 'React'

function CurrencySelector() {
  const [currency, setCurrency] = useState("AUD");

  return (
    <select onChange={event => setCurrency(event.target.value)}>
      <option value="AUD">Australian Dollar</option>
      <option value="USD">US Dollar</option>
      <option value="EUR">Euro</option>
    </select>
  )
}

export default CurrencySelector