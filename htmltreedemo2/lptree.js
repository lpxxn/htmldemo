"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treedata_1 = require("./treedata");
/**
 * Created by li on 2017/7/5.
 */
var LpTree = (function () {
    function LpTree() {
        var _this = this;
        var treeDiv = $(".lp_tree");
        this.containerEle = $("<ul> </ul>");
        treeDiv.append(this.containerEle);
        this.data = new treedata_1.TreeData().getData();
        console.log(this.data);
        this.data.forEach(function (item) {
            _this.constructTree(item, _this.containerEle);
        });
    }
    ;
    LpTree.prototype.constructTree = function (item, parentEle) {
        var _this = this;
        if (!item.isDisplay)
            return;
        var ele = $("<li></li>");
        parentEle.append(ele);
        var aEle = $("<a>" + item.name + "</a>");
        ele.append(aEle);
        if (!item.isFolder) {
            ele.addClass("tree_node");
        }
        else {
            ele.addClass("folder");
            item.child.forEach(function (childItem) {
                _this.constructTree(childItem, ele);
            });
        }
    };
    return LpTree;
}());
exports.LpTree = LpTree;
