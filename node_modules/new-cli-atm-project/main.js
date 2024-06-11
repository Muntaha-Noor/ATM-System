#! /usr/env/bin node
import inquirer from "inquirer";
let myPin = 5234;
let userBalance = 10000;
console.log("Your Current Balance is ", userBalance);
let Pin = await inquirer.prompt([{
        name: "userPin",
        type: "number",
        message: "Enter your pin"
    }]);
if (myPin == Pin.userPin) {
    console.log("Your pin is correct");
    let b = await inquirer.prompt([{
            name: "atmoption",
            type: "list",
            message: "Select your option",
            choices: ["deposit money", "balance check", "withdraw money", "quick withdraw"]
        }]);
    if (b.atmoption == "deposit money") {
        let amount = await inquirer.prompt([{
                name: "deposit",
                type: "number",
                message: "how much money you want to deposit"
            }]);
        console.log("your new account balance is ", userBalance + amount.deposit);
    }
    else {
        if (b.atmoption == "balance check") {
            console.log(userBalance);
        }
        else {
            if (b.atmoption == "withdraw money") {
                let c = await inquirer.prompt([{
                        name: "withdraw",
                        type: "number",
                        message: "how much money you want to withdraw"
                    }]);
                if (c.withdraw <= userBalance) {
                    console.log("Your new amount balance is ", userBalance - c.withdraw);
                }
                else {
                    console.log("Not enough balance ");
                }
            }
            else {
                if (b.atmoption == "quick withdraw") {
                    let quick = await inquirer.prompt([{
                            name: "amountoption",
                            type: "list",
                            message: "Select the quick amount you want to deposit",
                            choices: ["500", "1000", "5000", "10000",]
                        }]);
                    if (quick.amountoption == '500') {
                        console.log(userBalance - 500);
                    }
                    else {
                        if (quick.amountoption == '1000') {
                            console.log(userBalance - 1000);
                        }
                        else {
                            if (quick.amountoption == '5000') {
                                console.log(userBalance - 5000);
                            }
                            else {
                                if (quick.amountoption == '10000') {
                                    console.log(userBalance - 10000);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
else {
    console.log("Your pin is incorrect");
}
