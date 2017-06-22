/**
 * Created by li on 2017/6/22.
 */
namespace MyTeris {

    /***
     * Singleton
     */
    export class TerisConfig {

        blockWidth: number = 20;

        private static __instance: TerisConfig = new TerisConfig();

        constructor() {
            if (TerisConfig.__instance) {
                throw new Error("Error: Instantiation failed: Use TerisConfig.getInstance() instead of new.");
            }
        }

        static getInstance(): TerisConfig {
            return this.__instance;
        }

    }

    export  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

}