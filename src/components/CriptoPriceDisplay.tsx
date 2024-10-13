import { useMemo } from "react";
import { useCryptoStore } from "../store"
import { Spinner } from "./Spinner";
import { formatSymbol } from "../utils";

export const CriptoPriceDisplay = () => {

  const { result, loading } = useCryptoStore();
  const hasResult = useMemo(() => Object.values(result).includes(''), [result]);

  return (
    <div className="mt-12">
      {loading ? <Spinner /> : !hasResult && (
        <>
          <h2 className="text-center font-bold text-3xl my-6">Cotización</h2>

          <div className="md:grid md:items-center gap-4" style={{gridTemplateColumns: '2fr 3fr'}}>
            <img 
              className="w-full"
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="Imagen de la criptomoneda" 
            />

            <div className="my-6 text-2xl md:m-0 text-center">
              <p className="mb-2 text-xl grid">Precio regular: {''}<span className="font-bold">{formatSymbol(result.PRICE)}</span></p>

              <p className="mb-2 text-xl grid">Precio más alto del día: {''}<span className="font-bold">{formatSymbol(result.HIGHDAY)}</span></p>

              <p className="mb-2 text-xl grid">Precio más bajo del día: {''}<span className="font-bold">{formatSymbol(result.LOWDAY)}</span></p>

              <p className="mb-2 text-xl grid">Cambios en las últimas 24hs: {''}<span className="font-bold">{result.CHANGEPCT24HOUR}</span></p>

              <p className="mb-2 text-xl grid">Última actualización: {''}<span className="font-bold">{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
