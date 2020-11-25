var player,shark,water,sharkimage,sharkimage2,playerimage,sharkgroup,sharpgroup2,backgroundimg,brokensubmarine,crash
var gameState="start"

function preload(){
  sharkImage=loadImage("shark.png")
  sharkImage2=loadImage("shark1.png")
  playerimage=loadImage("submarine.png")
  backgroundimg=loadImage("coralreaf.jpg")
  brokensubmarine=loadImage("BROKEN SUB.png")
  crash=loadSound("crash.mp3")
}
function setup() {
  createCanvas(1000,700)
  //water=createSprite(500,500,1000,1000)
  //water.shapeColor="blue"
  player=createSprite(500,500,50,50)
  player.shapeColor="yellow"
  player.addImage(playerimage)
  player.scale=0.5
  sharkgroup=new Group()
  sharkgroup2=new Group()
 
}

function draw() {
  
  background(backgroundimg)
  drawSprites()
  if(gameState==="start"){
  if(sharkgroup.isTouching(player)){
    player.addImage(brokensubmarine)
    gameState="end"
  }
  if(sharkgroup2.isTouching(player)){
    player.addImage(brokensubmarine)
    gameState="end"
  }

  
  if (keyDown("RIGHT_ARROW")){
    player.x=player.x+10
    
player.mirrorX(player.mirrorX() * -1);
  }
  if (keyDown("LEFT_ARROW")){
    player.x=player.x-10

    player.mirrorX(player.mirrorX() * -1);
  }
  if (keyDown("DOWN_ARROW")){
    player.y=player.y+10
  }
  if (keyDown("UP_ARROW")){
    player.y=player.y-10
  }
spawnShark()
spawnShark1()
edges=createEdgeSprites()
player.collide(edges)
//player.debug=true
player.setCollider("rectangle",0,0,100,100)
player.rotationToDirection=true
}
if(gameState==="end"){
  player.velocityX=0
  player.velocityY=4
  //player.y=650
  sharkgroup.setVelocityXEach=(0)
  sharkgroup2.setVelocityXEach=(0)
  crash.play()
}
}
function spawnShark(){
  if(frameCount % 60 === 0){
    var shark = createSprite(1000,random(0,700),100,100)
    shark.velocityX=-15
    shark.shapeColor="red"
    shark.addImage(sharkImage)
    shark.scale=0.1
    sharkgroup.add(shark)
  }
}
function spawnShark1(){
  if(frameCount % 60 === 0){
    var shark1 = createSprite(0,random(0,700),100,100)
    shark1.velocityX=15
    shark1.shapeColor="red"
    shark1.addImage(sharkImage2)
    shark1.scale=0.5
    sharkgroup2.add(shark1)
  }
}