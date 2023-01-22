// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "Please enter your git user name?",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address?",
    },
    {
        type: 'input',
        name: 'title',
        message: "Please enter the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a description of your project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Describe the installation process",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe the steps to run the project",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please explain how a developer can make a contribution to the project",
    },
    {
        type: 'input',
        name: 'tests',
        message: "If you have tests in place, please explain how these can be run",
        default: "N/A"
    },
    {
        type: 'list',
        name: 'license',
        message: "Under which license would you like your project released?",
        choices: ["None", "MIT", "Apache 2", "GNU GPL 3", "BSD 3 Clause"],
        default: 0
    }

];

module.exports = questions;