var Costume = require('./costume');
var Bag = require('./bag');
var Candy = require('./candy');


class TrickOrTreater {
    constructor(costume, bag){
        this.dressedUpAs = costume.style;
        this.bag = bag
        this.hasCandy = false
        this.countCandies = 0
    }

    putCandyInBag(candy){
        this.bag.fill(candy)
        this.hasCandy = true
        this.countCandies = this.bag.count
    }

   eat(){
    this.bag.candies.splice(0, 1)
    this.countCandies -- 
     
   }  

}
module.exports = TrickOrTreater