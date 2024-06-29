// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description: ',
    },
    {
        type: 'input',
        name: 'intallation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license type: ',
        choices: [
            { name: 'MIT License', value: 'mit' },
            { name: 'GNU General Public License (GPL) v3.0', value: 'gpl' },
            { name: 'Apache License 2.0', value: 'apache' },
            { name: 'Mozilla Public License 2.0', value: 'mozilla' },
            { name: 'BSD 3-Clause License', value: 'bsd3' },
            { name: 'BSD 2-Clause License', value: 'bsd2' },
            { name: 'Creative Commons Zero v1.0 Universal (CC0)', value: 'cco' },
            { name: 'Eclipse Public License 2.0', value: 'eclipse' },
            { name: 'GNU Affero General Public License (AGPL) v3.0', value: 'agpl' },
            { name: 'GNU Lesser General Public License (LGPL) v3.0', value: 'lgpl' },
            { name: 'Unlicense', value: 'unlicense' },
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how others can contribute to your project: ',
    },
    {
        tests: 'input',
        name:'tests',
        message: 'Explain how others can test your project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the link to your GitHub repository: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
