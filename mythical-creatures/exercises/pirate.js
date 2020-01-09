class Pirate {
constructor(name, job ){
 this.name = name;
 this.job = job || 'Scallywag' 
 this.cursed = false;
 this.heinous = 0
 this.booty= 0
  
}

commitHeinousAct(){
    this.heinous++
    this.heinous == 3 ? this.cursed = true : this.cursed = false
}


robShip(){
    this.booty= 100
    return 'YAARRR!'
}

}

module.exports = Pirate