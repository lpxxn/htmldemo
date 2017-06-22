/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="./point.ts" />
/// <reference path="./display.ts" />
/// <reference path="./config.ts" />
var MyTeris;
(function (MyTeris) {
    var Block = (function () {
        function Block(points, cssClass, backgroundColor, blockCount) {
            if (backgroundColor === void 0) { backgroundColor = "black"; }
            if (blockCount === void 0) { blockCount = 4; }
            this.points = points;
            this.cssClass = cssClass;
            this.backgroundColor = backgroundColor;
            this.blocks = [];
            this.currentIndex = 0;
            this.blockCount = blockCount;
            this.initBlock();
        }
        Block.prototype.initBlock = function () {
            var current_point = this.points[this.currentIndex];
            for (var i = 0; i < this.blockCount; i++) {
                var x_axis = current_point[i++];
                var y_axis = current_point[i];
                var block_width = MyTeris.TerisConfig.getInstance().blockWidth;
                var new_div = this.createBlock();
                new_div.css("left", x_axis * block_width + "px");
                new_div.css("top", 200 + y_axis * block_width + "px");
                this.blocks.push(new_div);
            }
        };
        Block.prototype.createBlock = function () {
            var $ele = $("<div />", { "class": this.cssClass });
            $ele.css("background", this.backgroundColor);
            var block_width = MyTeris.TerisConfig.getInstance().blockWidth - 2;
            $ele.css("width", block_width + "px");
            $ele.css("height", block_width + "px");
            return $ele;
        };
        Block.prototype.divs = function () {
            return this.blocks;
        };
        return Block;
    }());
    MyTeris.Block = Block;
})(MyTeris || (MyTeris = {}));
