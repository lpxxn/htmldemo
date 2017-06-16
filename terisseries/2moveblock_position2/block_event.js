$(document).ready(function() {

    var IBlock  = [[0, 2, 1, 2, 2, 2, 3, 2], [2, 0, 2, 1, 2, 2, 2, 3]];
    var LBlock  = [[1, 3, 1, 2, 2, 2, 3, 2], [3, 3, 2, 3, 2, 2, 2, 1], [3, 1, 3, 2, 2, 2, 1, 2], [1, 1, 2, 1, 2, 2, 2, 3]];
    var ZBlock1 = [[1, 3, 1, 2, 2, 2, 2, 1], [3, 3, 2, 3, 2, 2, 1, 2]];
    var ZBlock2 = [[2, 3, 2, 2, 1, 2 , 1, 1], [1, 3, 2, 3, 2, 2, 3, 2]];
    var OBlock  = [[1, 3, 2, 3, 1, 2, 2, 2]];
    var SBlock  = [[1, 3, 1, 2, 1, 1, 2, 2], [0, 2, 1, 2, 2, 2, 1, 1], [0, 2, 1, 3, 1, 2 ,1, 1], [1, 3, 0, 2, 1, 2 , 2, 2]];
    var blocks = [IBlock, LBlock, ZBlock1, ZBlock2, OBlock, SBlock];
    var fixBlocks = {};
    var timeIntervalId;
    var block_obj;
    function createBlock() {
        var block_index = Math.floor(Math.random() * (blocks.length - 1));
        return  new block(blocks[block_index], "moveBlock1", "black", {top: 80, left: 80}, $("#boundDiv"), fixBlocks);

    }
    function saveFixBlock(block) {
        var saveDivs =  block.divs;
        saveDivs.forEach(function(item) {
            var css_left = parseInt(item.css("left"));
            var css_top = parseInt(item.css("top"));
            fixBlocks[css_left + "_" + css_top] = item;
        })
    }

    block_obj = createBlock();

    function createTimeInterval() {
        timeIntervalId = setInterval(function() {

            if (block_obj.can_move)
                block_obj.move({left:0, top: 1});
            else {
                saveFixBlock(block_obj);
                block_obj = createBlock();
            }

        }, 1000);
    }

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
    }

    function clearTimeinterval() {
        clearInterval(timeIntervalId)
    }
    createTimeInterval();

    $(document).keydown(function (e) {
		console.log(e.keyCode);

		switch (e.keyCode) {
			// up
            case 38 :
                console.log("up");
                block_obj.move({left:0, top: -1});
                break;
            // down
            case 40:
                console.log("down");
                block_obj.move({left:0, top: 1});
                break;
            // left
            case 37:
                console.log("left");
                block_obj.move({left:-1, top: 0});
                break;
            // right
            case 39:
                console.log("right");
                block_obj.move({left:1, top: 0});
                break;

            case 32:
                console.log('space');
                block_obj.route_block();
                break;
		}

	});
});

function extractedOffsetInfo() {
    var boundDiv = $("#boundDiv");
    var boundDivBoundWidth = boundDiv.width();
    var boundDivBoundHeight = boundDiv.height();
    return {
        boundDivBoundWidth: boundDivBoundWidth,
        boundDivBoundHeight: boundDivBoundHeight
    };

}

// create element
/**
 *
 * @param {String} eleName
 * @param {String} className
 * @param background_color
 * @returns {*|jQuery|HTMLElement}
 */
var createEle = function (eleName, className, background_color) {
    var $ele = $("<" + eleName + "/>", {"class": className});
    $ele.css("background", background_color);
    return $ele;
};

/**
 * 方块 Block Class
 * @param {Array.<number>}points
 * @param {String} className
 * @param {String} background_color
 * @param {Top, Left} position
 * @param parent_ele
 */
