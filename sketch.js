
var backImg;
var cityGroup1;
var cityGroup2;
var trainGroup;

var foodtruck;

var truckUp,truckDown,truckLeft,truckRight;
var homelessMan;

var gameState = 0;
var level = 1 ;

function preload(){
  //background images for the levels
    backImg1 = loadImage("Images/city.jpg");
    backImg2 = loadImage("Images/city2.png");
    backImg3 = loadImage("Images/city3.jpg");
    
    //Animations for truck movement
    truckDown = loadImage("Images/truckDown.jpeg");
    truckUp = loadImage("Images/truckUp.jpeg");
    truckLeft = loadImage("Images/truckLeft.jpeg");
    truckRight = loadImage("Images/truckRight.jpeg");
    trainImage = loadImage("Images/trainimg.png");

}

function setup() {
  createCanvas(800,600);
 // createSprite(400, 200, 50, 50);

 //level 1 Maze 
 cityGroup1 = new Group();
 trainGroup = new Group();
 
 building1 = createSprite(60,93,170,180);
 building2 = createSprite(60,550,170,95);
 building3 = createSprite(340,350,160,220);
 building4 = createSprite(340,560,150,100);
 building5 = createSprite(650,560,360,100);

 swimmingpool = createSprite(60,345,170,246);
 helipad = createSprite(345,90,165,196);
 footballground = createSprite(580,90,230,190);
 carparking = createSprite(580,340,220,230);
 
 patch1 = createSprite(205,93,40,180);
 patch2 = createSprite(205,348,40,230);
 patch3 = createSprite(205,560,40,100);
 patch4 = createSprite(770,90,60,180);
 patch5 = createSprite(770,348,60,230);

 cityGroup1.add(building1);
 cityGroup1.add(building2);
 cityGroup1.add(building3);
 cityGroup1.add(building4);
 cityGroup1.add(building5);

 cityGroup1.add(patch1);
 cityGroup1.add(patch2);
 cityGroup1.add(patch3);
 cityGroup1.add(patch4);
 cityGroup1.add(patch5);

 cityGroup1.add(swimmingpool);
 cityGroup1.add(helipad);
 cityGroup1.add(footballground);
 cityGroup1.add(carparking);

 cityGroup1.setVisibleEach(false);


 //Level 2 Maze 

 cityGroup2 = new Group();
//row 1
 home1 = createSprite(30,50,106,180);
 home2 = createSprite(30,234,106,136);
 home3 = createSprite(40,356,540,50);
 home4 = createSprite(40,450,540,80);
 home5 = createSprite(40,560,100,80);
//row 2
  home6 = createSprite(250,20,250,80);
  home7 = createSprite(160,155,70,130);
  home8 = createSprite(220,300,180,90);
  home9 = createSprite(220,500,200,60);
  home10 = createSprite(250,600,270,80);
  home11 = createSprite(400,112,500,45);
  home12 = createSprite(345,192,220,60);
  home13 = createSprite(400,370,100,300);
  home14 = createSprite(400,400,70,200);
  home15 = createSprite(580,200,150,200);
  home16 = createSprite(580,430,150,200);
  home17 = createSprite(534,600,230,70);
  home18 = createSprite(540,20,220,70);
//row3
  home19 = createSprite(760,50,118,182);
  home20 = createSprite(780,237,180,140);
  home21 = createSprite(780,358,300,50);
  home22 = createSprite(780,450,170,70);
  home23 = createSprite(780,570,170,100);

  cityGroup2.add(home1);
  cityGroup2.add(home2);
  cityGroup2.add(home3);
  cityGroup2.add(home4);
  cityGroup2.add(home5);
  cityGroup2.add(home6);
  cityGroup2.add(home7);
  cityGroup2.add(home8);
  cityGroup2.add(home9);
  cityGroup2.add(home10);
  cityGroup2.add(home11);
  cityGroup2.add(home12);
  cityGroup2.add(home13);
  cityGroup2.add(home14);
  cityGroup2.add(home15);
  cityGroup2.add(home16);
  cityGroup2.add(home17);
  cityGroup2.add(home18);
  cityGroup2.add(home19);
  cityGroup2.add(home20);
  cityGroup2.add(home21);
  cityGroup2.add(home22);
  cityGroup2.add(home23);


 cityGroup2.setVisibleEach(false);


 //Level 3 Maze

 forest1 = createSprite(10,28,100,230);
 forest2 = createSprite(10,600,1300,50);
 forest3 = createSprite(50,10,1240,80);
 homeg1 = createSprite(10,355,100,360);
 homeg2 = createSprite(175,200,150,210);
 homeg3 = createSprite(320,360,430,60);
 homeg4 = createSprite(220,480,260,100);
 homeg5 = createSprite(480,120,360,60);
 homeg6 = createSprite(380,240,160,120);
 homeg7 = createSprite(460,480,160,120);
 homeg8 = createSprite(580,240,160,120);
 homeg9 = createSprite(620,430,70,210);
 homeg10 = createSprite(750,50,90,190);
 homeg11 = createSprite(750,350,100,350);
 
 


 cityGroup3 = new Group();

 cityGroup3.add(forest1);
 cityGroup3.add(forest2);
 cityGroup3.add(forest3);
 cityGroup3.add(homeg1);
 cityGroup3.add(homeg2);
 cityGroup3.add(homeg3);
 cityGroup3.add(homeg4);
 cityGroup3.add(homeg5);
 cityGroup3.add(homeg6);
 cityGroup3.add(homeg7);
 cityGroup3.add(homeg8);
 cityGroup3.add(homeg9);
 cityGroup3.add(homeg10);
 cityGroup3.add(homeg11);


cityGroup3.setVisibleEach(false);


 homelessMan = createSprite(100,20,40,40);
 homelessMan.shapeColor = "red"

 foodtruck = createSprite(100,100);
 foodtruck.addImage("right",truckRight);
 foodtruck.addImage("left",truckLeft);
 foodtruck.addImage("up",truckUp);
 foodtruck.addImage("down",truckDown);
 foodtruck.scale=0.2;

 foodtruck.x = width-10;
 foodtruck.y = 500;

}

