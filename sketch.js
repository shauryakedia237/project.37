var canva;
var gameState = 0;
var playerCount, database, game, question,player,form;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if (playerCount===4){
    quiz.update(1);
  }
  if (gameState===1){
    clear();
    quiz.play();

  }
  
}
