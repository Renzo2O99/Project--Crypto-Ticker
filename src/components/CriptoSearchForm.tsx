import React, { useState } from "react";
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types/types";
import { ErrorMessage } from "./ErrorMessage";

export const CriptoSearchForm = () => {
  const { cryptoCurrencies } = useCryptoStore();
  const { fetchData } = useCryptoStore();
  
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptoCurrency: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');

    fetchData(pair);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-5">
        <label 
          className="text-black font-bold text-2xl"
          htmlFor="currency">Moneda:</label>

        <select
          className="bg-light border-none p-3 rounded-lg text-lg cursor-pointer"
          name="currency" 
          id="currency"
          value={pair.currency}
          onChange={handleChange}>
          <option value="">--&gt; Seleccione la Moneda &lt;--</option>
        
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-5">
        <label 
          className="text-black font-bold"
          htmlFor="criptoCurrency">Criptomoneda:</label>

        <select
          className="bg-light border-none p-3 rounded-lg text-lg cursor-pointer"
          name="criptoCurrency" 
          id="criptoCurrency"
          value={pair.criptoCurrency}
          onChange={handleChange}>
          <option value="">--&gt; Seleccione la Moneda &lt;</option>

          {cryptoCurrencies.map( crypto => (
            <option 
              key={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input
        type="submit"
        value={'Cotizar'}
        className="w-2/3 mx-auto uppercase mt-5 border-none cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      />
    </form>
  )
}
