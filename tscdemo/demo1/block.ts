/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="./point.ts" />
/// <reference path="./display.ts" />
/// <reference path="./config.ts" />

namespace MyTeris {
    import IDisplay = MyTeris.IDisplay;
    export interface IBlock {
        // 图形的点集合
        points: number[][];
        currentIndex: number;
        divs(): JQuery[];
    }

    export class Block implements IBlock {
        private blocks: JQuery[] = [];
        public currentIndex: number = 0;
        blockWidth: number;
        constructor(public points: number[][], public cssClass: string, public backgroundColor: string) {
            this.blockWidth = TerisConfig.getInstance().blockWidth;
            this.initBlock();
        };

        initBlock() {
            const current_point = this.points[this.currentIndex];
            for (let i = 0, size = current_point.length; i < size; i++) {
                const x_axis = current_point[i++];
                const y_axis = current_point[i];
                const new_div = this.createBlock();
                new_div.css("left", x_axis * this.blockWidth + "px");
                new_div.css("top",  y_axis * this.blockWidth +  "px");
                console.log("left", new_div.css("left"), "top",  new_div.css("top"));
                this.blocks.push(new_div);
            }
        };

        preRotateBlockInfo(position: Point) : RotateInfo {
            if (this.points.length === 1) return null;
            const index = this.currentIndex >= (this.points.length - 1) ? 0 : this.currentIndex + 1;
            const forecast_width = [], forecast_height = [];
            const current_point = this.points[index];

            const size = current_point.length;
            for (let point_index = 0; point_index < size; point_index ++ ) {
                const x_axis = current_point[point_index++];
                const y_axis = current_point[point_index];
                const _w = position.left + x_axis * this.blockWidth;
                const _h = position.top - y_axis * this.blockWidth;
                forecast_width.push(_w );
                forecast_height.push(_h);
            }

            return {"index": index, "widths": forecast_width, "heights": forecast_height}
        };

        rotateBlock(rotateInfo: RotateInfo) {
            this.currentIndex = rotateInfo.index;
            const size = this.blocks.length;
            for (let div_index = 0; div_index < size; div_index++) {
                var current_div = this.blocks[div_index];
                current_div.css("left", rotateInfo.widths[div_index] + "px");
                current_div.css("top", rotateInfo.heights[div_index] + "px");
            }
        }

        private createBlock() : JQuery {
            const $ele = $("<div ></div>", {"class": this.cssClass});
            $ele.css("background", this.backgroundColor);
            const borderWidth = (parseInt($ele.css("border-width")) || 1) * 2;
            $ele.css("width", this.blockWidth - borderWidth + "px");
            $ele.css("height", this.blockWidth - borderWidth + "px");
            return $ele;
        };

        divs(): JQuery[] {
            return this.blocks;
        };

    }

    export interface IMoveBlock {
        moveLeft();
        moveRight();
        moveUp();
        moveDown();
    }

    export class MoveBlock implements IDisplay, IMoveBlock {
        fixBlocks:any = {};
        position: Point;
        canMove: boolean = true;
        isGameEnd:boolean =  false;
        block: Block;
        private isAppendToParent = false;
        constructor(public parentEle: JQuery) {
        }

        newBlock(points: number[][], cssClass: string, backgroundColor: string, position: Point) {
            this.canMove = true;
            this.isAppendToParent = false;
            this.position = position;
            this.block = new Block(points, cssClass, backgroundColor);
        }

        rotateBlockInfo() {
            const info = this.block.preRotateBlockInfo(this.position);
            const size = info.heights.length;
            for (let index = 0; index < size; index++) {
                const w = info.widths[index];
                const h = info.heights[index];
                if (w < 0 || (w + this.block.blockWidth) > this.boundWidth()) return;
                if (h > (this.boundHeight() + this.block.blockWidth)) return;
                if (this.fixBlocks[w + "_" + h]) return;
            }
            this.block.rotateBlock(info);
        }

        showElement(): void {
            const divs = this.block.divs();
            if(!this.isAppendToParent) {
                this.isAppendToParent = true;
                divs.forEach(item => {
                    this.parentEle.append(item);
                });

                divs.forEach(item => {
                    const left = parseInt(item.css("left"));
                    const top = parseInt(item.css("top"));
                    item.css("left", this.position.left + left + "px");
                    item.css("top", this.position.top - top + "px");
                });
            }
        }

        moveLeft() {
            let block_width = this.block.blockWidth;
            let obj = this.checkBlockCanMove(-block_width, 0);
            if (!obj) return;
            if ((obj.minLeft - block_width) < 0) return;

            this.moveBlock(-block_width, 0);
        }

        moveRight() {
            let block_width = this.block.blockWidth;
            let obj = this.checkBlockCanMove(block_width, 0);
            if (!obj) return;
            if ((obj.maxLeft + block_width * 2) > this.boundWidth()) return;
            this.moveBlock(block_width, 0);
        }

        moveUp() {
            const block_width = this.block.blockWidth;
            let obj = this.checkBlockCanMove(block_width, 0);
            if (!obj || obj.minTop <= 0) return;
            this.moveBlock(0, -block_width);
        }

