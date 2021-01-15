var canvas;
var music;

function preload(){
music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(800,600);
collider1 = createSprite(154,580,140,35)
collider1.shapeColor="orange";
collider2 = createSprite(298,580,140,35)
collider2.shapeColor="red";
collider3 = createSprite(730,580,140,35)
collider3.shapeColor="blue";
collider4 = createSprite(586,580,140,35)
collider4.shapeColor="green";
collider5 = createSprite(442,580,140,35)
collider5.shapeColor="yellow";
collider6 = createSprite(10,580,140,35)
collider6.shapeColor="purple";
boundary1 = createSprite(800,350,5,800)
boundary1.shapeColor="black";
boundary2 = createSprite(400,0,800,5)
boundary2.shapeColor="black";
boundary3 = createSprite(0,300,5,800)
boundary3.shapeColor="black";
ball = createSprite(random(20,750))
ball.shapeColor="white";
ball.velocityX=4;
ball.velocityY=4;
ball.scale=0.3;



    

}

function draw() {
background('black');
createEdgeSprites();
drawSprites();
if(collider1.isTouching(ball)&& ball.bounceOff(collider1)){
ball.shapeColor ="cyan";
music.play();
}
if(collider2.isTouching(ball)&& ball.bounceOff(collider2)){
ball.shapeColor ="pink";
music.play();
}
if(collider3.isTouching(ball)&& ball.bounceOff(collider3)){
ball.shapeColor ="brown";
music.play();
}
if(collider4.isTouching(ball)&& ball.bounceOff(collider4)){
ball.shapeColor ="gold";
music.play();

}
if(collider5.isTouching(ball)&& ball.bounceOff(collider5)){
ball.shapeColor ="grey";
music.play();

}
if(collider6.isTouching(ball)&& ball.bounceOff(collider6)){
ball.shapeColor ="lime";
ball.velocityX=0;
}
if(boundary1.isTouching(ball)&& ball.bounceOff(boundary1)){
    ball.shapeColor ="white";}
if(boundary2.isTouching(ball)&& ball.bounceOff(boundary2)){
        ball.shapeColor ="white";}
if(boundary3.isTouching(ball)&& ball.bounceOff(boundary3)){
            ball.shapeColor ="white";}
        }
