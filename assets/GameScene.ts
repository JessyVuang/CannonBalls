const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property(cc.Prefab) prefabBall: cc.Prefab = null;
    @property(cc.Node) nodePlayer: cc.Node = null;

    public onLoad() {
        cc.director.getCollisionManager().enabled = true; //开启碰撞检测，默认为关闭

        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            const nodeBall = cc.instantiate(this.prefabBall);
            this.node.addChild(nodeBall);
            nodeBall.setPosition(this.nodePlayer.getPosition());
        });
    }
}