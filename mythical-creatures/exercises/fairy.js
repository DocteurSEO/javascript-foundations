class Fairy{
    constructor(name,clothes){
  
      this.name = name
      this.dust = 10
      this.clothes = {dresses: ['Iris']} 
      this.disposition =  'Good natured' 
      this.humanWards = []
     
    }
 
    receiveBelief() {
      this.dust++ 
    }

    believe(){
      this.dust = this.dust + 10 
    }

    makeDresses(more){
      more.forEach(element => {

        this.clothes.dresses.push(element)
        
      });
 

    }

    provoke(){
      this.disposition = 'Vengeful'
     
    }


    replaceInfant(infant){
      
     if(this.disposition == 'Vengeful' )
     {
      this.humanWards.push(infant)
      infant.disposition = 'Malicious'
      this.humanWards.length >=3 ? this.disposition = 'Good natured' : null
     } 
     
     else{
      
      return infant
     }
      
      
     
      
    }
  }
  module.exports = Fairy