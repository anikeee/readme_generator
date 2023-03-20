const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use for your application?',
        choices: ['MIT', 'Apache 2.0'],
    },

    // ... add more questions here
];

function generateBadge(license) {
    const licenseInfo = {
        'MIT': {
            badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            text: 'This project is licensed under the MIT License.',
        },
        'Apache 2.0': {
            badge: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            text: 'This project is licensed under the Apache License, Version 2.0.',
        },
        // ... add other licenses here
    };

    return licenseInfo[license];
}


function index(answers) {
    const { title, description, installation, usage, license, contributing, tests, githubUsername, email } = answers;
    const { badge, text } = generateBadge(license);

    return `
# ${title}
${badge}

## Description
${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${text}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, please feel free to contact me:
- [GitHub Profile](https://github.com/${githubUsername})
- Email: ${email}
`;
}

inquirer.prompt(questions).then((answers) => {
    const readmeContent = index(answers);
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md generated successfully!');
    });
});
