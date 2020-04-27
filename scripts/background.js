class Background {
  constructor(game) {
    this.game = game;
    this.PIXELS_SQUARE = 10;
  }

  drawBackgroundGrid() {
    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;
    //draw grid to see things moving around

    context.strokeStyle = "grey";
    context.lineWidth = 1;
    // i will do small grid system of 20 pixels
    const PIXELS_SQUARE = this.PIXELS_SQUARE;
    context.beginPath();
    const col = width / PIXELS_SQUARE;
    const row = height / PIXELS_SQUARE;
    context.beginPath();
    for (let i = 0; i <= col; i++) {
      context.moveTo(PIXELS_SQUARE * i, 0);
      context.lineTo(PIXELS_SQUARE * i, height);
    }
    for (let j = 0; j <= row; j++) {
      context.moveTo(0, PIXELS_SQUARE * j);
      context.lineTo(width, PIXELS_SQUARE * j);
    }
    context.stroke();
  }

  drawBackground() {
    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;
    const PIXELS_SQUARE = this.PIXELS_SQUARE;

    context.fillStyle = "black";
    context.fillRect(0, height - PIXELS_SQUARE * 5, width, PIXELS_SQUARE * 5);
  }

  clearCanvas() {
    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;
    context.clearRect(0, 0, width, height);
  }
}
