var bullet ;
var wall ;
var bullet_speed , bullet_weight ;
var thickness ;
var damage ;

function setup(){
  createCanvas(1000,500);
  thickness = random(22,83);
  bullet_speed = random(223,321);
  bullet_weight = random(30,52);
  console.log("t : " + thickness + " s : " + bullet_speed 
  + " w : " + bullet_weight);
  bullet = createSprite(150,250,50,7);
  bullet.debug = true ;
  bullet.velocityX = bullet_speed ;
  bullet.shapeColor = "white";
  wall = createSprite(900,250,thickness,height/2);
  wall.debug = true ;
}
function draw(){
  background("black");
  drawSprites();
  fill("yellow");
  text("X : " + mouseX + " Y : " + mouseY , mouseX , mouseY );
  textFont("Algerian");
  textSize(30);
  text("WALL MATERIAL TESTING",325,80); 
  if(bullet.x > wall.x){
    bullet.velocityX = 0 ;
    bullet.x = wall.x - thickness / 2 ;
    damage = 0.5 * bullet_weight * bullet_speed * bullet_speed / (thickness * thickness * thickness);
    console.log("damage : " + damage);
  }
  if(damage < 10){
    wall.shapeColor = "green";
    textFont("Calibri");
    textSize(20);
    text("The material is accepted", 400 , 400 );
  }
  if(damage > 10){
    wall.shapeColor = "red";
    textFont("Calibri");
    textSize(20);
    text("The material is rejected", 400 , 400 );
  }
}