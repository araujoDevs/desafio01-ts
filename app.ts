import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { SpecialAccount } from "./class/SpecialAccount"
import { BonusAccount } from "./class/BonusAccount"

const companyAcc = new CompanyAccount("Empresa XYZ", 12345)
companyAcc.deposit(1000)
companyAcc.getLoan(500) // Loan of 500
companyAcc.withdraw(500) // Should show operation not permitted
console.log(`Saldo da conta empresarial: R$${companyAcc.getBalance().toFixed(2)}`)

const personAcc = new PeopleAccount(987654321, "João Silva", 54321)
personAcc.deposit(500)
personAcc.withdraw(200)
console.log(`Saldo da conta pessoal: R$${personAcc.getBalance().toFixed(2)}`)

// personAcc.setName("João S.") // Removed because name is immutable
console.log(`Nome da conta pessoal: ${personAcc.getName()}`)

personAcc.closeAccount()
// Trying to deposit after account closed to test validation
try {
  personAcc.deposit(100)
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message)
  } else {
    console.log('Erro desconhecido')
  }
}

const specialAcc = new SpecialAccount("Conta Especial", 67890)
specialAcc.deposit(100) // Should deposit 110
specialAcc.withdraw(50)
console.log(`Saldo da conta especial: R$${specialAcc.getBalance().toFixed(2)}`)

const bonusAcc = new BonusAccount("Bonus", 555555)
bonusAcc.deposit(100)
console.log(`Saldo da conta bônus: R$${bonusAcc.getBalance().toFixed(2)}`)
