var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var play,page1,page2;
var gameState;

function setup(){
    canvas=createSprite(800,800);
    //box=createSprite(200,200,10,10);
    //box.shapeColor="red";
    gameState=page1;
}

function draw(){
    background(255,0,0);
    
    if (gameState==="start"){
      play();
    }
  
    if (gameState===page1){
      page();
    }

    /*if (gameState===page2){
      lines();
    }*/
    
    drawSprites();
}

function play(){
      
        textSize(30);
        fill(255);
        text("Get Ready For",100,150);

        textSize(30);
        fill(255);
        text("this EYE-Testing process!!",30,190);

        if(keyDown("UP_ARROW")){
          gameState=page1;
          console.log("check");
         }
        }

   function page(){
     background(200)
     box1=createSprite(110,130,40,40);
     box1.shapeColor="red";

     box2=createSprite(110,190,40,40);
     box2.shapeColor="red";

     box3=createSprite(110,250,40,40);
     box3.shapeColor="red";

     box4=createSprite(180,130,40,40);
     box4.shapeColor="red";

     box5=createSprite(180,190,40,40);
     box5.shapeColor="red";

     box6=createSprite(180,250,40,40);
     box6.shapeColor="orange";

     box7=createSprite(250,130,40,40);
     box7.shapeColor="red";

     box8=createSprite(250,190,40,40);
     box8.shapeColor="red";

     box9=createSprite(250,250,40,40);
     box9.shapeColor="red";

     if (mousePressedOver("box6")){
       gameState=page2;
     }
   }      
      
 /*function lines(){
  background("yellow");
  box=createSprite(110,130,40,40);
  box.shapeColor="red";
  line=createSprite(110,130,2,40);
  line.shapeColor="black";
  line1=createSprite(120,130,2,40);
  line1.shapeColor="black";
  line2=createSprite(100,130,2,40);
  line2.shapeColor="black";

  box=createSprite(110,190,40,40);
  box.shapeColor="red";
  line=createSprite(110,190,2,40);
  line.shapeColor="black";
  line1=createSprite(120,190,2,40);
  line1.shapeColor="black";
  line2=createSprite(100,190,2,40);
  line2.shapeColor="black";

  box=createSprite(110,250,40,40);
  box.shapeColor="red";
  line=createSprite(110,250,2,40);
  line.shapeColor="black";
  line1=createSprite(120,250,2,40);
  line1.shapeColor="black";
  line2=createSprite(100,250,2,40);
  line2.shapeColor="black";

  box=createSprite(180,130,40,40);
  box.shapeColor="red";
  line=createSprite(180,130,2,40);
  line.shapeColor="black";
  line1=createSprite(190,130,2,40);
  line1.shapeColor="black";
  line2=createSprite(170,130,2,40);
  line2.shapeColor="black";

  box=createSprite(180,190,40,40);
  box.shapeColor="red";
  line=createSprite(180,190,40,2);
  line.shapeColor="black";
  line1=createSprite(180,180,40,2);
  line1.shapeColor="black";
  line2=createSprite(180,200,40,2);
  line2.shapeColor="black";

  box=createSprite(180,250,40,40);
  box.shapeColor="red";
  line=createSprite(180,250,2,40);
  line.shapeColor="black";
  line1=createSprite(190,250,2,40);
  line1.shapeColor="black";
  line2=createSprite(170,250,2,40);
  line2.shapeColor="black";

  box=createSprite(250,130,40,40);
  box.shapeColor="red";
  line=createSprite(250,130,2,40);
  line.shapeColor="black";
  line1=createSprite(260,130,2,40);
  line1.shapeColor="black";
  line2=createSprite(240,130,2,40);
  line2.shapeColor="black";

  box=createSprite(250,190,40,40);
  box.shapeColor="red";
  line=createSprite(260,190,2,40);
  line.shapeColor="black";
  line1=createSprite(250,190,2,40);
  line1.shapeColor="black";
  line2=createSprite(240,190,2,40);
  line2.shapeColor="black";

  box=createSprite(250,250,40,40);
  box.shapeColor="red";
  line=createSprite(260,250,2,40);
  line.shapeColor="black";
  line1=createSprite(240,250,2,40);
  line1.shapeColor="black";
  line2=createSprite(250,250,2,40);
  line2.shapeColor="black";
 }*/