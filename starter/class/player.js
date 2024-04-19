const { Character } = require('./character');
const { Enemy } = require('./enemy');
const { Food } = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    // console.log(this.currentRoom);//object
    // console.log(this.currentRoom.items);//array
    // console.log(this.currentRoom.items[0]);//object
    // console.log(this.currentRoom.items[0]["name"]);

    for (let i = 0; i < this.currentRoom.items.length; i++) {
      let currentItemName = this.currentRoom.items[i]["name"];
      if (currentItemName === itemName) {
        this.items.push(this.currentRoom.items[i]);//Add item from room to player
        this.currentRoom.items.pop();//Remove the item from room      }
      }
    }
  }
  dropItem(itemName) {

    // Fill this in
    for (let i = 0; i < this.items.length; i++){
      let currentItemName = this.items[i]["name"];
      if (currentItemName === itemName) {
        this.currentRoom.items.push(this.items[i]);
        this.items.pop();
      }
    }
  }

  eatItem(itemName) {

    // Fill this in
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]["name"] === itemName && this.items[i] instanceof Food) {
        this.items.pop();
      }
    }
  }

  getItemByName(name) {

    // Fill this in
    for (let i = 0; i < this.items.length; i++){
      let itemName = this.items[i]["name"];
      if (itemName === name) {
        return this.items[i];
      }
    }

  }

  hit(name) {
    // Fill this in
    this.currentRoom.getEnemyByName(name).attackTarget = this.currentRoom.getEnemyByName(name)["player"];
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
