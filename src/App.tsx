import { useState } from 'react'
import './App.css'

type Op = '+' | '-' | '*' | '/'

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // racunanje na osnovu odabrane operacije
  const calculate = (op: Op) => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) || isNaN(numB)) {
      setError('Unesi validne brojeve')
      setResult(null)
      return
    }
    if (op === '/' && numB === 0) {
      setError('Deljenje nulom nije moguće')
      setResult(null)
      return
    }

    const results: Record<Op, number> = {
      '+': numA + numB,
      '-': numA - numB,
      '*': numA * numB,
      '/': numA / numB,
    }

    setError(null)
    setResult(String(results[op]))
  }

  const buttons: { label: string; op: Op }[] = [
    { label: '+', op: '+' },
    { label: '−', op: '-' },
    { label: '×', op: '*' },
    { label: '÷', op: '/' },
  ]

  return (
    // glavni wrapper koji centrira karticu
    <div className="page">
      <div className="card">
        <h1 className="title">Kalkulator</h1>

        {/* input polja */}
        <div className="inputs">
          <input
            className="num-input"
            type="number"
            placeholder="Broj A"
            value={a}
            onChange={e => setA(e.target.value)}
          />
          <input
            className="num-input"
            type="number"
            placeholder="Broj B"
            value={b}
            onChange={e => setB(e.target.value)}
          />
        </div>

        {/* dugmad za operacije */}
        <div className="ops">
          {buttons.map(({ label, op }) => (
            <button key={op} className="op-btn" onClick={() => calculate(op)}>
              {label}
            </button>
          ))}
        </div>

        {/* prikaz rezultata ili greske */}
        <div className="result-box">
          {error && <span className="error">{error}</span>}
          {result !== null && !error && (
            <span className="result">{result}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
