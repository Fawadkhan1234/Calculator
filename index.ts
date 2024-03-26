import inquirer from "inquirer"

const userInput = await inquirer.prompt([
    {
    message: "Enter first number",
    type: "number",
    name: "num1"
},
{
    message: "Enter 2nd number",
    type: "number",
    name: "num2"
},
{
    message: "Select any operator",
    type: "list",
    name:"operator",
    choices: ["addition", "Subtraction", "Multiplication", "Division"]
}
]);

switch(userInput.operator){
    case "addition":
        console.log(`${userInput.num1} + ${userInput.num2} = ` + (userInput.num1 + userInput.num2));
        break;
    case "Subtraction":
        console.log(`${userInput.num1} - ${userInput.num2} = ` + (userInput.num1 - userInput.num2));
        break;
    case "Multiplication":
        console.log(`${userInput.num1} * ${userInput.num2} = ` + (userInput.num1 * userInput.num2));
        break;
    case "Division":
        console.log(`${userInput.num1} / ${userInput.num2} = ` + (userInput.num1 / userInput.num2));
        break;
    default:
        console.log("Invalid operator selection");
}
