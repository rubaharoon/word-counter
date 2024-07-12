#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n \t\t Welcome to Word Counter!"));
console.log("=".repeat(50));

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.magentaBright.bold("Enter a sentence: "),
    }
]);

let words = answers.sentence.trim().split(" ");

console.log("==".repeat(50));
console.log(chalk.redBright.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.yellowBright.bold(`\n - Word Count: ${chalk.bold.greenBright(words.length)}`));
console.log("==".repeat(50));