const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, red, pig, log;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    red = new Red(200, 1, 35);
    pig = new Spig(150, 150);
    log = new Log(637, 433, 150, PI/2)
    ground = new Ground(width/2,height-20,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    log.display();
    red.display();
    pig.display();
    ground.display();
}