const Stark = require ('./stark')

class Direwolf{
  constructor(name,home,size){

    this.name=name
    this.home = home || 'Beyond the Wall'
    this.size = size ||'Massive'
    this.starksToProtect = []
    this.starkCapacity = 0
    this.huntsWhiteWalkers= true
  }
  protect(stark){
      if(stark.location == this.home){
          if(this.starkCapacity < 2){
            stark.safe = true;
            this.huntsWhiteWalkers= false
            this.starksToProtect.push(stark)
            this.starkCapacity++
          }
       
      }
     
  }

   leave(stark){
    stark.safe = false
    var index = this.starksToProtect.indexOf(stark);
    if (index !== -1) this.starksToProtect.splice(index, 1);
   }

 

}
module.exports = Direwolf