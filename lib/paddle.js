(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  var Paddle = Pong.Paddle = function(game) {
    Pong.Moveable.call(this);
    this.game = game;
    this.width = 20;
    this.height = 100;
    this.y = game.board.height / 2 - this.height / 2;
    this.score = 0;
  };

  Util.inherits(Paddle, Pong.Moveable);
}());
