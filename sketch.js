const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundimg;
function preload() {
  getbackgroundimg();
}

function setup() {
  var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

    
    stand = new Stand(390,300,250,10)
    stand1 = new Stand(700,200,200,10)
    block16 =new Block(710,190,30,40)
    block17 =new Block(715,190,30,40)
    block18 = new Block(720,190,30,40)
    block19 = new Block(705,170,30,40)
    block20 = new Block(710,170,30,40)
    block21=new Block(712,150,30,40)
   block1 = new Block(345,275,30,40)
   block2 =new Block(353,275,30,40)
   block3 =new Block(361,275,30,40)
   block4 =new Block(369,275,30,40)
   block5 =new Block(377,275,30,40)
   block6=new Block(385,275,30,40)
   block7=new Block(393,275,30,40)
   block8=new Block(352,265,40,30)
   block9=new Block(367,265,40,30)
   block10=new Block(380,265,40,30)
   block11=new Block(395,265,40,30)
   block12=new Block(340,255,40,30)
   block13=new Block(355,255,40,30)
   block14=new Block(370,255,40,30)
   block15=new Block(357,245,40,40)
    ball = new Ball(300,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:50});
    
}

function draw() {
  if(backgroundimg){
        background(backgroundimg);
  }
  Engine.update(engine)
  stroke(3)
  fill("red")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  slingshot.display();
ball.display();
stand.display();
stand1.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
    slingshot.attach(ball.body);
  }
}
async function getbackgroundimg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  
  if(hour>=0600 && hour<=1900){
      bg = "night.png";
  }
  else{
      bg = "day.png";
  }

  backgroundimg = loadImage(bg);
}