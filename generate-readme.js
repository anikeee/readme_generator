const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    // ... add more questions here
];

function generateBadge(license) {
    const licenseInfo = {
        'MIT': {
            badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            text: 'This project is licensed under the MIT License.',
        },
        // ... add other licenses here
    };

    return licenseInfo[license];
}

function generateReadme(answers) {
    const { title, description, installation, usage, license, contributing, tests, githubUsername, email } = answers;
    const { badge, text } = generateBadge(license);

    return `
# ${title}
${badge}

## Description
${description}

