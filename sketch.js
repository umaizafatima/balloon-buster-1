var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload()
{
  
  backgroundImage = loadImage("background.jpg");
  arrowImage = loadImage("arrow.png");
  bowImage = loadImage("bow.png");
  red_balloonImage = loadImage("balloon 1.png");
  green_balloonImage = loadImage("balloon 2.png");
  pink_balloonImage = loadImage("balloon 3.png");
  blue_balloonImage = loadImage("balloon 4.png");
  
}



function setup() 
{
  createCanvas(600, 450);
  
  //creating background
  scene = createSprite(0,0,400,600);
  scene.addImage(backgroundImage);
  scene.scale = 2.0;

  // creating bow to shoot arrow
  bow = createSprite(595,220,20,20);
  bow.addImage(bowImage); 
  bow.scale = 0.2;
  
   score = 0    
}

function draw()
{
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0)
    {
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
function createArrow() 
{
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -5;
  arrow.lifetime = 100;
  arrow.scale = 0.2;
}

function redBalloon()
{
  var red = createSprite(0,Math.round(random(20, 370)), 5, 5);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 150;
}

function blueBalloon() 
{
  var blue = createSprite(0,Math.round(random(20, 370)), 5, 5);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
}

function greenBalloon() 
{
  var green = createSprite(0,Math.round(random(20, 370)), 5, 5);
  green.addImage(green_balloonImage);
  green.velocityX = 4;
  green.lifetime = 150;
}

function pinkBalloon() 
{
  var pink = createSprite(0,Math.round(random(20, 370)), 5, 5);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
}
