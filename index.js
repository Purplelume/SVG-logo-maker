// List of application that this generator needs
const fs = require('fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require('./lib/shapes.js')

// Switch statement to get the differents shapes
const shapes = function(data) {
    switch(data.shape){
        case "Triangle":
            const square = new Square(data.text, data.textColor, data.shapeColor);
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${square.render()}<text x="150" y="125" font-size="60" 
            text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`
        
        case "Square":
            const triangle= new Triangle(data.text, data.textColor, data.shapeColor);
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${triangle.render()}<text x="150" y="125" font-size="60" 
            text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`

        case "Circle":
            const circle = new Circle(data.text, data.textColor, data.shapeColor);
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${circle.render()}<text x="150" y="125" font-size="60" 
            text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`
    }
}

// Inquirer prompt to store user data for SVG logo
const questions = function() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Enter MINIMUM 1 character and MAXIMUM 3 characters for your SVG logo:',
        name: "text",
        validate: (text) => {
            if (text.length > 0 && text.length < 4 ) {
                return true;
            }
            console.log("\nError... Must enter MINIMUM 1 character and MAXIMUM 3 characters.")
            return false;
        }
      },
      {
        type: 'input',
        message: 'Enter the color of your text:',
        name: "textColor"
      },
      {
        type: 'list',
        message: 'Select a shape from the list:',
        name: "shape",
        choices: ['Triangle', 'Square', 'Circle'],
      },
      {
        type: 'input',
        message: 'Enter the desired shape color:',
        name: "shapeColor"
      },
])
.then((data) =>
    fs.writeFile(`logo.svg`, shapes(data), (err) =>
    err ? console.error(err) : console.log('Logo created!')
    ))
};

questions();