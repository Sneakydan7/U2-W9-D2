var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    Account.prototype.oneDeposit = function (e) {
        this.balanceInit = this.balanceInit + e;
        return this.balanceInit;
    };
    Account.prototype.oneWithdraw = function (e) {
        if (this.balanceInit === 0) {
            console.log("Il tuo conto è vuoto!");
        }
        else if (this.balanceInit < e) {
            console.log("Non hai abbastanza fondi per ritirare la cifra stabilita!");
        }
        else {
            return this.balanceInit - e;
        }
    };
    return Account;
}());
var SonAccount = new Account(0);
console.log(SonAccount.oneDeposit(500), SonAccount.oneWithdraw(470));
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mother.prototype.addInterest = function (e) {
        var interest = e * 0.1;
        return interest;
    };
    Mother.prototype.twoDeposit = function (e) {
        this.balanceInit = this.balanceInit + e - this.addInterest(e);
        return this.balanceInit;
    };
    Mother.prototype.twoWithdraw = function (e) {
        if (this.balanceInit === 0) {
            console.log("Il tuo conto è vuoto!");
        }
        else if (this.balanceInit < e) {
            console.log("Non hai abbastanza fondi per ritirare la cifra stabilita!");
        }
        else {
            this.balanceInit = this.balanceInit - e - this.addInterest(e);
            return this.balanceInit;
        }
    };
    return Mother;
}(Account));
var MotherAccount = new Mother(0);
console.log(MotherAccount.twoDeposit(500), MotherAccount.twoWithdraw(200));
