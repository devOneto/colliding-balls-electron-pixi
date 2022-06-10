export class Ball {

    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this._graphics = new PIXI.Graphics();
    }

    draw() {
        console.log('desenhou')
        this._graphics.beginFill(this.color);
        this._graphics.drawCircle(this.x, this.y, this.r);
        this._graphics.endFill();
    }

    update() {

    }

}