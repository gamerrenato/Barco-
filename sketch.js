
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blç");
  spriteName.addImage(seaImg);
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/2;
  } 
  
  drawSprites();

 
}
