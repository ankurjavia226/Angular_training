var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var colorRed = 1;
var colorBlue = 2;
var colorGreen = 3;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["purple"] = 1] = "purple";
    color[color["Blue"] = 2] = "Blue";
    color[color["Green"] = 3] = "Green";
})(color || (color = {}));
;
var background = color.Blue;
