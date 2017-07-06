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

        });
    }
}


