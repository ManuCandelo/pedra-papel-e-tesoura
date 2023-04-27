var world, engine
var cardPE,cardPEImage,cardPE2
var cardP, cardPImage, cardP2
var cardT, cardTImage, cardT2
var playerRobo, playerRoboImg
var computer, computerImg
var player, playerImg
var choose
var restartButton
var score = 0

function preload(){

  backgroundImg = loadImage("assets/fundo.jpg")
  titleImg = loadImage('assets/titulonovo.png')
  playerRoboImg = loadAnimation('assets/robo1.png')
  cardPEImage = loadAnimation("assets/botaoPE2.png")
  cardPImage = loadAnimation("assets/botaoP2.png")
  cardTImage = loadAnimation("assets/botaoT2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  titleGame= createSprite(width/2,200);
  titleGame.addImage(titleImg);
  
  button = createImg("assets/botaoPlay1.png");
  button.position(width/2 -150, 350)
  button.mouseClicked(playPressed)

}

function draw() {
  
  background(backgroundImg); 
  drawSprites();
}

function cardPEPressed() {
  cardP.remove()
  cardT.remove()
  cardPE.remove()
  choose.remove()
  playerCard = createImg("assets/botaoPE2.png");
  playerCard.position(620,20)
  computerChoose()
}

function cardPPressed() {
  cardPE.remove()
  cardT.remove()
  cardP.remove()
  choose.remove()
  playerCard = createImg("assets/botaoP2.png");
  playerCard.position(620,20)
  computerChoose()  
  
}

function cardTPressed() {
  cardP.remove()
  cardPE.remove()
  cardT.remove()
  choose.remove()
  playerCard = createImg("assets/botaoT2.png");
  playerCard.position(620,20)
  computerChoose() 
  
}


function playPressed() {
  titleGame.remove()
  button.remove()

  playerImg = createImg("assets/you.png");
  playerImg.position(850,65)

  cardPE = createImg("assets/botaoPE1.png");
  cardPE.position(500,100)
  cardPE.mouseClicked(cardPEPressed)

  cardP = createImg("assets/botaoP1.png");
  cardP.position(730,100)
  cardP.mouseClicked(cardPPressed)

  cardT = createImg("assets/botaoT1.png");
  cardT.position(960,100)
  cardT.mouseClicked(cardTPressed)

  computer = createImg("assets/computer.png");
  computer.position(40,50)

  choose = createImg("assets/escolhendo.png");
  choose.position(650,460)

  playerRobo= createSprite(220,320);
  playerRobo.addAnimation("playerPc", playerRoboImg);
  playerRobo.addAnimation('rock',cardPEImage);
  playerRobo.addAnimation('paper',cardPImage);
  playerRobo.addAnimation('drop',cardTImage);
  playerRobo.changeAnimation("playerPc");
}

function computerChoose() {

  var choosing = Math.round(random(1,3))
  switch(choosing) {
    case 1: playerRobo.changeAnimation('rock',cardPEImage);
    createReset()
      break;
    case 2: playerRobo.changeAnimation('paper',cardPImage);
    createReset()
      break;
    case 3: playerRobo.changeAnimation('drop',cardTImage);
    createReset()
      break;
    default: break;
  }
}
function restart() {
  playerRobo.visible = false
  playerCard.remove()
  restartButton.remove()
  playPressed()
}
function createReset() {

  restartButton = createImg("assets/resetButton.png");
  restartButton.position(480,200)
  restartButton.size(250,173)
  restartButton.mouseClicked(restart)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



