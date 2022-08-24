import { observer } from "mobx-react-lite"
import { MouseEvent } from "react"
import { Calculator } from "./calculatorStore"

import styles from './CalculatorView.module.scss'

function CalculatorView(p: { calculator: Calculator }) {
  const append = (e: MouseEvent<HTMLButtonElement>) => {
    p.calculator.setOperand((e.target as HTMLElement).innerText)
  } 

  const operate = (e: MouseEvent<HTMLButtonElement>) => {
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
        <div className={styles.formula} id="display">{p.calculator.display || '0'}</div>
        <div className={styles.result}>{p.calculator.currOperand || p.calculator.operator || '0'}</div>
      </div>

      <div className={styles.buttons}>
        <button onClick={clear} className={[styles.button, styles.clear].join(' ')} id="clear">AC</button>

        <button onClick={operate} className={[styles.button, styles.operator].join(' ')} id="divide">/</button>
        <button onClick={operate} className={[styles.button, styles.operator].join(' ')} id="multiply">x</button>
        <button onClick={operate} className={[styles.button, styles.operator, styles.subtract].join(' ')} id="subtract">-</button>
        <button onClick={operate} className={[styles.button, styles.operator, styles.add].join(' ')} id="add">+</button>
        <button onClick={results} className={[styles.button, styles.equal].join(' ')} id="equals">=</button>

        <button onClick={append} className={styles.button} id="seven">7</button>
        <button onClick={append} className={styles.button} id="eight">8</button>
        <button onClick={append} className={styles.button} id="nine">9</button>

        <button onClick={append} className={styles.button} id="four">4</button>
        <button onClick={append} className={styles.button} id="five">5</button>
        <button onClick={append} className={styles.button} id="six">6</button>

        <button onClick={append} className={styles.button} id="one">1</button>
        <button onClick={append} className={styles.button} id="two">2</button>
        <button onClick={append} className={styles.button} id="three">3</button>

        <button onClick={append} className={[styles.button, styles.zero].join(' ')} id="zero">0</button>
        <button onClick={append} className={[styles.button, styles.decimal].join(' ')} id="decimal">.</button>
      </div>
    </div>
  )
}

export default observer(CalculatorView)