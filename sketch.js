var life=3;
function preload (){
  player2=loadImage("Player.png")
  obImg=loadImage("Images/Obstacles.png")
}

function setup() {
  createCanvas(400, 400);
    wall1 = createSprite(200, 5, 400, 10);
  wall2 = createSprite(200, 395, 400, 10);
  wall3 = createSprite(5, 200, 10, 400);
  wall4 = createSprite(395, 200, 10, 400);
  wall5 = createSprite(50, 250, 10, 300);
  wall6 = createSprite(100, 50, 100, 10);
  wall7 = createSprite(75, 100, 60, 10);
  wall8 = createSprite(100, 175, 10, 160);
  wall9 = createSprite(150, 125, 10, 160);
  wall10 =  createSprite(100, 350, 10, 110);
  wall11 = createSprite(150, 350, 110, 10);
  wall12 = createSprite(175, 250, 160, 10);
  wall13 = createSprite(150, 275, 10, 60);
  wall14 = createSprite(200, 325, 10, 60);
  wall15 = createSprite(250, 350, 10, 110);
  wall16 = createSprite(200, 200, 110, 10);
  wall17 = createSprite(300, 300, 110, 10);
  wall18 = createSprite(350, 350, 110, 10);
  wall19 = createSprite(350, 175, 10, 260);
  wall20 = createSprite(250, 165, 10, 75);
  wall21 = createSprite(250, 125, 110, 10);
  wall22 = createSprite(200, 65, 10, 130);
  wall23 = createSprite(300, 50, 110, 10);
  wall24 = createSprite(300, 175, 10, 110);
  player = createSprite(350,370);
player.addImage(player2);
player.scale=0.10;
player.rotation=-90;
wallGroup=createGroup()
wallGroup.add (wall1)
wallGroup.add (wall2)
wallGroup.add (wall3)
wallGroup.add (wall4)
wallGroup.add (wall5)
wallGroup.add (wall6)
wallGroup.add (wall7)
wallGroup.add (wall8)
wallGroup.add (wall9)
wallGroup.add (wall10)
wallGroup.add (wall11)
wallGroup.add (wall12)
wallGroup.add (wall13)
wallGroup.add (wall14)
wallGroup.add (wall15)
wallGroup.add (wall16)
wallGroup.add (wall17)
wallGroup.add (wall18)
wallGroup.add (wall19)
wallGroup.add (wall18)
wallGroup.add (wall19)
wallGroup.add (wall20)
wallGroup.add (wall21)
wallGroup.add (wall22)
wallGroup.add (wall23)
wallGroup.add (wall24)
obGroup=createGroup()
bulletGroup=createGroup();
obstacles()
}

function draw() {
  
  background(0);
  
text(mouseX+","+mouseY,mouseX,mouseY);

if(keyIsDown(LEFT_ARROW)){
player.x -= 4
player.rotation=-90;
}
if(keyIsDown(RIGHT_ARROW)){
  player.x += 4
  player.rotation=90; 
  }
  if(keyIsDown(UP_ARROW)){
    player.y -= 4
    player.rotation=0;
    }
    if(keyIsDown(DOWN_ARROW)){
      player.y += 4
      player.rotation=180;
      }

      if(player.isTouching(wallGroup)){
       player.x=350
       player.y=370 
      }

   
 if(keyDown("space")&&frameCount%5==0){
  bullet=createSprite(player.x,player.y,10,10)
  bulletGroup.add(bullet)
  if(player.rotation===90){
    bulletGroup.setVelocityEach(4,0)
  }
  if(player.rotation===-90){
    bulletGroup.setVelocityEach(-4,0)
  }
  if(player.rotation===0){
    bulletGroup.setVelocityEach(0,-4)
  }
  if(player.rotation===180){
    bulletGroup.setVelocityEach(0,4)
  }
  
 }
 for(var i = 0; i<obGroup.length;i++){
   if(bulletGroup.isTouching(obGroup.get(i))){
    obGroup.get(i).destroy()
   }
 } 
 if(player.isTouching(obGroup)){
  player.x=350
       player.y=370 
       life=life-1
 }
 for(var i = 0; i<bulletGroup.length;i++){
 if(bulletGroup.get(i).isTouching(wallGroup)){
  bulletGroup.get(i).destroy()
 }
}
  drawSprites();
  
}

function obstacles (){
  for(var k = 0; k<15;k++){
var ob=createSprite(random(40,320),random(40,320))
ob.addImage(obImg)
ob.scale=0.07
for(var i = 0; i<wallGroup.length;i++){
if(ob.isTouching(wallGroup.get(i))){
  ob.x=wallGroup.get(i).x+20
  ob.y=wallGroup.get(i).y+20
}
}
obGroup.add(ob)

}
}