var block = function(points, className, background_color, position, parent_ele, fixBlocks) {
    //
    if (!points || points.length === 0) throw "points invalid";

    this.points = points;
    this.current_index = 0;
    this.className =  className;
    this.background_color = background_color;
    this.divs = [];
    this.position = position;
    this.parent_ele = parent_ele;
    this.can_move = true;
    this.block_width = 20;
    this.fixBlocks = fixBlocks;
    this.init_block = function() {
        var current_point = this.points[this.current_index];
        for (var size = current_point.length, point_index = 0; point_index < size; point_index++) {
            var x_axis = current_point[point_index++];
            var y_axis = current_point[point_index];
            var new_div = createEle("div", this.className, this.background_color);

            new_div.css("left", this.position.left + x_axis * this.block_width + "px");
            new_div.css("top", this.position.top - y_axis * this.block_width + "px");

            console.log(this.position, "x", x_axis, new_div.css("left"), "y", y_axis, new_div.css("top"));
            this.divs.push(new_div);
            this.parent_ele.append(new_div);
        }
    };
    this.init_block();

    this.route_block = function () {
        if (this.points.length === 1) return;
        var index = this.current_index >= (this.points.length - 1) ? 0 : this.current_index + 1;
        var current_point = this.points[index];

        var size = current_point.length;
        var forecast_width = [], forecast_height = [];
        for (var point_index = 0; point_index < size; point_index++) {
            var x_axis_c = current_point[point_index++];
            var y_axis_c = current_point[point_index];
            forecast_width.push( this.position.left + x_axis_c * this.block_width);
            forecast_height.push(this.position.top - y_axis_c * this.block_width);
        }
        var __rel = extractedOffsetInfo();
        if (0 > Math.min.apply(null, forecast_width)) return;
        if (__rel.boundDivBoundWidth < Math.max.apply(null, forecast_width) + this.block_width) return;
        if (0 > Math.min.apply(null, forecast_height)) return;
        if (__rel.boundDivBoundHeight < Math.max.apply(null, forecast_height)  + this.block_width) return;

        this.current_index = index;

        size = this.divs.length;
        for (div_index = 0; div_index < size; div_index++) {
            var current_div = this.divs[div_index];
            current_div.css("left", forecast_width[div_index] + "px");
            current_div.css("top", forecast_height[div_index] + "px");
        }
    };

    /**
     *
     * @param {Object} position
     */
    this.move = function(position) {
        var x_axis = position.left;
        var y_axis = position.top;

        var __rel = extractedOffsetInfo();

        var x_width = x_axis * this.block_width;
        var y_width = y_axis * this.block_width;

        var maxLeft = 0, minLeft = __rel.boundDivBoundWidth, minTop = __rel.boundDivBoundHeight, maxTop = 0;
        for (var i in  this.divs) {
            var item = this.divs[i];
            var css_left = parseInt(item.css("left"));
            var css_top = parseInt(item.css("top"));

            // down
            if (position.top > 0) {
                if (this.fixBlocks[css_left + "_" + (css_top + this.block_width)]) {
                    this.can_move = false;
                    return;
                }
            }


            if (css_left < minLeft) minLeft = css_left;
            if (css_left > maxLeft) maxLeft =  css_left;
            if (css_top > maxTop) maxTop = css_top;
            if (css_top < minTop) minTop = css_top;
        }



        var bottom_height = maxTop + y_width * 2;
        // right
        if (position.left > 0 && (maxLeft + x_width * 2) > __rel.boundDivBoundWidth) return;
        // left
        if (position.left < 0 && (minLeft + x_width) < 0)  return;
        // down
        if (position.top > 0 && bottom_height > __rel.boundDivBoundHeight)
        {
            this.can_move = false;
            return;
        }
        // up
        if (position.top < 0 && (minTop + y_width ) < 0) return;

        this.position.left += x_width;
        this.position.top += y_width;

        this.divs.forEach(function(item) {
            if (x_axis !== 0)
                item.css("left", parseInt(item.css("left")) + x_width);

            if (y_axis !== 0)
                item.css("top", parseInt(item.css("top")) + y_width);
        }, this);
        if (bottom_height === __rel.boundDivBoundHeight) {
            this.can_move = false;
        }

    }
};