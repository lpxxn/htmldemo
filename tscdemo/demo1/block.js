/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="./point.ts" />
/// <reference path="./display.ts" />
/// <reference path="./config.ts" />
var MyTeris;
(function (MyTeris) {
    var Block = (function () {
        function Block(points, cssClass, backgroundColor) {
            this.points = points;
            this.cssClass = cssClass;
            this.backgroundColor = backgroundColor;
            this.blocks = [];
            this.currentIndex = 0;
            this.blockWidth = MyTeris.TerisConfig.getInstance().blockWidth;
            this.initBlock();
        }
        ;
        Block.prototype.initBlock = function () {
            var current_point = this.points[this.currentIndex];
            for (var i = 0, size = current_point.length; i < size; i++) {
                var x_axis = current_point[i++];
                var y_axis = current_point[i];
                var new_div = this.createBlock();
                new_div.css("left", x_axis * this.blockWidth + "px");
                new_div.css("top", y_axis * this.blockWidth + "px");
                console.log("left", new_div.css("left"), "top", new_div.css("top"));
                this.blocks.push(new_div);
            }
        };
        ;
        Block.prototype.preRotateBlockInfo = function (position) {
            if (this.points.length === 1)
                return null;
            var index = this.currentIndex >= (this.points.length - 1) ? 0 : this.currentIndex + 1;
            var forecast_width = [], forecast_height = [];
            var current_point = this.points[index];
            var size = current_point.length;
            for (var point_index = 0; point_index < size; point_index++) {
                var x_axis = current_point[point_index++];
                var y_axis = current_point[point_index];
                var _w = position.left + x_axis * this.blockWidth;
                var _h = position.top - y_axis * this.blockWidth;
                forecast_width.push(_w);
                forecast_height.push(_h);
            }
            return { "index": index, "widths": forecast_width, "heights": forecast_height };
        };
        ;
        Block.prototype.rotateBlock = function (rotateInfo) {
            this.currentIndex = rotateInfo.index;
            var size = this.blocks.length;
            for (var div_index = 0; div_index < size; div_index++) {
                var current_div = this.blocks[div_index];
                current_div.css("left", rotateInfo.widths[div_index] + "px");
                current_div.css("top", rotateInfo.heights[div_index] + "px");
            }
        };
        Block.prototype.createBlock = function () {
            var $ele = $("<div ></div>", { "class": this.cssClass });
            $ele.css("background", this.backgroundColor);
            var borderWidth = (parseInt($ele.css("border-width")) || 1) * 2;
            $ele.css("width", this.blockWidth - borderWidth + "px");
            $ele.css("height", this.blockWidth - borderWidth + "px");
            return $ele;
        };
        ;
        Block.prototype.divs = function () {
            return this.blocks;
        };
        ;
        return Block;
    }());
    MyTeris.Block = Block;
    var MoveBlock = (function () {
        function MoveBlock(parentEle) {
            this.parentEle = parentEle;
            this.fixBlocks = {};
            this.canMove = true;
            this.isGameEnd = false;
            this.shadowBlock = [];
            this.isAppendToParent = false;
        }
        MoveBlock.prototype.newBlock = function (points, cssClass, backgroundColor, position) {
            this.canMove = true;
            this.isAppendToParent = false;
            this.position = position;
            this.block = new Block(points, cssClass, backgroundColor);
            //this.block = new Block(points, cssClass, "rgba(0, 128, 255,.10)");
        };
        MoveBlock.prototype.rotateBlockInfo = function () {
            var info = this.block.preRotateBlockInfo(this.position);
            var size = info.heights.length;
            for (var index = 0; index < size; index++) {
                var w = info.widths[index];
                var h = info.heights[index];
                if (w < 0 || (w + this.block.blockWidth) > this.boundWidth())
                    return;
                if (h > (this.boundHeight() + this.block.blockWidth))
                    return;
                if (this.fixBlocks[w + "_" + h])
                    return;
            }
            this.block.rotateBlock(info);
        };
        MoveBlock.prototype.showElement = function () {
            var _this = this;
            var divs = this.block.divs();
            if (!this.isAppendToParent) {
                this.isAppendToParent = true;
                divs.forEach(function (item) {
                    _this.parentEle.append(item);
                });
                divs.forEach(function (item, index) {
                    var left = parseInt(item.css("left"));
                    var top = parseInt(item.css("top"));
                    item.css("left", _this.position.left + left + "px");
                    item.css("top", _this.position.top - top + "px");
                    // showBlock
                    var copyEle = item.clone();
                    copyEle.css("left", _this.position.left + left + "px");
                    copyEle.css("top", 0 - top + "px");
                    //copyEle.css("background", "rgba(0, 1, 10,.100)");
                    _this.shadowBlock.push(copyEle);
                    _this.parentEle.append(copyEle);
                    console.log("item x", item.css("left"), " top ", item.css("top"));
                    console.log("copy x", copyEle.css("left"), " top ", copyEle.css("top"));
                });
                this.showShadowBlock();
            }
        };
        MoveBlock.prototype.showShadowBlock = function () {
            var _this = this;
            if (this.shadowBlock.length === 0)
                return;
            var max_y = -100000, fix_top_y = null;
            var x = 0;
            this.shadowBlock.forEach(function (item) {
                var y = parseInt(item.css("top")) + _this.block.blockWidth;
                if (y > max_y) {
                    max_y = y;
                    x = parseInt(item.css("left"));
                }
            });
            var calcHeight = this.boundHeight() - max_y;
            // split fixBlocks Key
            for (var key in this.fixBlocks) {
                var values = key.split("_");
                var x_row = parseInt(values[0]);
                var y_row = parseInt(values[1]);
                if (x !== x_row)
                    continue;
                if (!fix_top_y) {
                    fix_top_y = y_row;
                }
                else if (fix_top_y > y_row) {
                    fix_top_y = y_row;
                }
            }
            if (fix_top_y) {
                calcHeight = fix_top_y - max_y;
            }
            this.shadowBlock.forEach(function (item) {
                var y = parseInt(item.css("top"));
                item.css("top", (y + calcHeight) + "px");
            });
        };
        MoveBlock.prototype.moveLeft = function () {
            var block_width = this.block.blockWidth;
            var obj = this.checkBlockCanMove(-block_width, 0);
            if (!obj)
                return;
            if ((obj.minLeft - block_width) < 0)
                return;
            this.moveCurrentBlock(-block_width, 0);
        };
        MoveBlock.prototype.moveRight = function () {
            var block_width = this.block.blockWidth;
            var obj = this.checkBlockCanMove(block_width, 0);
            if (!obj)
                return;
            if ((obj.maxLeft + block_width * 2) > this.boundWidth())
                return;
            this.moveCurrentBlock(block_width, 0);
        };
        MoveBlock.prototype.moveUp = function () {
            var block_width = this.block.blockWidth;
            var obj = this.checkBlockCanMove(block_width, 0);
            if (!obj || obj.minTop <= 0)
                return;
            this.moveCurrentBlock(0, -block_width);
        };
        MoveBlock.prototype.moveDown = function () {
            var block_width = this.block.blockWidth;
            var obj = this.checkBlockCanMove(0, block_width);
            if (!obj) {
                this.canMove = false;
                return;
            }
            var bottom_height = obj.maxTop + block_width * 2;
            if (bottom_height > this.boundHeight()) {
                this.canMove = false;
                return;
            }
            this.moveCurrentBlock(0, block_width);
        };
        MoveBlock.prototype.moveCurrentBlock = function (leftValue, topValue) {
            var _this = this;
            this.position.left += leftValue;
            this.position.top += topValue;
            var divs = this.block.divs();
            divs.forEach(function (item, index) {
                var left_x = parseInt(item.css("left")) + leftValue;
                item.css("left", left_x);
                _this.shadowBlock[index].css("left", left_x);
                item.css("top", parseInt(item.css("top")) + topValue);
            });
            this.showShadowBlock();
        };
        MoveBlock.prototype.checkBlockCanMove = function (leftValue, topValue) {
            var blocks = this.block.divs();
            var maxTop = 0, minTop = this.boundHeight(), maxLeft = 0, minLeft = this.boundWidth();
            for (var index in blocks) {
                var item = blocks[index];
                var css_left = parseInt(item.css("left"));
                var css_top = parseInt(item.css("top"));
                if (this.fixBlocks[(css_left + leftValue) + "_" + (css_top + topValue)]) {
                    if (css_top + topValue <= 0)
                        this.isGameEnd = true;
                    return null;
                }
                if (css_left < minLeft)
                    minLeft = css_left;
                if (css_left > maxLeft)
                    maxLeft = css_left;
                if (css_top > maxTop)
                    maxTop = css_top;
                if (css_top < minTop)
                    minTop = css_top;
            }
            return { maxLeft: maxLeft, minLeft: minLeft, maxTop: maxTop, minTop: minTop };
        };
        MoveBlock.prototype.boundWidth = function () {
            return this.parentEle.width();
        };
        MoveBlock.prototype.boundHeight = function () {
            return this.parentEle.height();
        };
        MoveBlock.prototype.saveFixBlock = function () {
            var _this = this;
            var blocks = this.block.divs();
            blocks.forEach(function (item) {
                var css_left = parseInt(item.css("left"));
                var css_top = parseInt(item.css("top"));
                _this.fixBlocks[css_left + "_" + css_top] = item;
            });
            this.shadowBlock.forEach(function (item) {
                item.remove();
            });
            this.shadowBlock.length = 0;
            this.checkCanRemoveRow();
        };
        MoveBlock.prototype.checkCanRemoveRow = function () {
            var _this = this;
            var statisticBlocks = {};
            // split fixBlocks Key
            for (var key in this.fixBlocks) {
                var values_1 = key.split("_");
                var item = this.fixBlocks[key];
                var y_row = values_1[1];
                if (!statisticBlocks[y_row])
                    statisticBlocks[y_row] = [];
                statisticBlocks[y_row].push({ "key": key, "item": item, "y_height": parseInt(item.css("left")) });
            }
            var canRemoveBlocks = {};
            var boardWidth = this.boundWidth();
            var colCount = boardWidth / this.block.blockWidth;
            var rowCount = this.boundHeight() / this.block.blockWidth;
            // find can remove row
            for (var key in statisticBlocks) {
                var moveObj = statisticBlocks[key];
                var objCount = moveObj.length;
                if (colCount !== objCount)
                    continue;
                if (!canRemoveBlocks[key])
                    canRemoveBlocks[key] = [];
                canRemoveBlocks[key].push(moveObj);
            }
            if (jQuery.isEmptyObject(canRemoveBlocks))
                return;
            // sort asc
            var moveKeys = Object.keys(canRemoveBlocks).sort(function (v1, v2) {
                return parseInt(v1) - parseInt(v2);
            });
            // remove
            for (var moveKey in moveKeys) {
                var currentMoveKey = moveKeys[moveKey];
                canRemoveBlocks[currentMoveKey].forEach(function (ele) {
                    ele.forEach(function (item) {
                        item.item.remove();
                        var fixKey = item.key;
                        delete _this.fixBlocks[fixKey];
                    });
                });
            }
            for (var moveKey in moveKeys) {
                var currentMoveY = parseInt(moveKeys[moveKey]);
                var fixBlocksKeys = Object.keys(this.fixBlocks).sort(function (v1, v2) {
                    return parseInt(v2.split("_")[1]) - parseInt(v1.split("_")[1]);
                });
                console.log("-----------begin---------", fixBlocksKeys.length, "  fixBlocksKeys", fixBlocksKeys);
                for (var fixCurrentKeyIndex in fixBlocksKeys) {
                    var fixCurrentKey = fixBlocksKeys[fixCurrentKeyIndex];
                    var values = fixCurrentKey.split("_");
                    var currentTop = parseInt(values[1]);
                    if (currentTop > currentMoveY) {
                        console.log("continue----", this.fixBlocks[fixCurrentKey], "  fixCurrentKey ", fixCurrentKey);
                        continue;
                    }
                    var calHeight = currentTop + this.block.blockWidth;
                    var currentBlock = this.fixBlocks[fixCurrentKey];
                    currentBlock.css("top", calHeight + "px");
                    console.log("fixCurrentKeyIndex ", fixCurrentKeyIndex, " fixCurrentKey ", fixCurrentKey, " top ", currentBlock.css("top"), " calHeight ", calHeight);
                    this.fixBlocks[values[0] + "_" + calHeight] = currentBlock;
                    delete this.fixBlocks[fixCurrentKey];
                }
                console.log("-----------end---------", Object.keys(this.fixBlocks).length);
            }
        };
        return MoveBlock;
    }());
    MyTeris.MoveBlock = MoveBlock;
})(MyTeris || (MyTeris = {}));
