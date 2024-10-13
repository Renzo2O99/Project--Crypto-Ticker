export function formatSymbol(currency: string) {
  const code = currency.slice(0, 3);

  if (code === 'ARS' || code === 'MXN') {
    return `$ ${currency.slice(4)} ${code}`
  }
  return currency
}

