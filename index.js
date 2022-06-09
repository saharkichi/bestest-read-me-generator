// TODO: Include packages needed for this application
    const inquirer = require('inquirer');
    //not sure if fs is needed because its already built into the language??
    const fs = require('fs');
    const {generateMarkdown, renderLicenseBadge, renderLicenseSection} = require('./generateMarkdown');
   
// TODO: Create an array of questions for user input
//based on the professional readme documentation requirements and acceptance criteria combined
const questions = [
    {
        type:'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type:'input',
        message: 'Who is the author of this project?',
        name: 'author'
    },
    {
        type:'input',
        message: 'What was your motivation?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'build'
    },
    {
        type: 'input',
        message: 'What problem does it solve',
        name: 'problem'
    },
    {   type: 'input',
        message: 'Brief description of project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the instructions for installation',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Add collaborators',
        name: 'collaborators'
    },
    {
        type: 'input',
        message: 'License?',
        name: 'provide license',
    },    
    {   type: 'input',
        message: 'How did you test your application',
        name: 'test'
    },
    {
        type: 'input',
        message: "Badges?",
        name: 'provide badges'
    },
    {
        type: 'input',
        message: "please input email",
        name: 'email'
    },
    {
        type: 'input',
        message: 'please input GitHub user name',
        name: 'GitHub-account'
    }
];

// TODO: Create a function to write README file
function writeToFile(response) {
    console.log(response)
    const license = response.license
    renderLicenseBadge(license);
    renderLicenseSection(license, response);
    fs.writeFile(`generated-readme.md`), generateMarkdown(response), (err) => err ? console.log(err) : console.log('Finished!')
}
// TODO: Create a function to initialize app
//need further clarification with writeToFile, noted to look back
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile(response);
    })
}

// Function call to initialize app
init();