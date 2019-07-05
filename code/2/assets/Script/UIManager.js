// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        ui1: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.Global.uiManager = this;
    },

    start() {
    },

    showUI1(title) {
        this.ui1.getComponent("UI1").initData(title);
        this.ui1.active = true;
    },

    //接受回调UI1关闭
    //比如关闭UI1时候 打开某个界面。
    //由UI1 里面直接调用
    handleCloseUI1() {

    },

    // update (dt) {},
});
