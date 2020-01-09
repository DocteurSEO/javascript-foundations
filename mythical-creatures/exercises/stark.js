class Stark{
    constructor(name,location,size){
  
      this.name=name
      this.location = location || 'Winterfell'
      this.size = size ||'Massive'
      this.safe = false
    }
    houseWords() {

        return this.safe ? 'The North Remembers' :'Winter is Coming'
      }
  
  }
  module.exports = Stark