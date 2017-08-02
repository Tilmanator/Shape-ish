
var currentDescription;
var shapeArray = [];
var inSet = false;
var points = 0;

function startGame() {
    $("#title").hide();
    $("#startButton").hide();
    $("#leftButton").show();
    $("#rightButton").show();
    myGameArea.start();
    shapeArray.push(new Rect(30,30,"red", 10, 120));
    shapeArray.push(new Circle(15,"green",10,120));
    shapeArray.push(new Triangle(30,30, "blue", 10,120));
    shapeArray.push(getShape(3, 30, 3, 10, 120));
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = $(document).width()-20;
        this.canvas.height = $(document).height()-30;
        this.context = this.canvas.getContext("2d");
        $("body").prepend(this.canvas);
        this.interval = setInterval(updateGameArea, 1);
        $(document).keydown(function(e) {
            switch(e.which) {
                case 37: // left
                analyseResult(1);
                break;

                case 38: // up
                break;

                case 39: // right
                analyseResult(0);
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
    },
    reset: function() {
        shapeArray.push(new Rect(30,30,"red", 10, 120));
        shapeArray.push(new Circle(15,"green",60,120));
    }
}


function updateGameArea(){
    myGameArea.clear();
    for (var i = 0; i < shapeArray.length; i++) {
      //shapeArray[i].x += Math.random() > 0.5 ? -1 : 1;
      shapeArray[i].update();
    };
}

function analyseResult(yes){
    if(yes == inSet){
      points += 50;
    }
    else{
      points -= 10;
    }
}


