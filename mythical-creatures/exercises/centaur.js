let Victim = require('./victim.js')



class Centaur {
    constructor(name,breed){
     this.name = name;
     this.breed = breed;
     this.standing = true;
     this.layingDown = false;
     this.cranky = false ;
     this.tired = 0;
     this.status = 'NO!'
     
     }


     isCranky() {
        this.tired++
        this.tired == 3 ?  this.cranky = true : this.cranky = false
     }

  shoot(){
   
    this.isCranky()
    
    return  this.tired >= 3 ? 'NO!': 'Twang!!!'
  }

  sleep(){

    this.tired = 0 ;
    this.cranky = false ; 
    this.status  = this.layingDown ? 'ZZZZ' : null

      return this.standing ? 'NO!' : this.status 
        
        
     
     
     
  }

  drinkPotion(){
   if(this.standing){

    if(this.tired == 0 ){
        this.cranky = true ;
    }
    else{
        this.tired = 0 ;
        this.cranky = false ;
    }
    

   }
   else{
       return 'Not while I\'m laying down!'
   }
   

  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
    this.tired = 3
  }

  standUp(){
    this.standing = true;
    this.layingDown = false
  }
    
  run(){
        this.isCranky()
        return  this.tired >= 3 ? 'NO!': 'Clop clop clop clop!!!'
     }
 
    };

    module.exports =  Centaur 
