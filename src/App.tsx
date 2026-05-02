import './App.css'
import { useCalculator, OPERATION_BUTTONS } from './useCalculator'

function App() {
  const { a, setA, b, setB, result, error, calculate } = useCalculator()

  const buttons = OPERATION_BUTTONS

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Kalkulator</h1>

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

        <div className="ops">
          {buttons.map(({ label, op }) => (
            <button key={op} className="op-btn" onClick={() => calculate(op)}>
              {label}
            </button>
          ))}
        </div>

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
