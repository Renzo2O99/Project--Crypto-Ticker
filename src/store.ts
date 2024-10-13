import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types/types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";
import { devtools } from "zustand/middleware";

interface CryptoStore {
  cryptoCurrencies: CryptoCurrency[],
  result: CryptoPrice,
  loading: boolean,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>,
}

export const useCryptoStore = create<CryptoStore>() (devtools((set) => ({
  cryptoCurrencies: [],
  result: {
    PRICE: '',
    IMAGEURL: '',
    LASTUPDATE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
  },
  loading: false,
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos();
    set(() => ({
      cryptoCurrencies
    }))
  },
  fetchData: async (pair) => {
    set(() => ({
      loading: true,
    }))

    const result = await fetchCurrentCryptoPrice(pair);

    if (result) {
      set(() => ({
        result,
        loading: false,
      }))
    }
  }
})))