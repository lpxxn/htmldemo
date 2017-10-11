var lp_tree =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by li on 2017/7/5.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item(name, isFolder, isDisplay) {
        this.child = [];
        this.name = name;
        this.isFolder = isFolder;
        this.isDisplay = isDisplay;
    }
    return Item;
}());
exports.Item = Item;
var TreeData = (function () {
    function TreeData() {
        this.data = [];
        var root1 = new Item("北京", true, true);
        root1.child.push(new Item("东城区", false, true));
        root1.child.push(new Item("西城区", false, true));
        root1.child.push(new Item("朝阳区", false, false));
        var root2 = new Item("河北省", true, true);
        var baoding = new Item("保定", true, true);
        baoding.child.push(new Item("一区", false, true));
        baoding.child.push(new Item("二区", false, true));
        root2.child.push(baoding);
        var tangshan = new Item("唐山", true, false);
        tangshan.child.push(new Item("唐一区", true, true));
        root2.child.push(tangshan);
        root2.child.push(new Item("石家庄", true, true));
        this.data.push(root1);
        this.data.push(root2);
    }
    TreeData.prototype.getData = function () {
        return this.data;
    };
    return TreeData;
}());
exports.TreeData = TreeData;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var treedata_1 = __webpack_require__(0);
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


/***/ })
/******/ ]);
//# sourceMappingURL=lp_tree.js.map