function draw() {

  if(level === 1){
    background(backImg1);

    homelessMan.x = 150;
    homelessMan.y = 40;
    spawnTrain();
    foodtruck.collide(cityGroup1);
    gameStateControl();
  }

  else if(level === 2){
    
    background(backImg2); 
    //foodtruck.x = width-10;
   // foodtruck.y = 200;
    homelessMan.x = 106;
    homelessMan.y = 590;
    foodtruck.collide(cityGroup2);
    gameStateControl();
  }
  else if(level === 3){
    background(backImg3); 
    //foodtruck.x = width-25;
   // foodtruck.y = 230;
    homelessMan.x = 20;
    homelessMan.y = 557;
    foodtruck.collide(cityGroup3);
    gameStateControl();
  }



  drawSprites();
}



function spawnTrain(){
  if(frameCount%150 === 0){
    var train = createSprite(240,height,24,310);
    train.addImage("trainimg",trainImage);
    train.scale=0.6;
    train.velocityY = -7;
    train.lifetime = 200;
    trainGroup.add(train);
  }
}

function gameStateControl(){
  if(gameState === 0){
    textSize(30);
    fill("red");
    stroke("yellow");
    strokeWeight(6);
      text("Press Space to Start",width/2 -100,height/2);
      if(keyDown("space")){
        gameState = 1;
      }
  }
  else if(gameState === 1){

  if(keyIsDown(LEFT_ARROW)){
   setTimeout(changePosition(-5,0),3000)
   foodtruck.changeAnimation("left",truckLeft)
  }
  if(keyIsDown(RIGHT_ARROW)){
    setTimeout(changePosition(5,0),3000)
    foodtruck.changeAnimation("right",truckRight)
  }
  if(keyIsDown(UP_ARROW)){
    setTimeout(changePosition(0,-5),3000)
    foodtruck.changeAnimation("up",truckUp)
  }
  if(keyIsDown(DOWN_ARROW)){
    setTimeout(changePosition(0,5),3000)
    foodtruck.changeAnimation("down",truckDown)
  }

  if(foodtruck.isTouching(homelessMan)){
    gameState = 2;
  }

}
else if(gameState === 2){
  textSize(30);
  fill("red");
  stroke("yellow");
  strokeWeight(6);
  text("Level Completed, Press Space to Level Up",width/2 -200,height/2);
  if(keyDown("space")){
    level = level+1;
    gameState = 0;
  }
}
}


function changePosition(x,y){
  foodtruck.x +=x;
  foodtruck.y +=y;
}