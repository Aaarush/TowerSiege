const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var slingy;
var canonFodder;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,500,250,10);
  stand2 = new Stand(690,400,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  blockB1 = new Block(600,275,30,40);
  blockB2 = new Block(630,275,30,40);
  blockB3 = new Block(660,275,30,40);
  blockB4 = new Block(690,275,30,40);
  blockB5 = new Block(720,275,30,40);
  blockB6 = new Block(750,275,30,40);
  blockB7 = new Block(780,275,30,40);
  //level two
  blockB8 = new Block(630,235,30,40);
  blockB9 = new Block(660,235,30,40);
  blockB10 = new Block(690,235,30,40);
  blockB11 = new Block(720,235,30,40);
  blockB12 = new Block(750,235,30,40);
  //level three
  blockB13 = new Block(660,195,30,40);
  blockB14 = new Block(690,195,30,40);
  blockB15 = new Block(720,195,30,40);
  //top
  blockB16 = new Block(690,155,30,40);
  
  canonFodder = Bodies.circle(50,200,20);
  World.add(world,canonFodder);
  slingy = new SlingShot(this.canonFodder,{x:100,y:460});


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("try to beat in one hit!",100,100);
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill(rgb(125,0,0));
  stand2.display();
  
  fill(rgb(0,62.5,62.5));
  blockB1.display();
  blockB2.display();
  blockB3.display();
  blockB4.display();
  blockB5.display();
  blockB6.display();
  blockB7.display();
  //level two
  fill(rgb(0,0,125));
  blockB8.display();
  blockB9.display();
  blockB10.display();
  blockB11.display();
  blockB12.display();
  //level three
  fill(rgb(0,125,0));
  blockB13.display();
  blockB14.display();
  blockB15.display();
  //top
  fill(rgb(12,66,66));
  blockB16.display();

  slingy.display();

  imageMode(CENTER);
  image(polygon_img,canonFodder.position.x,canonFodder.position.y,40,40);

}
function mouseDragged(){
  Matter.Body.setPosition(this.canonFodder, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingy.fly();
}