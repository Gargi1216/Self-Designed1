const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground,bg;
var candyGirl;

function preload(){
   bg = loadImage("20200911_090932.jpg");
}

function setup(){
  var canvas = createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750,650,1500,20);
  candyGirl = new CandyGirl(100,600);
}
function draw(){
    background("pink");
    Engine.update(engine);
    //image(bg,10,20,displayWidth-20,displayHeight-50);
    
    
    ground.display();
    candyGirl.display();
    console.log(candyGirl.body.position.x);
    console.log(candyGirl.body.position.y);

}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.setVelocity(candyGirl.body,{x:5,y:0});
  }

  if(keyCode===UP_ARROW){
    Matter.Body.setVelocity(candyGirl.body,{x:0,y:-5});
  }
}