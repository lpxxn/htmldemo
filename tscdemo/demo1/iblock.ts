/// <reference path="./node_modules/@types/jquery/index.d.ts" />
/// <reference path ="./point.ts" />
/// <reference path="./idisplay.ts" />

namespace MyTeris {
    export interface IBlock {
            /// 图形的点集合
            points: number[][];
            position: Point;
            divs(): JQuery[];
    }



    export class Block implements IBlock, IDisplay {
        backgroundColor: string = "black";

        constructor(public points: number[][],public cssClass: string, public position: Point) {

        }

        initBlock() {

        }

        showElement(): void {
            throw new Error("Method not implemented.");
        }

        divs(): JQuery[] {
            return [$("")];
        }

    }
}


