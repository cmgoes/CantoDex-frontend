export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const formatNumber = (num: string | number, precision = 2) => {
  const number = Number(num)
  if (isNaN(number)) return '0.00'
  return number.toFixed(precision)
}

export const formatPercent = (num: string | number) => {
  return formatNumber(Number(num) * 100) + '%'
}

export const formatBigNumber = (num: string | number) => {
  const number = Number(num)
  if (isNaN(number)) return '0.00'
  const million = number / 1000000
  if (million > 1) {
    return million.toFixed(2) + 'M'
  }
  const kilo = number / 1000
  if (kilo > 1) {
    return kilo.toFixed(2) + 'K'
  }
}
