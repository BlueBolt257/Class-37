class Game {
    constructor(){}

    getState(){
        db.ref("gameState").on("value",(data)=>{
            gs = data.val();
        })
    }

    update(state){
        db.ref("/").update({
            gameState: state
        })
    }

    start(){
        form = new Form();
        form.display();
    
        //player = new Player();
        
    }
    play(){}
    
    end(){}
}








