export class Ball {

    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.speedX = 4;
        this.speedY = 4;
        this._graphics = new PIXI.Graphics();
    }

    draw() {
        this._graphics.clear();
        this._graphics.beginFill(this.color);
        this._graphics.drawCircle(this.x, this.y, this.r);
        this._graphics.endFill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // TODO: Passar o valor do Width dinâmicamente. 
        if (this.x > 1280 || this.x < 0) {
            this.speedX *= -1;
        }
        // TODO: Passar o valor do Height dinâmicamente. 
        if (this.y > 720 || this.y < 0) {
            this.speedY *= -1;
        }
    }

    detectCollision(ball) {
        var dx = (this.x + this.r) - (ball.x + ball.r);
        var dy = (this.y + this.r) - (ball.y + ball.r);
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= this.r) {
            this.speedX *= -1;
            this.speedY *= -1;
            this.color = '0x' + String(Math.floor(Math.random() * 16777215).toString(16));
        }
    }

}