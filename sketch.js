//Create variables here
var dog,dog1,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  dog= loadImage("images/dogImg.png");
  happyDog= loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  database=firebase.database();
  
  dog1= createSprite(300,300,100,100);
  dog1.addImage(dog);
  dog.scale=5;
 

  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
  
}


function draw() { 
  background(46,139,47);
  //imageMode(CENTER);
  
  //image(dog,300,300,200,250);
  
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happyDog);
   // image(happyDog,300,300,200,200);
  }

  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  stroke("yellow")
  text("NOTE:Press UP_ARROW key to feed dog",100,30);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
   if(x<=0){
     x=0;
   }
   else{
     x=x-1;
   }
   database.ref('/').update({
      Food:x
   })
}




