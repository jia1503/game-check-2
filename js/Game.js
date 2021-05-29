class Game {
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    
    }

   
    
  }

  wait(){
    if(gameState === 1){
      if(playerCount===4 && animations===4){
        choose1.hide();
        choose2.hide();
        choose3.hide();
        choose4.hide();
        game.update(2);
      }
    }
  }
 
  play(){
    if(gameState===2){
      imageMode(CENTER);
      image(roadImg, 757.5, 357.5, 1500, 1500);
    }
  }
  
}
