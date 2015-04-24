(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  Ball = Pong.Ball = function(game) {
    Pong.Moveable.call(this);
    this.game = game;
    this.width = 10;
    this.height = 10;
    this.launch();
  };

  Util.inherits(Ball, Pong.Moveable);

  Ball.prototype.update = function() {
    Pong.Moveable.prototype.update.apply(this);

    var p1 = this.game.player1;
    var p2 = this.game.player2;

    if (this.collided(p1)) {
      this.speed += 1;
      this.xVelocity = this.speed;
      this.yVelocity += p1.yVelocity * 0.25;
    } else if (this.collided(p2)) {
      this.speed += 1;
      this.xVelocity = -this.speed;
      this.yVelocity += p2.yVelocity * 0.25;
    }

    if (this.xVelocity > 20) {
      this.xVelocity = 20;
    } else if (this.xVelocity < -20) {
      this.xVelocity = -20;
    }

    if (this.x >= (this.game.board.width - this.width)) {
      p1.score += 1;
      this.launch(1);
    }

    if (this.x <= 0) {
      p2.score += 1;
      this.launch(-1);
    }

    if (this.y <= 0 || this.y + this.height >= this.game.board.height) {
      this.yVelocity *= -1;
    }
  };

  Ball.prototype.launch = function(dir) {
    if (typeof dir === 'undefined') {
      dir = (Math.random() > 0.5) ? 1 : -1;
    }
    this.x = this.game.board.width / 2 - this.width / 2;
    this.y = this.game.board.height / 2 - this.height / 2;
    var min = 5;
    this.yVelocity = Math.floor(Math.random() * min);
    this.xVelocity = 5 * dir;
    this.speed = 5;
  };

}());
