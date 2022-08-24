import { observer } from "mobx-react-lite"
import { MouseEvent } from "react"
import { Calculator } from "./calculatorStore"

import styles from './CalculatorView.module.scss'

function CalculatorView(p: { calculator: Calculator }) {
  const append = (e: MouseEvent<HTMLDivElement>) => {
    p.calculator.setOperand((e.target as HTMLElement).innerText)
  } 

  const operate = (e: MouseEvent<HTMLDivElement>) => {
    p.calculator.setOperator((e.target as HTMLElement).innerText)
  }

  const clear = () => {
    p.calculator.clear()
  }

  const results = () => {
    p.calculator.showResults()
  }
   
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div id="display">{p.calculator.display || '0'}</div>
        <div>{p.calculator.currOperand || p.calculator.operator || '0'}</div>
      </div>

      <div onClick={clear} className={styles.clear} id="clear">AC</div>

      <div onClick={operate} className={styles.operator} id="divide">/</div>
      <div onClick={operate} className={styles.operator} id="multiply">X</div>
      <div onClick={operate} className={styles.operator} id="subtract">-</div>
      <div onClick={operate} className={styles.operator} id="add">+</div>

      <div onClick={results} className={styles.equal} id="equals">=</div>

      <div onClick={append} className={styles.decimal} id="decimal">.</div>

      <div onClick={append} id="seven">7</div>
      <div onClick={append} id="eight">8</div>
      <div onClick={append} id="nine">9</div>

      <div onClick={append} id="four">4</div>
      <div onClick={append} id="five">5</div>
      <div onClick={append} id="six">6</div>

      <div onClick={append} id="one">1</div>
      <div onClick={append} id="two">2</div>
      <div onClick={append} id="three">3</div>

      <div onClick={append} id="zero">0</div>
    </div>
  )
}

export default observer(CalculatorView)