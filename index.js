#! /usr/bin/env node 
import inquirer from "inquirer";
let message = "Welcome to my project simple calculator";
console.log(message);
const answer = await inquirer.prompt([
    { message: "Kindly enter first number", type: "number", name: "firstnumber" },
    { message: "Kindly enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
console.log("Thank you");
console.log("have a good day");
