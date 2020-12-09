
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper;
var Ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Ground = new ground(width/2,670,width/20);
Paper = new paper(200,450,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper.display();
  Ground.display();
  
  drawSprites();
 
}



