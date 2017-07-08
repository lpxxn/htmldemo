/**
 * Created by li on 2017/7/5.
 */


export class Item {
    name: string;
    isFolder: boolean;
    isDisplay: boolean;
    constructor(name: string, isFolder: boolean, isDisplay: boolean) {
        this.name = name;
        this.isFolder = isFolder;
        this.isDisplay = isDisplay;
    }
    child: Item[] = [];

}

export class TreeData {

    data: Item[] = [];
    constructor() {
        const root1 = new Item("北京", true, true);

        root1.child.push(new Item("东城区", false, true));
        root1.child.push(new Item("西城区", false, true));
        root1.child.push(new Item("朝阳区", false, false));

        const root2 = new Item("河北省", true, false);
        const baoding = new Item("保定", true, true);
        baoding.child.push(new Item("一区", false, true));
        baoding.child.push(new Item("二区", false, true));
        root2.child.push(baoding);

        const tangshan = new Item("唐山", true, false);
        tangshan.child.push(new Item("唐一区", true, true));
        root2.child.push(tangshan);

        root2.child.push(new Item("石家庄", true, true));

        this.data.push(root1);
        this.data.push(root2);

    }

    getData(): Item[] {
        return this.data;
    }
}