var dog
var dogImg
var database
var foodS
var foodStock

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  dog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dogImg=createSprite();
  dogImg.addImage(dogImg);
  dog=createSprite();
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(green);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
  }
  drawSprites();
  text("Food remaining");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
