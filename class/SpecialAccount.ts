import { DioAccount } from "./DioAccount"

/**
 * Esta conta não deve receber novos atributos
 */
export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit(amount: number): void {
    if(amount <= 0){
      console.log('O valor do depósito deve ser maior que zero.')
      return
    }
    // Add 10 extra to the deposit amount
    const totalAmount = amount + 10
    super.deposit(totalAmount)
  }
}
