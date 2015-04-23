(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  AI = Pong.AI = function(game) {
    Pong.Paddle.call(this, game);
    this.game = game;
    this.x = game.board.width - this.width;
    this.speed = 5;
  };

  Util.inherits(AI, Pong.Paddle);

  AI.prototype.update = function() {
    // TODO: calculate position base on ball position
    if (this.y < this.game.player1.y) {
      this.yVelocity = this.speed;
    } else if (this.y > this.game.player1.y) {
      this.yVelocity = -this.speed;
    } else {
      this.yVelocity = 0;
    }

    Pong.Paddle.prototype.update.apply(this);
  };
}());
