
var currentDescription;
var shapeArray = [];
var inSet = false;
var points = 0;
var numShapes = 3;
var shapeOptions = 2;
var numColours = 3;

function startGame() {
    $("#title").hide();
    $("#startButton").hide();
    $("#leftButton").show();
    $("#rightButton").show();
    $("#points").text("Points: "+points).show();
    myGameArea.start();
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
        this.reset();
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    reset: function() {
        var displayShape = Math.floor(Math.random()*shapeOptions);
        var displayColour = Math.floor(Math.random()*numColours);
        currentDescription = colours[displayColour]+" "+shapes[displayShape];
        $("#message").html(currentDescription).show();
        var addCurrent = Math.random() > 0.5 ? 1 : 0;
        inSet = addCurrent;
        for(var i=0; i< numShapes; i++){
            if(addCurrent){
                shapeArray.push(getShape(displayShape, 30, displayColour, 10,120));
                addCurrent = false;
            }
            else{
                var shp = Math.floor(Math.random()* shapeOptions);
                var col = Math.floor(Math.random()* numColours);
                if(shp == displayShape && col == displayColour){
                    --i;
                    continue;
                }
                shapeArray.push(getShape(shp, 30, col, 10 + 40 * i, 120));
            }

        }
    }
}


function updateGameArea(){
    $("#points").html("Points: "+points);
    myGameArea.clear();
    for (var i = 0; i < shapeArray.length; i++) {
      shapeArray[i].update();
    };
}

function analyseResult(yes){
    if(yes == inSet){
      points += 50;
    }
    else{
      points -= 10;
      $("#message").animate({
        'marginLeft' : "-=30px" //moves left
        }, 100);
      $("#message").animate({
        'marginLeft' : "+=60px" //moves left
        },100);
      $("#message").animate({
        'marginLeft' : "-=30px" //moves left
        },100);
    }

    if(points >= 100 && shapeOptions < 3){
        ++shapeOptions;
    }
    if(points >= 150 && numColours < 4){
        ++numColours;
    }
    if (points >= 250 && numShapes < 4) {
        ++numShapes;
    };
    shapeArray.splice(0,shapeArray.length);
    myGameArea.reset();
}


