let Person = require('./person.js')

class Medusa {
    constructor(name ){
     this.name = name; 
     this.statues = []
     }
 
    stare(victim){
        victim.isStoned (true)
        if(this.statues.length <3 ) 
        
        {
            
            this.statues.push(victim)   
        
        } 
        else{
            this.statues[0].isStoned (false)
        }
    }


    };

   
    
    module.exports = Medusa