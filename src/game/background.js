export class Background {

    constructor(x, y, width, height, color) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
        this._graphics = new PIXI.Graphics();
        this._container = new PIXI.Container();
    }

    draw() {
        this._graphics.clear();
        this._graphics.beginFill(this._color);
        this._graphics.drawRect(this._x, this._y, this._width, this._height);
        this._graphics.endFill();
    }

}