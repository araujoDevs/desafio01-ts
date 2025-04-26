export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // Removed setName to make name immutable

  getName = (): string => {
    return this.name
  }

  deposit(amount: number): void {
    if(!this.status){
      throw new Error('Conta inválida')
    }
    if(amount <= 0){
      console.log('O valor do depósito deve ser maior que zero.')
      return
    }
    this.balance += amount
    console.log(`Você depositou R$${amount.toFixed(2)}. Saldo atual: R$${this.balance.toFixed(2)}`)
  }

  withdraw(amount: number): void {
    if(!this.status){
      throw new Error('Conta inválida')
    }
    if(amount <= 0){
      console.log('O valor do saque deve ser maior que zero.')
      return
    }
    if(this.balance >= amount){
      this.balance -= amount
      console.log(`Você sacou R$${amount.toFixed(2)}. Saldo atual: R$${this.balance.toFixed(2)}`)
    } else {
      console.log('Saldo insuficiente para saque.')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  closeAccount = (): void => {
    this.status = false
    console.log('Conta encerrada com sucesso.')
  }
}
