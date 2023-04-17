class Shape {
    constructor (text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
}

class Circle extends Shape {
    constructor (text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
        this.shape = `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />`;
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
    }
}

class Square extends Shape {
    constructor (text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
        this.shape =`<rect width="200" height="200" style="fill:${this.shapecolor}" />`
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
    }
}

class Triangle extends Shape {
    constructor (text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
        this.shape = `<polygon points="150,15 250,185 50,185" style="fill:${this.shapecolor}" />`
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
    }
}

const generateSvg = (data) => {
    if(data.shape === "circle") {
        const circle = new Circle (data.text, data.textcolor, data.shapecolor)
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${circle.shape}
  
            ${circle.text}
  
        </svg>`
    }else if(data.shape === "square") {
        const square = new Square (data.text, data.textcolor, data.shapecolor)
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${square.shape}
  
            ${square.text}
  
        </svg>`
    }else if(data.shape === "triangle") {
        const triangle = new Triangle (data.text, data.textcolor, data.shapecolor)
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${triangle.shape}
  
            ${triangle.text}
  
        </svg>`
    }
}


module.exports = {Circle, Square, Triangle, generateSvg};