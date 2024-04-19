class Character {

  constructor(name, description, currentRoom, items, strength, health) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;

  }

  applyDamage(amount) {
    // Fill this in
    if (amount <= this.health) {
      this.health -= amount;
      this.die();
    } else {
      this.health -= amount;
    }
  }

  die() {
    // Fill this in
    this.items.forEach(item => {
      this.currentRoom.items.push(item);
    });
    this.items.splice(0, this.items.length);
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
