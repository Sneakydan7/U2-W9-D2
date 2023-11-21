class Account {
  balanceInit: number;

  constructor(_balanceInit: number) {
    this.balanceInit = _balanceInit;
  }

  oneDeposit(e: any): number {
    this.balanceInit = this.balanceInit + e;
    return this.balanceInit;
  }

  oneWithdraw(e: any): number {
    if (this.balanceInit === 0) {
      console.log("Il tuo conto è vuoto!");
    } else if (this.balanceInit < e) {
      console.log("Non hai abbastanza fondi per ritirare la cifra stabilita!");
    } else {
      return this.balanceInit - e;
    }
  }
}

let SonAccount = new Account(0);
console.log(SonAccount.oneDeposit(500), SonAccount.oneWithdraw(470));

class Mother extends Account {
  addInterest(e: any): number {
    let interest = e * 0.1;

    return interest;
  }

  twoDeposit(e: any): number {
    this.balanceInit = this.balanceInit + e - this.addInterest(e);
    return this.balanceInit;
  }

  twoWithdraw(e: any): number {
    if (this.balanceInit === 0) {
      console.log("Il tuo conto è vuoto!");
    } else if (this.balanceInit < e) {
      console.log("Non hai abbastanza fondi per ritirare la cifra stabilita!");
    } else {
      this.balanceInit = this.balanceInit - e - this.addInterest(e);
      return this.balanceInit;
    }
  }
}

let MotherAccount = new Mother(0);
console.log(MotherAccount.twoDeposit(500), MotherAccount.twoWithdraw(200));
