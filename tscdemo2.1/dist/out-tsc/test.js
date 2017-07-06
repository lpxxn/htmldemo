"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ibase_1 = require("./ibase");
/**
 * Created by admin on 2017/6/28.
 */
var TTT = (function () {
    function TTT() {
        this.Age = 10;
    }
    return TTT;
}());
exports.TTT = TTT;
var Test = (function () {
    function Test() {
        this.base = new ibase_1.Base();
        this.base.name = "lili";
    }
    Test.prototype.name = function () {
        return this.base.name;
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=test.js.map