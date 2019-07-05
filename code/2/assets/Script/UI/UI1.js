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
        titleLabel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    //初始化地方，可以用来获得一些节点信息
    //注意：当在Scene 如果active 为false。会在active为true 的时候调用一次。并且在onEnable之前
    onLoad() {
        this.title2Label = this.node.getChildByName("Title2").getComponent(cc.Label);

        //注意 如果外部会通过initData 修改。 不要再这边初始化， 放到onEnable函数里面
        //当Scene中节点active false时, 函数被调用流程 initData->onLoad->onEnable
        //this.title2Label.string = "哈哈哈";
    },

    //外部信息传入, 存储纯数据，之后由onEnable去配置到对应节点信息。
    //建议在设置active 为true 前调用
    initData(title) {
        this.titleString = title;
    },
    //当active false=>true 时触发。
    //Scene 如果设置active 为true 时，Scene加载后会被调用
    //注意：父节点的active 变化并不会触发。
    onEnable() {
        this.titleLabel.string = this.titleString;
        this.title2Label.string = "呵呵呵";
    },

    //active true=>false 时候触发
    //注意：父节点的active 变化并不会触发。
    onDisable() {

    },

    start() {

    },

    handleBtn1() {
        this.titleLabel.string = "UI1 按下按钮";
    },

    handleClose() {
        this.node.active = false;
        //告诉外面 此界面关闭
        cc.Global.uiManager.handleCloseUI1();
    },

    // update (dt) {},
});
