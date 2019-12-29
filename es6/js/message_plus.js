import * as messageBase from './message.js';

class message extends messageBase.message{
    constructor(){
        super();
        //
        /**
         * 此时 super.version  为空
         * this.version 有值
         * @type {string}
         */
        this.version= this.version+"plus";
    }
    toString() {
        console.log("message_plus.js-toString");
        return super.toString();
    }
}
//导出模块
export {message};
