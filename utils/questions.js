// array of questions for user
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
        message: "What command should be entered to run tests?",
        default: "npm test"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license will your project use?",
        choices: ["None", "MIT", "Apache 2", "GNU GPL 3", "BSD 3 Clause"],
        default: 0
    }

];

module.exports = questions;