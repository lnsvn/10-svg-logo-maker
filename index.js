// Import fs, inquirer, and function
const fs = require('fs');
const inquirer = require('inquirer');
// const generateSvg = require('./lib/shapes');

// Logo design prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Input text (up to 3  characters).',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter text color.',
            name: 'textcolor',
        },
        {
            type: 'list',
            message: 'Choose a shape.',
            name: 'shape',
            choices: [
                'circle', 'square', 'triangle'
            ],
        },
        {
            type: 'input',
            message: 'Enter shape color.',
            name: 'shapecolor',
        },
    ])
    .then((data) => {
        const fileName = './examples/logo.svg';
        
        fs.writeFile(fileName, data, (err) => 
            err ? console.error(err) : console.log('Generated logo.svg')
        )
    });
