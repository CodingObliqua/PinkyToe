// shapes.js 
class Shape {
    constructor() {
        this.color = '';
}
setColor(color) {
    this.color = color;
}

render() {
    throw new Error('You must implement the render method')
}
}



// Triangle class 

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}



// Circle class


class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}


//Square Class 

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports ={ Triangle, Circle, Square};