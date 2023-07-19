const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt the user for input
function promptUser() {
    return inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => {
              if (input.length > 3) {
                return 'Please enter up to three characters.';
              }
              return true;
            },
          },
          {
            name: 'textColor',
            message: 'Enter the text color:',
          },
          {
            name: 'shape',
            type: 'list',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square'],
          },
          {
            name: 'shapeColor',
            message: 'Enter the shape color:',
          },
    ]);
}

// Generate the SVG logo 
function generateLogo(text, textColor,shape, shapeColor) {
    // Implement the logic to generate the logo 
    let logo;
    switch (shape) {
      case 'Circle':
        logo = new Circle();
        break;
      case 'Triangle':
        logo = new Triangle();
        break;
      case 'Square':
        logo = new Square();
        break;
      default:
        console.log('Invalid shape');
        return;

}

logo.setColor(shapeColor);

const svgContent = `
  <svg width="300" height="200">
    ${logo.render()}
    <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;
// Write the SVG logo to a file
fs.writeFileSync('logo.svg', svgContent);
console.log('Generated logo.svg');
}
// run the application

function run() {
    promptUser()
    .then((answers) => {
        generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    })
    .catch((error) => {
        console.error(error);
    });
}

run();