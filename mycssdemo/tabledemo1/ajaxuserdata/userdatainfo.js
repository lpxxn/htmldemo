"use strict";

var PageBase = function() {
    this.init.apply(this, arguments);
}

PageBase.prototype.init = function() {
    console.log("init base");
    this._callback = null;
    this._pageNow = 1;
}

PageBase.prototype.setCallback = function(cb) {
    this._callback = cb;
}


PageBase.prototype.CallbackProcess = function () {
    if (this._callback) {
        this._isLoading = true;
        var self = this;
        this._callback.call(this, this._pageNow, function() {
            self._isLoading = false;
        })
    }
}

//  

/**
 * @constructor
 */
var PageObj = function() {
    this.init.apply(this, arguments);
}

PageObj.prototype = new PageBase(); //  继承自PageBase


/**
 * 初始
 * @param {string} divEle 
 * @param {object} laypage
 * @param {function} callback
 */
PageObj.prototype.init = function (divEle, callback) {

    this._callback = null;
    this._isLoading = false;            // 加载中

    this.setCallback(callback);

    this.CallbackProcess();    
}

PageObj.prototype.PageEvent = function(pageObj, isFirst) {
    if (isFirst) {
        console.log("first");
        return;
    }
    this._pageObj = pageObj;
    this._pageNow = this._pageObj.curr;
    this.CallbackProcess();
}


