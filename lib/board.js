(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  var Board = Pong.Board = function() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
  };

  Board.prototype.draw = function() {
    /* Draw board */
    var canvas = this.canvas;
    var ctx = this.ctx;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /* Draw midpoint line */
    ctx.fillStyle = 'white';
    var netWidth = 2;
    var x = (canvas.width - netWidth) / 2.0;
    var y = 0;
    ctx.fillRect(x, y, netWidth, canvas.height);

    /* Scoreboard placeholder */
    ctx.fillStyle = '#white';
    ctx.font = "36px Arial";
    //TODO update with real scores
    ctx.fillText(0, canvas.width * 0.33, 50);
    ctx.fillText(0, canvas.width * 0.63, 50);
  };
}());
