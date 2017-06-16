$(document).ready(function() {

	$(document).keydown(function (e) {
		console.log(e.keyCode);
        var __ret = extractedOffsetInfo();
        var moveDiv = __ret.moveDiv;
        var moveDivWidth = __ret.moveDivWidth;
        var moveDivHeight = __ret.moveDivHeight;
        var boundDivBoundWidth = __ret.boundDivBoundWidth;
        var boundDivBoundHeight = __ret.boundDivBoundHeight;

        var distance = moveDiv.width();

        var moveDiv_Left = parseInt(moveDiv.css("left")) || 0;
        var moveDiv_Top = parseInt(moveDiv.css("top"))  || 0;
        console.log(moveDiv_Left, moveDiv_Top);
		switch (e.keyCode) {
			// up
            case 38 :
                if (moveDiv_Top > 0) {
                    moveDiv_Top -= distance;
                    moveDiv.css("top", moveDiv_Top);
                }
                console.log("up");
                break;
            // down
            case 40:
                console.log("down");
                if (moveDiv_Top + moveDivHeight < boundDivBoundHeight) {
                    moveDiv_Top += distance;
                    moveDiv.css("top", moveDiv_Top);
                }
                break;
            // left
            case 37:
                if (moveDiv_Left > 0) {
                    moveDiv_Left -= distance;
                    moveDiv.css("left", moveDiv_Left);
                }
                console.log("left");

                break;
            // right
            case 39:
                console.log("right");
                if (moveDiv_Left + moveDivWidth < boundDivBoundWidth) {
                    moveDiv_Left += distance;
                    moveDiv.css("left", moveDiv_Left);
                }
                break;
		}
	});
});

function extractedOffsetInfo() {
    var boundDiv = $("#boundDiv");
    var boundDivBoundWidth = boundDiv.width();
    var boundDivBoundHeight = boundDiv.height();
    var moveDiv = $("#moveBlock1");
    var moveDivWidth = moveDiv.outerWidth();
    var moveDivHeight = moveDiv.outerHeight();
    return {
        moveDiv: moveDiv,
        moveDivWidth: moveDivWidth,
        moveDivHeight: moveDivHeight,

        boundDivBoundWidth: boundDivBoundWidth,
        boundDivBoundHeight: boundDivBoundHeight
    };
}