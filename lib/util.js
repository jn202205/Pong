(function() {
  if (typeof Pong === 'undefined') {
    window.Pong = {};
  }

  var Util = Pong.Util = function() {};

  Util.prototype.inherits = function(ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  window.Util = new Util();
}());
