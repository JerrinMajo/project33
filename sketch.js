const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowfall=[];

function preload(){
  backgroundImg=loadImage("snow3.jpg");

}

function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  //createSprite(400, 200, 50, 50);
  
  
  
}

function draw() {
background(backgroundImg); 
  
 Engine.update(engine);

 if(frameCount%30===0){
  snowfall.push(new Snow(random(0,800),0));
}

  for(var k = 0; k < snowfall.length; k++){
    snowfall[k].display();
  }
  

  
  drawSprites();
}

