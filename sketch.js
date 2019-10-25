var paddle,ball,brick1,brick2,brick3,brick4,brick5;
var wall1,wall2,wall3,wall4;
var score;


function setup() {
  
createCanvas(400,400);
  
   paddle = createSprite(305, 387,80,10);
 ball  = createSprite(200,250,10,10);
  brick1 =createSprite(60, 100, 50, 10);
  brick2=createSprite(130, 100, 50, 10);
 brick3 = createSprite(200, 100, 50, 10);
 brick4= createSprite(270, 100, 50, 10);
 brick5 = createSprite(340,100,50,10);
   wall1 = createSprite(0,0,800,10);
 wall2 = createSprite(0,0,10,800);
 wall3 = createSprite(400,400,10,800);
 wall4 = createSprite(0,400,800,10);
score=0;
}
function draw(){
  background("white");
  
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(paddle);
  
  text(score,50,30);

   paddle.x=World.mouseX;
  
  if (keyDown("SPACE")){
    ball.velocityX=4;
    ball.velocityY=4;
  }
if (ball.isTouching(brick1)) {
   ball.bounceOff(brick1);
   brick1.destroy();
 score=score+1;

}
   
   if (ball.isTouching(brick2)) {
   ball.bounceOff(brick2);
   brick2.destroy();
 score=score+1;
   }
   
   if (ball.isTouching(brick3)) {
   ball.bounceOff(brick3);
   brick3.destroy();
 score=score+1;
   }
   
   if (ball.isTouching(brick4)) {
   ball.bounceOff(brick4);
   brick4.destroy();
 score=score+1;
   }
 
   if (ball.isTouching(brick5)) {
   ball.bounceOff(brick5);
   brick5.destroy();
 score=score+1;
   }
 
  if (ball.collide(wall4)) {
    ball.destroy();
    paddle.destroy();
    textSize(30);
    fill("red");
        text("YOU LOST", 50, 300);
        

  }
  if(score===5){
    ball.destroy();
    paddle.destroy();
    textSize(30);
    fill("green");
    text("You Won",50,300);
  }
  
  drawSprites();
}
