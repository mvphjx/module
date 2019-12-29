var fabric = fabric || { version: '3.5.0' };

if (typeof exports !== 'undefined') {
    exports.fabric = fabric;
}
/* _AMD_START_ */
else if (typeof define === 'function' && define.amd) {
    define([], function() { return fabric; });
}
/* _AMD_END_ */

(function(global) {
    console.log("当前命名空间是："+this);
    /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */
    var fabric = global.fabric || (global.fabric = { });
    if (fabric.Intersection) {
        //Intersection 模块已经存在
        fabric.warn('fabric.Intersection is already defined');
        return;
    }
    /**
     * Intersection class
     * @class fabric.Intersection
     * @memberOf fabric
     * @constructor //构造方法
     */
    function Intersection(status) {
        this.status = status;
        this.points = [];
    }
    fabric.Intersection.prototype = /** @lends fabric.Intersection.prototype */ {
        constructor: Intersection,
        /**
         * Appends a point to intersection
         * @param {fabric.Point} point
         * @return {fabric.Intersection} thisArg
         * @chainable 返回对象本身 链式调用
         */
        appendPoint: function (point) {
            this.points.push(point);
            return this;
        }
    };
    /**
     * Checks if one line intersects another
     * @static  静态方法
     * @param {fabric.Point} a1
     * @param {fabric.Point} a2
     * @param {fabric.Point} b1
     * @param {fabric.Point} b2
     * @return {fabric.Intersection}
     */
    fabric.Intersection.intersectLineLine = function (a1, a2, b1, b2) {
        return new Intersection();
    };
    //注入模块
    fabric.Intersection = Intersection;

    /**
     * 闭包函数，参数是当前命名空间:
     * 情形1：npm安装，原理是Node为每个模块提供一个exports变量
     * 情形2：浏览器环境下，this指向浏览器windows对象
     */
})(typeof exports !== 'undefined' ? exports : this);

