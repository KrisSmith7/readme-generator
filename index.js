// Packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (Required)",
        name: 'username',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your Github username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: "What is your email address? (Required)",
        name: 'email',
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your github repository. (Required)',
        validate: githubLinkInput => {
            if (githubLinkInput) {
              return true;
            } else {
              console.log('Please enter the github link to your project!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: projectTitle => {
            if (projectTitle) {
              return true;
            } else {
              console.log('Please enter a title for your project!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: "Please enter a description of your project.",
        name: 'description',
        validate: function (description) {
            if (description) {
                return true;
            } else {
                console.log("A valid project description is required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'Boost_Software_License_1.0', 'None'],
        name: 'license'
    }
];

// Creates README file and logs message once created
function writeToFile(content) {
    return new Promise((resolve, reject) => { 
        fs.writeFile("README.md", content, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'   
            })
            console.log("README file created!")
        })
    })
}

// Holds logic for initializing app
function init() { 
    inquirer
    //prompts the array of questions
    .prompt(questions)
    // User data used in generateMarkdown logic
    .then((data) => {return generateMarkdown(data);})
    // returns generateMarkdown logic and uses it in the writetoFile function
    .then((content) => writeToFile(content))
    // catch all for any errors
    .catch((err) => {
    throw (err);
});
};

// Function call to initialize app
init();