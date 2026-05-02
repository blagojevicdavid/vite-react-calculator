import type { Op } from './arithmetic'

export function validateInputs(a: string, b: string): string | null {
  if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
    return 'Unesi validne brojeve'
  }
  return null
}

export function validateOperation(op: Op, b: string): string | null {
  if (op === '/' && parseFloat(b) === 0) {
    return 'Deljenje nulom nije moguće'
  }
  return null
}
