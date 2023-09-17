function BankAccount(name,initbalance){
    this.name=name;
    let _initbalance=initbalance;

    this.validamount=function(amount){
        return typeof amount==='number' && amount>0;
    }
    this.deposit=function(amount){
        if(!this.validamount(amount)){
            console.log("enter a valid amount");
        }
        else{
            _initbalance+=amount;
            console.log("Amount Deposited : "+amount + " New Balance : "+ _initbalance);
        }
    }
    this.withdraw=function(amount){
        if (!this.validamount(amount)) {
            console.log('Enter Valid Amount');
        }
        else  if(_initbalance<amount){
            console.log(`Insufficient balance`);
        }
        else{
            _initbalance-=amount;
            console.log("Amount Debited : "+amount + "New Balance : "+ _initbalance )
        }
    }
    this.checkBalance=function(){
        console.log("Account Balance for "+name +" is : "+_initbalance) ;
    }
}

const myAccount=new BankAccount("Rahul",10000);
myAccount.deposit(25);
myAccount.deposit(400000);

myAccount.checkBalance();