import { useEffect } from "react"
import { CriptoSearchForm } from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import { CriptoPriceDisplay } from "./components/CriptoPriceDisplay"

function App() {
  const { fetchCryptos } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, [])
  return (
    <>
      <div className="max-w-[650px] w-[90%] mx-auto">
        <h1 className="text-4xl mt-12 text-white font-bold leading-custom-height">
          Cotizador de 
          <span className="block text-primary text-5xl">
            Criptomonedas
            </span>
        </h1>

        <div className="mt-12 py-14 px-5 bg-white rounded-xl shadow-custom-secondary">
          <CriptoSearchForm />
          <CriptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
