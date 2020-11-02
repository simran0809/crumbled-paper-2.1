
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper,ground	
var world;
var backgroundImg;
	

	function preload(){
		backgroundImg=loadImage("house.png");
	}

function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground=new Ground(width/2,700,width,20);
	dustbin=new Dustbin(1100,680);
	
	paper=new Paper(200,300,70);
	
	
	

	Engine.run(engine);
	
  
}


function draw() {

  background(backgroundImg)
 
 
  ground.display();

  dustbin.display();
  paper.display();
 
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}





