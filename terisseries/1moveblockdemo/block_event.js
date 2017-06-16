$(document).ready(function() {

	$(document).keydown(function (e) {
		console.log(e.keyCode);
        var __ret = extractedOffsetInfo();
        var moveDiv = __ret.moveDiv;
        var moveDivWidth = __ret.moveDivWidth;
        var moveDivHeight = __ret.moveDivHeight;
        var realOffset = __ret.realOffset;
        var realLimitOffset = __ret.realLimitOffset;

        var distance = moveDiv.width();

		// current offset
        var currentOffset = moveDiv.offset();
		switch (e.keyCode) {
			// up
            case 38 :
                if (currentOffset.top > realOffset.top) {
                    currentOffset.top -= distance;
                    moveDiv.offset(currentOffset);
                }
                console.log("up");
                break;
            // down
            case 40:
                console.log("down");
                if (currentOffset.top + moveDivHeight < realLimitOffset.top) {
                    currentOffset.top += distance;
                    moveDiv.offset(currentOffset);
                }
                break;
            // left
            case 37:
                if (currentOffset.left > realOffset.left) {
                    currentOffset.left -= distance;
                    moveDiv.offset(currentOffset);
                }
                console.log("left");

                break;
            // right
            case 39:
                console.log("right");
                if (currentOffset.left + moveDivWidth < realLimitOffset.left) {
                    currentOffset.left += distance;
                    moveDiv.offset(currentOffset);
                }
                break;
		}
	});
});

function extractedOffsetInfo() {
    //language=JQuery-CSS
    var boundDiv = $("#boundDiv");
    var boundDivBoundWidth = boundDiv.width();
    var boundDivBoundHeight = boundDiv.height();
    var boundDivOffset = boundDiv.offset();

    var boundDivBorderTop = parseInt(boundDiv.css("border-top-width"));
    var boundDivBorderLeft = parseInt(boundDiv.css("border-left-width"));

    var boundDivPaddingTop = parseInt(boundDiv.css("padding-top"));
    var boundDivPaddingLeft = parseInt(boundDiv.css("padding-left"));

    var leftWidth = boundDivBorderLeft + boundDivPaddingLeft;
    var topWidth = boundDivBorderTop + boundDivPaddingTop;

    var moveDiv = $("#moveBlock1");

    var moveDivWidth = moveDiv.outerWidth();
    var moveDivHeight = moveDiv.outerHeight();


    var realOffset = {left: boundDivOffset.left + leftWidth, top: boundDivOffset.top + topWidth};
    var realLimitOffset = {left: realOffset.left + boundDivBoundWidth, top: realOffset.top + boundDivBoundHeight};
    return {
        moveDiv: moveDiv,
        moveDivWidth: moveDivWidth,
        moveDivHeight: moveDivHeight,
        realOffset: realOffset,
        realLimitOffset: realLimitOffset
    };
}