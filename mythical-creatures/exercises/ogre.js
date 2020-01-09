let Human = require('./human.js')

class Ogre{
  constructor(name, home){

    this.name=name
    this.home=home || 'Swamp' 
    this.swings = 0 
  
  }
  
  
  encounter(human){
   
    if(human.encounterCounter >= 3 ) {this.swingAt(human)} 
    human.encounterCounter++
   
    

  }
  swingAt(human){

    this.swings++
    console.log(this.swings)
    human.knockedOut = true
   
     
  }
 

}
module.exports = Ogre