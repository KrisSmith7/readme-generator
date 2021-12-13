// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "None") {return ""}
  else {
    return `![badge](https://img.shields.io/badge/License-${data.license}-orange)`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "None") {
    return false}
   else {
    return `"For information on ${data.license}, visit [https://opensource.org/licenses/](https://opensource.org/licenses/)"`
}}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!renderLicenseLink(data)) {
    return `## License 
    This project is not covered under a specific license.`}
    else if (renderLicenseBadge(data) && renderLicenseLink(data)) {
    return `## License
    ${renderLicenseLink(data)}
    `}
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 
  ${data.installation}

  Link to Github Repo: [${data.link.trim().toLowerCase()}](${data.link.trim().toLowerCase()})

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Contact the developer with any questions!
  Github User: [https://github.com/${data.username}](https://github.com/${data.username.trim().toLowerCase()})
  Email: [${data.email.trim().toLowerCase()}](${data.email.trim().toLowerCase()})
`;
};


module.exports = generateMarkdown;