class Player {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 50, //0,
      y: 50, // this.game.$canvas.height - 150,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.dimensions = {
      x: 50,
      y: 100,
    };
    this.gravity = 10;
    this.friction = 15;
  }

  jump() {
    this.velocity.y = -10;
  }

  moveLeft() {
    this.velocity.x = -1 * 5;
  }
  moveRight() {
    this.velocity.x = 5;
  }

  movePlayer() {
    const { position, velocity, gravity, friction } = this;

    let newVelocity = {
      x: velocity.x / (1 + (friction / 1000) * 16),
      y: velocity.y + (gravity / 1000) * 16,
    };

    let newPosition = {
      x: position.x + newVelocity.x,
      y: position.y + newVelocity.y,
    };

    if (this.playerLimits()) {
      newVelocity.y = 0;
      newPosition.y = this.position.y;
    }

    Object.assign(this.velocity, newVelocity);
    Object.assign(this.position, newPosition);
  }

  playerLimits() {
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;

    if (this.position.y + this.dimensions.y + this.velocity.y >= height - 50) {
      return true;
    } else {
      return false;
    }
  }

  drawPlayer() {
    const context = this.game.context;
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
  }
}
