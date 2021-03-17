class Quiz {

  constructor(){}

 getState(){
  var gameStateRef  = database.ref('gameState');
  gameStateRef.on("value",function(data){
     gameState = data.val();
  })
 
}
update(state){
  database.ref('/').update({
    gameState: state
  });
}
async start(){
  if(gameState === 0){
    player = new Player();
    var playerCountRef = await database.ref("playerCount").once("value");
    if (playerCountRef.exists()){
      playerCount=playerCountRef.val();
      player.getCount();
    }
    form = new Form()
    form.display();
  }
}

play(){
  this.title.hide();
  this.input1.hide();
  this.input2.hide();
  this.button.hide();
  background("blue");
  this.title2.html("results");
  this.title2.position(350, 0);
  player.getPlayerInfo();
  for(var plr in allPlayers){
    var cAns = 2;
    if(cAns === allPlayers[plr].answer){
      fill("Green");
    }else{
      fill("red");
    }
  }
  
}

}