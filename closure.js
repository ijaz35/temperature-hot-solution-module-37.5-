/* const bank = owner => {
    const taka = 233;
    let balance = 0;
    //closure
    return amount => {
        balance += amount;
        return balance;
    }
} */
//if you want to return more things from function use object or array
const bank = owner => {
    const taka = 233;
    let balance = 0;
    return {
        deposite: amount => {
            //balance=balance+amount;
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            //balance=balance-amount;
            balance -= amount;
            return balance;
        }
    }
}
const mofijBank = bank('mofij');
console.log(mofijBank);

console.log(mofijBank.deposite(100));
console.log(mofijBank.deposite(300));
console.log(mofijBank.deposite(200));
console.log(mofijBank.deposite(200));
console.log(mofijBank.deposite(200));
console.log(mofijBank.withdraw(200));
console.log(mofijBank.withdraw(100));

