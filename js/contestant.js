class Player {
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;
      
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      console.log("Player Index: "+playerIndex)
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef=database.ref("players");
      playerInfoRef.on("value",(data)=>{
        allPlayers=data.val();
      })
    }

    display(){
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
  
        player.name = this.input1.value();
        playerCount+=1;
        player.index=playerCount;
        player.update()
        player.updateCount(playerCount);
      });
    }
  }
  