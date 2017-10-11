
import {ATest} from "./test2"

namespace MyTest {
    export class CTest {
        name: string;
        At: ATest;
        constructor() {
            this.At = new ATest()
            this.At.nameAt = "Hello"
        }
    
    }
}

export = MyTest;