        moveDown() {
            const block_width = this.block.blockWidth;
            let obj = this.checkBlockCanMove(0, block_width);
            if (!obj) {
                this.canMove = false;

                return;
            }
            const bottom_height = obj.maxTop + block_width * 2;
            if (bottom_height > this.boundHeight()) {
                this.canMove = false;
                return;
            }
            this.moveBlock(0, block_width);
        }

        private moveBlock(leftValue: number, topValue: number){
            this.position.left += leftValue;
            this.position.top += topValue;
            const divs = this.block.divs();
            divs.forEach(item => {
                item.css("left", parseInt(item.css("left")) + leftValue);
                item.css("top", parseInt(item.css("top")) + topValue);
            });
        }

        private checkBlockCanMove(leftValue: number, topValue: number) {
            const blocks = this.block.divs();
            let maxTop = 0, minTop = this.boundHeight(), maxLeft = 0, minLeft = this.boundWidth();
            for (let index in blocks) {
                const item = blocks[index];
                const css_left = parseInt(item.css("left"));
                const css_top = parseInt(item.css("top"));

                if (this.fixBlocks[(css_left + leftValue) + "_" + (css_top + topValue)]) {
                    if (css_top + topValue <= 0) this.isGameEnd = true;
                    return null;
                }
                if (css_left < minLeft) minLeft = css_left;
                if (css_left > maxLeft) maxLeft = css_left;
                if (css_top > maxTop) maxTop = css_top;
                if (css_top < minTop) minTop = css_top;
            }
            return {maxLeft, minLeft, maxTop, minTop};
        }

        private boundWidth():number {
            return this.parentEle.width();
        }
        private boundHeight(): number {
            return this.parentEle.height();
        }

        saveFixBlock() {
            const blocks = this.block.divs();
            blocks.forEach(item => {
                const css_left = parseInt(item.css("left"));
                const css_top = parseInt(item.css("top"));
                this.fixBlocks[css_left + "_" + css_top] = item;
            });
            this.checkCanRemoveRow();
        }
        checkCanRemoveRow() {
            const statisticBlocks = {};
            // split fixBlocks Key
            for (let key in this.fixBlocks) {
                const values = key.split("_");
                const item = this.fixBlocks[key];
                const y_row = values[1];
                if (!statisticBlocks[y_row]) statisticBlocks[y_row] = [];
                statisticBlocks[y_row].push({"key": key, "item": item, "y_height": parseInt(item.css("left"))});
            }

            var canRemoveBlocks = {};
            var boardWidth = this.boundWidth();
            var colCount = boardWidth / this.block.blockWidth;
            var rowCount = this.boundHeight() / this.block.blockWidth;

            // find can remove row
            for (let key in statisticBlocks) {
                var moveObj = statisticBlocks[key];
                var objCount = moveObj.length;
                if (colCount !== objCount) continue;

                if (!canRemoveBlocks[key]) canRemoveBlocks[key] = [];
                canRemoveBlocks[key].push(moveObj);
            }
            if (jQuery.isEmptyObject(canRemoveBlocks)) return;

            // sort asc
            var moveKeys = Object.keys(canRemoveBlocks).sort( (v1, v2) =>{
                return parseInt(v1) - parseInt(v2);
            });
            // remove
            for (var moveKey in moveKeys) {
                var currentMoveKey = moveKeys[moveKey];
                canRemoveBlocks[currentMoveKey].forEach(ele => {
                    ele.forEach(item => {
                        item.item.remove();
                        var fixKey = item.key;
                        delete this.fixBlocks[fixKey];
                    });
                });
            }

            for (var moveKey in moveKeys) {
                var currentMoveY = parseInt(moveKeys[moveKey]);
                var fixBlocksKeys = Object.keys(this.fixBlocks).sort((v1, v2) => {
                    return  parseInt(v2.split("_")[1]) - parseInt(v1.split("_")[1]);
                });
                console.log("-----------begin---------", fixBlocksKeys.length, "  fixBlocksKeys", fixBlocksKeys);
                for (var fixCurrentKeyIndex in fixBlocksKeys) {
                    var fixCurrentKey = fixBlocksKeys[fixCurrentKeyIndex];
                    var values = fixCurrentKey.split("_");
                    var currentTop =  parseInt(values[1]);

                    if (currentTop > currentMoveY) {
                        console.log("continue----",  this.fixBlocks[fixCurrentKey], "  fixCurrentKey ", fixCurrentKey);
                        continue;
                    }

                    var calHeight = currentTop + this.block.blockWidth;
                    var currentBlock = this.fixBlocks[fixCurrentKey];
                    currentBlock.css("top", calHeight + "px");
                    console.log("fixCurrentKeyIndex ", fixCurrentKeyIndex, " fixCurrentKey ", fixCurrentKey, " top ",currentBlock .css("top"), " calHeight ", calHeight);
                    this.fixBlocks[values[0] + "_" + calHeight] = currentBlock;
                    delete this.fixBlocks[fixCurrentKey];

                }
                console.log("-----------end---------", Object.keys(this.fixBlocks).length);
            }
        }
    }
}


