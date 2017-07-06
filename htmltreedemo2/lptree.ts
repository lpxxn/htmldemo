import {Item, TreeData} from "./treedata";
/**
 * Created by li on 2017/7/5.
 */

class LpTree {
    
    containerEle: JQuery;
    data: Item[];
    constructor() {
        var treeDiv = $(".lp_tree");
        this.containerEle = $("<ul> </ul>");
        treeDiv.append(this.containerEle);
        this.data = new TreeData().getData();
        console.log(this.data);
        this.data.forEach(item => {
            this.constructTree(item, this.containerEle);
        });
    };

    constructTree(item: Item, parentEle: JQuery) {
        if (!item.isDisplay) return;

        const ele = $("<li></li>");
        parentEle.append(ele);

        const aEle = $("<a>" + item.name + "</a>");
        ele.append(aEle);

        if (!item.isFolder) {
            ele.addClass("tree_node");
        } else {
            ele.addClass("folder");
            item.child.forEach(childItem => {
                this.constructTree(childItem, ele);
            })
        }
    }

}


