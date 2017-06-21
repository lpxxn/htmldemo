/// <reference path="./node_modules/@types/jquery/index.d.ts" />
/// <reference path ="./point.ts" />
/// <reference path="./idisplay.ts" />
var MyTeris;
(function (MyTeris) {
    var Block = (function () {
        function Block(points, cssClass, position) {
            this.points = points;
            this.cssClass = cssClass;
            this.position = position;
            this.backgroundColor = "black";
        }
        Block.prototype.initBlock = function () {
        };
        Block.prototype.showElement = function () {
            throw new Error("Method not implemented.");
        };
        Block.prototype.divs = function () {
            return [$("")];
        };
        return Block;
    }());
    MyTeris.Block = Block;
})(MyTeris || (MyTeris = {}));
