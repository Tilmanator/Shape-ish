
var currentDescription;
var shapeArray = [];

function startGame() {
    myGameArea.start();
    shapeArray.push(new Rect(30,30,"red", 10, 120));
    shapeArray.push(new Circle(15,"green",60,120));
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = $(document).width()-20;
        this.canvas.height = $(document).height()-30;
        this.context = this.canvas.getContext("2d");
        $("body").prepend(this.canvas);
        this.interval = setInterval(updateGameArea, 10);
        $(document).keydown(function(e) {
            switch(e.which) {
                case 37: // left
                alert('left');
                break;

                case 38: // up
                break;

                case 39: // right
                alert('right');
                break;

                case 40: // down
                break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function updateGameArea(){
    myGameArea.clear();
    for (var i = 0; i < shapeArray.length; i++) {
      shapeArray[i].x += Math.random() > 0.5 ? -1 : 1;
      shapeArray[i].update();
    };
}

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
    this.x = x;
    this.y = y;
    this.update = function(){
      var context = myGameArea.context;
      context.beginPath();
      context.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = colour;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      //context.stroke();
    }
}

