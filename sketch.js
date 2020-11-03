const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var engine;
var world;

var object1,object2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var option1 = {
    isStatic: true
  }

  object1 = Bodies.circle(200,200,30, {restitution:1});
  World.add(world, object1);
  object2 = Bodies.rectangle(400,380,800,30, option1);
  World.add(world, object2);
}

function draw() {
  background("black");
  
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  rect(object2.position.x, object2.position.y, 800, 30);
  ellipse(object1.position.x, object1.position.y, 10, 10);


  drawSprites();
}