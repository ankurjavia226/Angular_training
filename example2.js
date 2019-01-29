var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' y: ' + this.y);
    };
    return Point;
}());
var point = new Point;
point.x = 5;
point.y = 6;
point.draw();
