var colours = ["red", "blue", "orange", "green", "yellow"];

function Rect(width, height, colour, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
      ctx = myGameArea.context;
      ctx.fillStyle = colour;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function Circle(radius, colour, x, y){
    this.radius = radius;
    this.x = x + radius;
    this.y = y + radius;
    this.update = function(){
      context = myGameArea.context;
      context.beginPath();
      context.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = colour;
      context.fill();
    }
}

function Triangle(width, height, colour, x, y){
    this.width = width;
    this.height = height;
    this.x=x;
    this.y=y;
    this.update = function() {
      context = myGameArea.context;
      context.beginPath();
      context.moveTo(this.x,this.y + this.height);
      context.lineTo(this.x+ (this.width/2), this.y);
      context.lineTo(this.x + this.width, this.y + this.height);
      context.lineTo(this.x, this.y+ this.height);
      context.closePath();
      context.fillStyle = colour;
      context.fill(); 
    }
}

function Star (width, height, colour, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function () {
      context = myGameArea.context;
      context.beginPath();
      context.moveTo(this.x + this.width*1/5,this.y + this.height);
      context.lineTo(this.x+ (width/2), this.y);
      context.lineTo(this.x + (this.width*4/5), this.y + this.height);
      context.lineTo(this.x, this.y+ this.height*2/5);
      context.lineTo(this.x + this.width, this.y+ this.height*2/5);
      context.lineTo(this.x + this.width/5,this.y + this.height);
      context.closePath();
      context.fillStyle = colour;
      context.fill();
  }
}

function getShape(i, size, numColours, x, y) {
  switch(i){
    case 0:
      return new Rect(size,size, colours[Math.floor(Math.random()*numColours)], x, y);
    case 1:
      return new Circle(size/2, colours[Math.floor(Math.random()*numColours)], x, y);
    case 2:
      return new Triangle(size, size, colours[Math.floor(Math.random()*numColours)], x, y);
    case 3:
      return new Star(size, size, colours[Math.floor(Math.random()*numColours)], x, y); 
  }

}
