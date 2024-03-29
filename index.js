import inquirer from "inquirer";
let pin = 1230;
let Balance = 5000;
console.log("Welcome to the ATM");
console.log("#################");
let pinInput = await inquirer.prompt([
    {
        name: "myPin",
        type: "number",
        message: "Enter you pin: "
    }
]);
console.log("#################");
if (pinInput.myPin === pin) {
    console.log("Pin is correct, Login successfully");
    console.log("#################");
    // console.log("Current Account Balance is ", Balance);
    // console.log("#################")
    let withdraw = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation: ",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    console.log("#################");
    if (withdraw.operation === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Enter a amount to withdraw:"
            }
        ]);
        console.log("#################");
        if (amount.Amount > Balance) {
            console.log("Insufficient Balance");
        }
        else {
            Balance -= amount.Amount;
            console.log("Amount withdraw", amount.Amount);
            console.log("Remaining balance: ", Balance);
        }
    }
    else if (withdraw.operation === "Check Balance") {
        console.log("Your current balance: ", Balance);
    }
}
else {
    console.log("Pin is incorrect");
}
