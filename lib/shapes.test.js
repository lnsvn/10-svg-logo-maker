const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    describe('color', () => {
        it('should set the fill color to lightblue', () => {
            const shape = new Circle("darkblue", "SVG", "lightblue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="lightblue" />');
        });
    });
});

describe('Square', ()=> {
    describe('color', () => {
        it('should set the fill color to green(#85abad)', () => {
            const shape = new Square("#f4f2e6", "SVG", "#85abad");
            expect(shape.render()).toEqual('<rect x="74" y="27" width="150" height="150" fill="#85abad" />');
        });
    });
});

describe('Triangle', () => {
    describe('color', () => {
        it('should set the fill color to pink', () => {
            const shape = new Triangle("red", "SVG", "pink");
            expect(shape.render()).toEqual('<polygon points="150,15 250,185 50,185" fill="pink" />');
        });
    });
});

