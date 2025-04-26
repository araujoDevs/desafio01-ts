import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(amount: number): void {
    // Add 10 more to the amount deposited
    const bonusAmount = amount + 10;
    super.deposit(bonusAmount);
  }
}
