const {ccclass, property} = cc._decorator;

@ccclass
export default class Wall extends cc.Component {
    public onCollisionEnter() {
        alert('你输了');
    }
}
