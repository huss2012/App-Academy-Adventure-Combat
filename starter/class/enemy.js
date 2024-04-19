const {Character} = require('./character');

class Enemy extends Character {
  constructor(name, description, currentRoom, cooldown, attackTarget) {
    // Fill this in
    super(name, description, currentRoom, cooldown, attackTarget);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
    //console.log(this.currentRoom);
    let direction = this.currentRoom.getExits();
    this.currentRoom = this.currentRoom.getRoomInDirection(direction);
    this.cooldown = 3000;
    //console.log(this.currentRoom);
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.applyDamage(this.strength);
    this.cooldown = 3000;
  }

  applyDamage(amount) {
    // Fill this in
    this.attackTarget.health -= amount;
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
