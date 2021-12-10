// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')
const fs = require ('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (Required)",
        name: 'username',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
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
    // {
    //     type: 'input',
    //     name: 'link',
    //     message: 'Enter the GitHub link to your project. (Required)',
    //     validate: githubLinkInput => {
    //         if (githubLinkInput) {
    //           return true;
    //         } else {
    //           console.log('Please enter the github link to your project!');
    //           return false;
    //         }
    //       }
    // },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: projectTitle => {
            if (projectTitle) {
              return true;
            } else {
              console.log('Please enter the github link to your project!');
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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('newReadme.md', fileName, data, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(JSON.stringify, (answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
    // inquirer.prompt(questions)
    // .then(console.log());
    // .then(writeToFile())

}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README