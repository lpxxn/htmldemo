import {Base} from "./ibase";
/**
 * Created by admin on 2017/6/28.
 */
export class TTT{
    Age:number;
    constructor() {
        this.Age = 10;
    }
}
export class Test {
    base: Base;
    constructor() {
        this.base = new Base();
        this.base.name = "lili";
    }
    name():string {
        return this.base.name;
    }
}