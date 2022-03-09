var ball;
var position, database


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();

    //.ref to particurly property in data base
    var ballPosition=database.ref("ball/position")

    //.on is a listner that listens to changes to happening in the data base
    //if there is a change it will exicute in the functions writting after value comma
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}



function writePosition(x,y){
database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y
})
}

function readPosition(data){
position=data.val();
ball.x=position.x
ball.y=position.y
}
function showError(){
console.log("this is how a show error looks")
}
