const inquirer = require('inquirer');
const fs = require('fs');

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
    .then((data) => 
        // console.log(data),
        console.log('Generated logo.svg')
        // fs.writeFile('logo.svg', data)
    );
