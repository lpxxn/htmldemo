import {Item, TreeData} from "./treedata";
/**
 * Created by li on 2017/7/5.
 */

class LpTree {
    
    containerEle: JQuery;
    data: Item[];
    constructor() {
        this.containerEle = $(".lp_tree");
        this.data = new TreeData().getData();
        console.log(this.data);
    }
}


