
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-35, width,10);
	box1 = new Dustbin(980,450,200,20);
	box2 = new Dustbin(880,410,20,100);
	box3 = new Dustbin(1080,410,20,100);
	paper = new Paper(110,460,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  Engine.update(engine);


  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}

}



