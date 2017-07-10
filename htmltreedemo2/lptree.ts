import {Item, TreeData} from "./treedata";
/**
 * Created by li on 2017/7/5.
 */

interface HyClick {
    (obj: HTMLElement):void;
}

export class LpTree {
    treeDiv: JQuery;
    containerEle: JQuery;
    data: Item[];
    hyperlinkClink: HyClick;
    constructor(hyperlinkClink:((obj: HTMLElement) => {})) {
        this.hyperlinkClink = hyperlinkClink;
        this.init();
    };

    private init() {
        this.treeDiv = $(".lp_tree");
        this.containerEle = $("<ul> </ul>");
        this.treeDiv.append(this.containerEle);
        this.data = new TreeData().getData();
        console.log(this.data);
        this.data.forEach(item => {
            this.constructTree(item, this.containerEle);
        });

        // 设置链接不响应单击事件
        this.containerEle.find("a").click(function () {
            $(this).parent("li").click();
            return false;
        });
        const _self = this;
        // 隐藏所有子级节点
        this.treeDiv.find("ul ul").hide();
        // li click
        this.treeDiv.find("li").click(function() {
            const aObj = $(this).find("a")[0];
            if (aObj) {
                _self.hyperlinkClink(aObj);
            }
            // 子项
            let ulObj = $(this).next("ul");
            if (!ulObj) return;
            if (ulObj.attr("show") === "true") {
                ulObj.attr("show", "false");
                ulObj.hide();
                ulObj.prev("li").removeClass("open");
            } else {
                ulObj.attr("show", "true");
                ulObj.show();
                ulObj.prev("li").addClass("open");
            }

        });
    }

    constructTree(item: Item, parentEle: JQuery) {
        if (!item.isDisplay) return;

        const ele = $("<li></li>");
        ele.attr("att1", item.name);
        ele.prop("prop1", item.isFolder);
        parentEle.append(ele);

        const aEle = $("<a>" + item.name + "</a>");
        ele.append(aEle);

        if (!item.isFolder) {
            ele.addClass("tree_node");
        } else {
            var uEle = $("<ul> </ul>");
            parentEle.append(uEle);
            item.child.forEach(childItem => {
                this.constructTree(childItem, uEle);
            });
            ele.addClass("folder");
        }

    }

}


