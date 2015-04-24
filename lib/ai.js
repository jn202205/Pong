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
    var ball = this.game.ball;
    var moveToPos = ball.y - (this.height - ball.height) * 0.5;
    this.y += (moveToPos - this.y) * 0.2;

    Pong.Paddle.prototype.update.apply(this);
  };
}());
