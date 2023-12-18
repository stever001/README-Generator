// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Generate README content
function generateREADME(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](LICENSE)

This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, contact ${data.email}. Visit [GitHub](https://github.com/${data.username}).
`;
}

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];
// Prompt the user for information
inquirer.prompt(questions).then((answers) => {
    try {
        // Generate the README content
        const readmeContent = generateREADME(answers);

        // Write the content to README.md
        fs.writeFileSync('README.md', readmeContent);

        console.log('README.md generated successfully!');
    } catch (error) {
        console.error('Error generating README:', error);
    }
});
