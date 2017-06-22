/**
 * Created by li on 2017/6/22.
 */
var MyTeris;
(function (MyTeris) {
    /***
     * Singleton
     */
    var TerisConfig = (function () {
        function TerisConfig() {
            this.blockWidth = 20;
            if (TerisConfig.__instance) {
                throw new Error("Error: Instantiation failed: Use TerisConfig.getInstance() instead of new.");
            }
        }
        TerisConfig.getInstance = function () {
            return this.__instance;
        };
        return TerisConfig;
    }());
    TerisConfig.__instance = new TerisConfig();
    MyTeris.TerisConfig = TerisConfig;
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    MyTeris.getRandomColor = getRandomColor;
})(MyTeris || (MyTeris = {}));
