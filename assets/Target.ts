const {ccclass, property} = cc._decorator;

@ccclass
export default class Target extends cc.Component {
    @property(cc.Label) labelCount: cc.Label = null;

    private count: number = 60;

    public onLoad() {
        this.labelCount.string = `${this.count}`;
    }

    public onCollisionEnter() {
        this.count--;
        this.labelCount.string = `${this.count}`;

        if (this.count <= 0) {
            alert('你赢了');
        }
    }
}
