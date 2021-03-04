var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;


function preload(){
    music = loadSound("music.mp3");
 
}


function setup(){
    canvas = createCanvas(600,600);

    surface1 = createSprite(70, 590, 140, 15);
    surface1.shapeColor = "red";
  
    surface2 = createSprite(225, 590, 140, 15);
    surface2.shapeColor = "green";
  
    surface3 = createSprite(375, 590, 140, 15);
    surface3.shapeColor = "blue";
  
    surface4 = createSprite(530, 590, 140, 15);
    surface4.shapeColor = "yellow";

    ball = createSprite(20, 300, 25, 25);
    ball.shapeColor = "white";
    ball.velocityX = 8;
    ball.velocityY = 8;
    ball.x = Math.round(random(20, 550));

}

function draw() {
    background(0);
  
    var edges = createEdgeSprites();

    ball.bounceOff(edges);

    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "red";
      
    }
    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
     
    }
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
       ball.shapeColor = "blue";
       music.play();
    }
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
       ball.shapeColor = "yellow";
    }

   drawSprites();
    
}
