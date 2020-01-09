class Wizard {
    constructor(chararcter){
   
     this.name = chararcter.name;
     this.bearded = chararcter.bearded
     this.isRested = true;
     this.mana = 0
     if ( chararcter.bearded === undefined) {
        this.bearded = true;
    }

  


      }

      cast(spells){
          this.mana++
       
           if(this.mana === 3 )
         {

            
            this.isRested = false
            return 'I SHALL NOT CAST!'  
        }  
         else
         
         {

             if(!this.isRested){    return 'I SHALL NOT CAST!'   }
 
            return spells.toUpperCase()
         }
         
          
      }
      incantation(root)
      {
  
          return root.toUpperCase()
      }
    
    
    
    }
    
    module.exports = Wizard