// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health -= damage

    if(this.health > 0) return `A Saxon has received ${damage} points of damage`

    return "A Saxon has died in combat"
  }
}

// War
class War {
    
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking (viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon (saxon) {
    this.saxonArmy.push(saxon)
  }

/*   vikingAttack () {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    
    const attack = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength)
    
    if (this.saxonArmy[saxonIndex].health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1)
    }

    return attack
  }

  saxonAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    
    const attack = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength)
    
    if (this.vikingArmy[vikingIndex].health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1)
    }

    return attack
  } */

  //Refactored code : An army vs an army
  attack (assailantArmy, victimArmy) {
    const assailant = Math.floor(Math.random() * assailantArmy.length)
    const victim = Math.floor(Math.random() * victimArmy.length)
    
    const attackResult = victimArmy[victim].receiveDamage(assailantArmy[assailant].strength)
    
    if (victimArmy[victim].health <= 0) {
      victimArmy.splice(victim, 1)
    }

    return attackResult
  }

  showStatus(){
    if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
    if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day..."

    return "Vikings and Saxons are still in the thick of battle."
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
