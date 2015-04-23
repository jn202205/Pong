(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  var Player = Pong.Player = function(game) {
    Pong.Paddle.call(this, game);
    this.game = game;
    this.x = 0;
    this.speed = 15;
  };

  Util.inherits(Player, Pong.Paddle);

  Player.prototype.update = function() {
    if (this.game.currentKey.up) {
      this.yVelocity = -this.speed;
    } else if (this.game.currentKey.down) {
      this.yVelocity = +this.speed;
    } else {
      this.yVelocity = 0;
    }

    Pong.Paddle.prototype.update.apply(this);
  };

}());
