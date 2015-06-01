(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  Game = Pong.Game = function() {
    this.currentKey = {};
    this.setupGame();
  };

  Game.prototype.bindKeyListeners = function() {
    var keys = {
      38: 'up',
      40: 'down',
      80: 'pause'
    };

    window.addEventListener("keydown", function(e) {
      var key = keys[e.which];
      if (key !== 'pause') {
        this.currentKey[key] = true;
      } else if (key === 'pause') {
        this.pauseGame();
      }
    }.bind(this));

    window.addEventListener("keyup", function(e) {
      var key = keys[e.which];
      if (key && key !== 'pause') {
        this.currentKey[key] = false;
      }
    }.bind(this));
  };

  Game.prototype.update = function() {
    if (this.currentKey.pause) {
      this.pauseGame();
    } else {
      this.movingParts.forEach(function(moveable) {
        moveable.update();
      });
    }
  };

  Game.prototype.pauseGame = function() {
    if (!this.gamePaused) {
      this.interval = clearTimeout(this.interval);
      this.gamePaused = true;
    } else if (this.gamePaused) {
      this.gamePaused = false;
      this.play();
    }
  };

  Game.prototype.draw = function() {
    this.board.draw();
    this.movingParts.forEach(function(moveable) {
      if (moveable.draw) {
        moveable.draw(this.context);
      }
    }.bind(this));
  };

  Game.prototype.setupGame = function() {
    this.board = new Pong.Board(this);
    this.context = this.board.ctx;
    this.bindKeyListeners();
    this.player1 = new Pong.Player(this);
    this.player2 = new Pong.AI(this);
    this.ball = new Pong.Ball(this);
    this.movingParts = [this.player1, this.player2, this.ball];
    this.board.draw();
  };

  Game.prototype.play = function() {
    this.board.canvas.focus();
    this.interval = setInterval(function() {
      this.update();
      this.draw();
    }.bind(this), 20);
  };
}());
