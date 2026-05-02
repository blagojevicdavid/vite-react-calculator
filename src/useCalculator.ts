import { useState } from 'react'
import type { Op } from './arithmetic'
import { compute } from './arithmetic'
import { validateInputs, validateOperation } from './validation'

export const OPERATION_BUTTONS: { label: string; op: Op }[] = [
  { label: '+', op: '+' },
  { label: '−', op: '-' },
  { label: '×', op: '*' },
  { label: '÷', op: '/' },
]

export function useCalculator() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const calculate = (op: Op) => {
    const inputError = validateInputs(a, b)
    if (inputError) {
      setError(inputError)
      setResult(null)
      return
    }

    const opError = validateOperation(op, b)
    if (opError) {
      setError(opError)
      setResult(null)
      return
    }

    setError(null)
    setResult(String(compute(op, parseFloat(a), parseFloat(b))))
  }

  return { a, setA, b, setB, result, error, calculate }
}
