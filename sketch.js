var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var left ,right,bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 leftsprite=createSprite(250,620,20,80);
	 leftsprite.shapeColor="red";

	 leftbody = Bodies.rectangle(250, 620, 100, 20 , {isStatic:true} );
 	World.add(world, leftbody);

	 rightsprite=createSprite(490,620,20,80);
	 rightsprite.shapeColor="red";

	 rightbody = Bodies.rectangle(490,620,20,80,  {isStatic:true} );
 	World.add(world, leftbody);

	 bottomsprite=createSprite(370,650,230,20);
	 bottomsprite.shapeColor="red";

	 bottombody = Bodies.rectangle(370,650,230,20 , {isStatic:true} );
 	World.add(world, leftbody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false)
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



