
var monkey , monkey_running;
var banana ,bananaImage, ObstacleImage;
var FoodGroup, ObstaclesGroup,Food,Obstacles;
var ground;
var score;
var SurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600, 600);
  SurvivalTime=0;
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  score=0;
  FoodGroup=createGroup();
  ObstaclesGroup=createGroup();
  
}

function draw() {
  background(255);
 
   if (ground.x < 0){
       ground.x = ground.width/2;
    }
   if(keyDown("space")) {
      monkey.velocityY = -12;
    }
  
   
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);

  
   drawSprites();
  
  Food();
  Obstacles();
   
    stroke("white");
    textSize(20);
    fill("white");
    text("Score "+ score, 500,50);

    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    score = score + Math.round(getFrameRate()/60);
    text("SurvivalTime "+ survivalTime, 100,50);
 
  
}
function Food() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
    var banana = createSprite(600,300,40,10);
    banana.addImage(bananaImage)
     
      
    banana.y = Math.round(random(120,200))
    banana.scale = 0.2;
    banana.velocityX = -3;
    banana.lifetime = 134;
    FoodGroup.add(banana);
    }
}

function Obstacles(){
   if (frameCount % 300 === 0){
   var Obstacle = createSprite(400,365,10,40);
   Obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
   var rand = Math.round(random(1,6));
    
   
    //assign scale and lifetime to the obstacle           
    Obstacle.scale = 0.2;
    Obstacle.lifetime = 300;
   
   //add each obstacle to the group
    Obstacle.addImage(ObstacleImage);
  
    ObstaclesGroup.add(Obstacle);
}
}
