const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;

var engine, world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution: 1
  }

  ball = Body.circle(200,100,20, ball_options);
  World.add(world,ball);

  var ground_options={
    isStatic: true
  }
  ground = Body.rectangle(200,380,400,20, ground_options);
  World.add(world,ground);

}

function draw() {
  background("black"); 
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  drawSprites();
}