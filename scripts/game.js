class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.background = new Background(this);
    this.player = new Player(this);
    this.controls = new Controls(this);
    this.controls.setBindingKeys();
  }

  drawEverything() {
    this.background.clearCanvas();
    this.background.drawBackgroundGrid();
    this.background.drawBackground();
    this.player.drawPlayer();
  }

  start() {
    this.drawEverything();
    this.loop();
  }

  loop() {
    this.player.movePlayer();
    this.drawEverything();
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
}
