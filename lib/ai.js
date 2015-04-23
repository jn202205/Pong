(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  AI = Pong.AI = function(game) {
    Pong.Paddle.call(this, game);
    this.game = game;
    this.x = game.board.width - this.width;
    this.speed = 10;
  };

  Util.inherits(AI, Pong.Paddle);

  AI.prototype.update = function() {
    Pong.Paddle.prototype.update.apply(this);
    var paddle_midpoint = (this.y + 50);
    if (paddle_midpoint < this.game.ball.y) {
      this.yVelocity = this.speed;
    } else if (paddle_midpoint > this.game.ball.y) {
      this.yVelocity = -this.speed;
    } else {
      this.yVelocity = 0;
    }

  };
}());
