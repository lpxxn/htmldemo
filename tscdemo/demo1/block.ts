/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="./point.ts" />
/// <reference path="./display.ts" />
/// <reference path="./config.ts" />

namespace MyTeris {

    export interface IBlock {
        // 图形的点集合
        points: number[][];
        currentIndex: number;

        divs(): JQuery[];
    }



    export class Block implements IBlock {
        private blocks: JQuery[] = [];
        private blockCount: number;
        public currentIndex: number = 0;
        constructor(public points: number[][], public cssClass: string, public backgroundColor: string = "black", blockCount: number = 4) {
            this.blockCount = blockCount;
            this.initBlock();
        }

        initBlock() {
            const current_point = this.points[this.currentIndex];
            for (let i = 0; i < this.blockCount; i++) {
                const x_axis = current_point[i++];
                const y_axis = current_point[i];
                const block_width = TerisConfig.getInstance().blockWidth;
                const new_div = this.createBlock();
                new_div.css("left", x_axis * block_width + "px");
                new_div.css("top",  200 + y_axis * block_width + "px");
                this.blocks.push(new_div);
            }
        }


        private createBlock() : JQuery {
            const $ele = $("<div />", {"class": this.cssClass});
            $ele.css("background", this.backgroundColor);
            const block_width = TerisConfig.getInstance().blockWidth - 2;
            $ele.css("width", block_width + "px");
            $ele.css("height", block_width + "px");


            return $ele;
        }

        divs(): JQuery[] {
            return this.blocks;
        }

    }
}


