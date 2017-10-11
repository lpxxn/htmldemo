"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treedata_1 = require("./treedata");
var LpTree = (function () {
    function LpTree(hyperlinkClink) {
        this.hyperlinkClink = hyperlinkClink;
        this.init();
    }
    ;
    LpTree.prototype.init = function () {
        var _this = this;
        this.treeDiv = $(".lp_tree");
        this.containerEle = $("<ul> </ul>");
        this.treeDiv.append(this.containerEle);
        this.data = new treedata_1.TreeData().getData();
        console.log(this.data);
        this.data.forEach(function (item) {
            _this.constructTree(item, _this.containerEle);
        });
        // 设置链接不响应单击事件
        this.containerEle.find("a").click(function () {
            $(this).parent("li").click();
            return false;
        });
        var _self = this;
        // 隐藏所有子级节点
        this.treeDiv.find("ul ul").hide();
        // li click
        this.treeDiv.find("li").click(function () {
            var aObj = $(this).find("a")[0];
            if (aObj) {
                _self.hyperlinkClink(aObj);
            }
            // 子项
            var ulObj = $(this).next("ul");
            if (!ulObj)
                return;
            if (ulObj.attr("show") === "true") {
                ulObj.attr("show", "false");
                ulObj.hide();
                ulObj.prev("li").removeClass("open");
            }
            else {
                ulObj.attr("show", "true");
                ulObj.show();
                ulObj.prev("li").addClass("open");
            }
        });
        this.treeDiv.find("li").hover(function () {
            $(this).toggleClass("hover");
        });
    };
    LpTree.prototype.constructTree = function (item, parentEle) {
        var _this = this;
        if (!item.isDisplay)
            return;
        var ele = $("<li></li>");
        ele.attr("att1", item.name);
        ele.prop("prop1", item.isFolder);
        parentEle.append(ele);
        var aEle = $("<a>" + item.name + "</a>");
        ele.append(aEle);
        if (!item.isFolder) {
            ele.addClass("tree_node");
        }
        else {
            var uEle = $("<ul> </ul>");
            parentEle.append(uEle);
            item.child.forEach(function (childItem) {
                _this.constructTree(childItem, uEle);
            });
            ele.addClass("folder");
        }
    };
    return LpTree;
}());
exports.LpTree = LpTree;
