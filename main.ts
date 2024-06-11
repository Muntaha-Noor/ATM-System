#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 54321;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});
// 54321 === 6937 - false
if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "quick withdraw", "check balance"],
    },
  ]);
  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log(`You withdrew $${amountAns.amount}`);
      console.log(`Your remaining balance is: $${myBalance}`);
    } else {
      console.log("Insufficient Funds. Transaction Declined.");
    }
  } else if (operationAns.operation === "quick withdraw") {
    let quick = await inquirer.prompt([
      {
        name: "amountoption",
        type: "list",
        message: "Select the amount you want to withdraw",
        choices: ["1000", "5000", "8000", "10000"],
      },
    ]);
    let withdrawAmount = parseInt(quick.amountoption);
    if (withdrawAmount <= myBalance) {
      myBalance -= withdrawAmount;
      console.log(`You withdrew $${withdrawAmount}`);
      console.log(`Your remaining balance is: $${myBalance}`);
    }
  } else if (operationAns.operation === "check balance") {
    console.log("Your balance is:" + myBalance);
  }
} else {
  console.log("Incorrect pin number");
}
