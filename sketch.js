var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
                      
  ground = createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.x=ground.width/2
  console.log(ground.x);

}


function draw() {

if (keyDown(space)){
  monkey.velocityY = 2
}
  bananna();
  
drawSprites();
}

function bananna(){
 if (frameCount % 80 === 0){
   door = createSprite(200,-50);
   door.addImage(doorimage);

   bananna.y = Math.round(random(120,200));
   bananna.lifetime = 300
   FoodGroup.add(bananna);
 }
}

function obstacle(){
  if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
  }          
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
}