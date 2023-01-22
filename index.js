const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log("Success");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const { title } = data;
            writeToFile(title, data);
        });
}

// function call to initialize program
init();
