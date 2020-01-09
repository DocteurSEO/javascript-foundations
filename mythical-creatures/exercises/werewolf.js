let Victim = require('./victim.js')



class Werewolf {
    constructor(name,location){
     this.name = name;
     this.location = location 
     this.human = true
     this.wolf = !this.human
     this.hungry = false
     }
 
     change(){

        this.human = this.wolf 
        this.wolf = !this.human 
        this.hungry = this.wolf
     }

     eat(victim) {

      if(this.wolf){
         
         this.hungry ? victim.isAlive(false) : null
         this.hungry ? this.hungry = !this.hungry : null
         !this.hungry ? this.change() : null



      }
     
         
      
      //return this.hungry ? 'MIAMMM !' : 'Berk !'
     }
 
    };

    module.exports = Werewolf