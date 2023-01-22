const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName, data) {

    const filepath = path.join("", `${fileName}.md`);
    
    fs.writeFile(filepath, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log("Success");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README", data);
        });
}

// function call to initialize program
init();
