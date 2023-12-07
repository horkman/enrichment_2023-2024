/**
 * Platform Game Using Phaser
 */

PlayState = {};

window.onload = function () {
  let game = new Phaser.Game(160, 100, Phaser.AUTO, "game");
  game.state.add("play", PlayState);
  game.state.start("play");
};

// load game assets here
PlayState.preload = function () {
  this.game.load.image("background", "images/background.png");
};

// create game entities and set up world here
PlayState.create = function () {
  this.game.add.image(0, 0, "background");
};
