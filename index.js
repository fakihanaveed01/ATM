#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let answer = await inquirer.prompt([{
        name: "Pin",
        message: "Enter your pin",
        type: "number",
    }]);
if (answer.Pin === mypin) {
    console.log("Correct pin code!!!");
}
let operationAns = await inquirer.prompt([{
        name: "operations",
        message: "please select any one option:",
        type: "list",
        choices: ["Withdraw", "Check balance"],
    }]);
if (operationAns.operations === "Withdraw") {
    let Amountans = await inquirer.prompt([{
            name: "Amount",
            message: "Enter your Amount",
            type: "number",
        }]);
    mybalance -= Amountans.Amount;
    console.log("Your remaining balance is:" + mybalance);
}
else if (operationAns.operations === "Check balance") {
    console.log("Your balance is:" + mybalance);
}
else {
    console.log("Incorrect pin number");
}
