#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// my balance in dollar and my pin code
let myBalance = 25000;
let myPin = 9944;
console.log(chalk.yellowBright("\n \tWelcome to my ATM machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.cyanBright("enter your pin code"),
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.greenBright("\n \tCorrect pin code!!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.magentaBright("Please select your option"),
            type: "list",
            choices: ["Withdrawal", "Check balance", "Fast cash"]
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdrawal") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.magentaBright("Enter your amount"),
                type: "number"
            }
        ]);
        // let balance = myBalance -= amountAns.amount;
        // if(amountAns.amount <= myBalance){
        //   console.log(`Your remaining balance is ${myBalance}`)
        // }else{
        //   console.log("Your account balance is Insufficiant")
        // }
        if (amountAns.amount > myBalance) {
            console.log(chalk.redBright("Sorry! your account balance is Insufficiant."));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.green(`${amountAns.amount} withdraw successfully`));
            console.log(chalk.yellowBright(`Your remaining balance is: ${myBalance}`));
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(chalk.greenBright(`Your balance is ${myBalance}`));
    }
    else if (operationAns.operation === "Fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: chalk.magentaBright("Please select your amount"),
                type: "list",
                choices: ["1000", "2000", "5000", "10000", "20000", "30000"]
            }
        ]);
        if (fastcashAns.fastcash > myBalance) {
            console.log(chalk.redBright("Sorry! your account balance is Insufficiant."));
        }
        else {
            myBalance -= fastcashAns.fastcash;
            console.log(chalk.green(`${fastcashAns.fastcash} withdraw successfully`));
            console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
        }
    }
}
else {
    console.log(chalk.redBright("Your pin code is Incorrect!"));
}
