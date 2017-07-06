"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treedata_1 = require("./treedata");
/**
 * Created by li on 2017/7/5.
 */
var LpTree = (function () {
    function LpTree() {
        this.containerEle = $(".lp_tree");
        this.data = new treedata_1.TreeData().getData();
        console.log(this.data);
    }
    return LpTree;
}());
