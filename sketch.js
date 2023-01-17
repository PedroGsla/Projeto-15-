var arco , flecha,  fundo;
var arcoImage, flechaImage, green_balloonImage;
var red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");

  flechaImage = loadImage("arrow0.png");
  arcoImage = loadImage("bow0.png");
 
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  fundo = createSprite(0,0,400,400);
  fundo.addImage(backgroundImage);
  fundo.scale = 2.5;
  
  // criando arco para a flecha
  arco = createSprite(380,220,20,50);
  arco.addImage(arcoImage); 
  arco.scale = 1;

   score = 0    

   grupoBalão = new Group ();
}

function draw() {
 background(0);
  

  //arco em movimento
  arco.y = World.mouseY
  
//pontos
 

   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createflecha();
    
  }
  //grupo

  //Colisão
  if (grupoBalão.collide (flecha)){
    grupoBalão.DestroyEach();
    score = score +1;
}



  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1:  balaovermeio();
    break;
    case 2: balaoazul();
    break;
    case 3: balaoverde();
    break;
    case 4: balaorosa();
    break;
    default:break;
  }}
  textSize(10);
  textFont("arial black");
  text("Score:"+score,60,60);

  drawSprites();
}
grupoBalão.add(balaovermeio);
grupoBalão.add(balaoverde);
grupoBalão.add(balaoazul);
grupoBalão.add(balaorosa);

// Criar flechas para o arco
 
function createflecha() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(flechaImage);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
}

function balaovermeio() {
  var vermeio= createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermeio.addImage(red_balloonImage);
  vermeio.velocityX = 3;
  vermeio.lifetime = 150;
  vermeio.scale = 0.1;
}

function balaoazul() {
  var azul= createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(blue_balloonImage);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
}

function balaoverde() {
  var verde= createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(green_balloonImage);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;  
}

function balaorosa() {
  var rosa= createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(pink_balloonImage);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1.2;
}
