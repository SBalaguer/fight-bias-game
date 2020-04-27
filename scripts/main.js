const $canvasMain = document.getElementById("main-game");
const $canvasSecondary = document.getElementById("second-screen");

const game = new Game($canvasMain);

game.start();
