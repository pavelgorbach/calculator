import './App.css'
import Header from './components/Header'
import { Calculator } from './features/calculatorStore'
import CalculatorView from './features/CalculatorView'

const myCalculator = new Calculator()

export default function App() {
  return (
    <div className="App">
      <Header title="Calculator" />
      <CalculatorView calculator={myCalculator} />
    </div>
  )
}