/**
 * 闭包 避免全局命名冲突
 * 使用 define进行模块加载
 */
var logDemoClass = (function () {
    //模块业务代码
    var logDemo = function (message) {
        return {
            warn: function (value) {
                if (!message || !message.version) {
                    message = {version: "0.0"}
                }
                let msg= "当前版本信息：" + message.version + ",内容：" + value
                console.warn(msg);
                document.body.innerText=msg;
            }
        };
    };
    return logDemo;
}());
if (typeof exports !== "undefined") {
    exports.logDemoClass = logDemoClass;
} else if (typeof define === "function" && define.amd) {
    define([], function () {
        return logDemoClass;
    });
}
export {logDemoClass};

