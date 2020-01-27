const {ccclass, property} = cc._decorator;

@ccclass
export default class Ball extends cc.Component {
    public update() {
        this.node.y += 10;
    }

    public onCollisionEnter() {
        this.node.destroy();
    }
}
