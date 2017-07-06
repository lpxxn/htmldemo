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
        var root2 = new Item("河北省", true, false);
        var baoding = new Item("保定", true, true);
        baoding.child.push(new Item("一区", false, true));
        baoding.child.push(new Item("二区", false, true));
        root2.child.push(baoding);
        var tangshan = new Item("唐山", true, false);
        tangshan.child.push(new Item("唐一区", true, true));
        root2.child.push(tangshan);
        root2.child.push(new Item("石家庄", true, true));
    }
    TreeData.prototype.getData = function () {
        return this.data;
    };
    return TreeData;
}());
exports.TreeData = TreeData;
