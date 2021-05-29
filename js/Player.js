class Player {
  constructor(){}

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

  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }

  getA(){
    var animationsRef = database.ref('animations');
    animationsRef.on("value",function(data){
      animations = data.val();
    })
  }

  updateA(number){
    database.ref('/').update({
      animations: number
    });
  }

  updateAni(aRead){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      aRead:aRead
    });
  }
  
}
