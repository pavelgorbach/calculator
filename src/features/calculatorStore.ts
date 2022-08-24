import { makeAutoObservable } from "mobx"

export class Calculator {
  display: string = '' 
  currOperand: string = '' 
  prevOperand: string = ''
  operator: string = ''

  constructor() {
    makeAutoObservable(this) 
  }

  clear() {
    this.display = '' 
    this.prevOperand = ''
    this.operator = ''
    this.currOperand = '' 
  }

  setOperand(operand: string) {
    if(!operand) throw new Error('SetValue: An argument was not provided!')

    // Not allow a number to begin with multiple zeros
    if(this.currOperand === '0' && operand === '0') return
    // Two . in one number is not acceptable; Number shouldn't start with .
    if(operand === '.' && (!this.currOperand || this.currOperand.slice(-1) === '.' || this.currOperand.includes('.'))) return

    // Update operand value
    this.currOperand = `${this.currOperand}${operand}`
    // Update displaty value
    this.display = this.display + operand 
  }

  setOperator(operator: string) {
    // Do not set operator if there are no operands
    if(!this.prevOperand && !this.currOperand) return

    // Move right operand to the left and set operator for the left operand
    if(!this.operator) {
      this.prevOperand = this.currOperand
      this.operator = operator
      this.currOperand = ''
      this.display = `${this.display}${this.operator}`
      return
    }

    // Do not set operator twice
    if(this.operator === operator) return

    // If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.
    if(this.prevOperand && !this.currOperand && operator === '-') {
      this.currOperand = operator
      this.display = this.display + this.currOperand
      return
    }

    // Do not allow multiple operators; Replace current operator with a new one
    if(this.prevOperand && (!this.currOperand || this.currOperand === '-')) {
      this.currOperand = ''
      this.operator = operator
      this.display = this.display.replace(/\D*$/, this.operator)
      return
    }
   
    // Calculate current expression and set result as left operand for new operator
    if(this.prevOperand && this.currOperand) {
      const computed = this.compute()
      this.operator = operator 
      this.prevOperand = `${computed}`
      this.currOperand = ''
      this.display = `${computed}${this.operator}` 
      return
    }
  }

  compute() {
    if(!this.prevOperand || !this.currOperand || !this.operator) {
      throw new Error('Cannot calculate expression; One of operands or operator is not defined;')
    }

    const left = parseFloat(this.prevOperand) || 0 
    const right = parseFloat(this.currOperand) || 0

    let result = 0

    switch (this.operator) {
      case '+': result = left + right
        break
      case '-': result = left - right
        break
      case '/': result = left / right
        break
      case 'X': result = left * right
        break
      default: result = 0 
    }
   
    return `${result}`
  } 

  showResults() {
    const result = this.compute() 
    this.clear()
    this.display = result 
    this.currOperand = result 
  }
}