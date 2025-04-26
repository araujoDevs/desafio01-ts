import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.isActive()) {
      this.deposit(amount)
      console.log(`Empréstimo de R$${amount.toFixed(2)} concedido. Saldo atual: R$${this.getBalance().toFixed(2)}`)
    } else {
      console.log('Conta inválida para empréstimo.')
    }
  }

  // Override withdraw to disallow withdrawals
  withdraw = (amount: number): void => {
    console.log('Operação não permitida: Saques não são permitidos em contas empresariais.')
  }

  private isActive = (): boolean => {
    try {
      this.getBalance() // just to check if account is active by calling deposit or withdraw
      return true
    } catch {
      return false
    }
  }
}
