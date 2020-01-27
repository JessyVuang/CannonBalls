const {ccclass, property} = cc._decorator;

@ccclass
export default class Obstacle extends cc.Component {
    public update() {
        this.node.angle += 3;
    }
}
