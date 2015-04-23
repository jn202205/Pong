(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  Moveable = Pong.Moveable = function() {
    this.xVelocity = 0;
    this.yVelocity = 0;
  };

  Moveable.prototype.update = function() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
  };

  Moveable.prototype.draw = function(context) {
    //context.fillStyle = 'white';
    context.fillRect(this.x, this.y, this.width, this.height);
  };

  Moveable.prototype.collided = function(other) {
    return this.y + this.height > other.y &&
      this.y < other.y + other.height &&
      this.x + this.width > other.x &&
      this.x < other.x + other.width;
  };
}());
