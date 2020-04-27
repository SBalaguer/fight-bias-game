class Controls {
  constructor(game) {
    this.game = game;
  }

  setBindingKeys() {
    window.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          //moveleft
          //console.log("key has been pressed");
          event.preventDefault();
          this.game.player.moveLeft();
          break;
        case 38:
          //moveup
          //console.log("key has been pressed");
          event.preventDefault();
          this.game.player.jump();
          break;
        case 39:
          //moveright
          //console.log("key has been pressed");
          event.preventDefault();
          this.game.player.moveRight();
          break;
        case 40:
          //movedown
          //console.log("key has been pressed");
          //this.game.player.moveDown();
          break;
        case 32:
          //jump
          //console.log("key has been pressed");
          break;
      }
    });
  }
}
