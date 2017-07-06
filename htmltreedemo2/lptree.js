"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treedata_1 = require("./treedata");
/**
 * Created by li on 2017/7/5.
 */
var LpTree = (function () {
    function LpTree() {
        var treeDiv = $(".lp_tree");
        this.containerEle = $("<ul> </ul>");
        treeDiv.append(this.containerEle);
        this.data = new treedata_1.TreeData().getData();
        console.log(this.data);
        this.data.forEach(function (item) {
        });
    }
    return LpTree;
}());
