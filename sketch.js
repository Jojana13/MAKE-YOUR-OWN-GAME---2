var bg, bgImg;
var player, playerImg;
var edges;



function preload(){
  bgImg = loadImage("Background.jpg");
  playerImg = loadImage("Players.png");

  

}

function setup() {
createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2-20,windowHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 2;

  player = createSprite(windowWidth-2500, windowHeight-300,50,50);
  player.addImage(playerImg);
  player.scale = 1.3;

  edges = createEdgeSprites();

}

function draw() {
  background(0); 

if(keyDown(UP_ARROW)){
  player.y = player.y-30;
}
if(keyDown(DOWN_ARROW)){
  player.y = player.y+30;
}
if(keyDown(RIGHT_ARROW)){
  player.x = player.x+30;
}
if(keyDown(LEFT_ARROW)){
  player.x = player.x-30;
}

player.collide(edges);


drawSprites();

}
