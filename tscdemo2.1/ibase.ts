/**
 * Created by admin on 2017/6/28.
 */
interface IBase {
    name:string
}

export class Base implements IBase {
    name: string;

    getName() {
        return "aaa";
    }
}