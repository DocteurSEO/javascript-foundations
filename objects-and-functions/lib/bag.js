let Candy = require('./candy')



class Bag  {
    constructor(){
      this.empty = true;
      this.count = 0; 
      this.candies = []
    }
  
   fill(object){
       
       this.candies.push(object)
       this.count = this.candies.length
   }

   contains(typeCandies){

    return this.candies.some(candie => 
        
         {
             if(candie.type == typeCandies){
                 return true
             }
        
        }
        
        
        );

   }


  }
  module.exports = Bag