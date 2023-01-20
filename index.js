const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
/*
When a user enters the project title then it is displayed as the title of the README
When a user enters a description, 
installation instructions, 
usage information, 
contribution guidelines, 
and test instructions 
then this information is added to the sections of the README entitled 
Description, 
Installation, 
Usage, 
Contributing, and 
Tests
When a user chooses a license for their application 
from a list of options then a badge for that license 
is added near the top of the README and a notice is added 
to the section of the README entitled License that explains 
which license the application is covered under

When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
*/
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your git user name?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a description of your project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "How will your project be used?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How can people contribute",
    },
    {
        type: 'input',
        name: 'tests',
        message: "How should tests be handled?",
        default: "Standard"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license will your project use?",
        choices: ["MIT", "Apache", "GPL", "BSD"]
        default: 0
    }

];
/*
Take type, name, message, choices[, default, filter, loop] properties. 
(Note: default must be set to the index or value of one of the entries in choices)
*/
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
