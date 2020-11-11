const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine,ground,paper,dustbin1;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(800,690,1600,20);
  paper= new Paper(620,600,70);
  
	
	dustbin1 = new Dustbin(1250,600,140,160)
  

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  
    paper.display();
    ground.display();
    dustbin1.display();
  
  

 
}


function keyPressed(){
  if(keyCode === UP_ARROW){
      
    Matter.Body.applyForce(paper.body,paper.body.position,{x:205,y:-205});
  
  }

  }
