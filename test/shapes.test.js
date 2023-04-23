const {Circle, Square, Triangle} = require('../lib/shapes.js');

// Testing if the code works
describe('Testing', () => {

    // Testing for triangle
    describe('Triangle shape', () => {
        it('should be true if it is a triangle', () => {
            const triangleShape = new Triangle();
            triangleShape.setColor("lilac");

            expect(triangleShape.render()).toEqual(`<polygon points="0, 200 300,200 150, 0" fill="lilac"/>`);
        });
    });

    // Testing for square
    describe('Square shape', () => {
        it('should be true if it is a square', () => {
            const squareShape = new Square();
            squareShape.setColor("lilac");

            expect(squareShape.render()).toEqual(`<rect x="50" width="200" height="200" fill="lilac"/>`);
        });
    });

    // Testing for circle
    describe('Circle shape', () => {
        it('should be true if it is a circle', () => {
            const circleShape = new Circle();
            circleShape.setColor("lilac");

            expect(circleShape.render()).toEqual(`<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="lilac"/>`);
        });
    });
});