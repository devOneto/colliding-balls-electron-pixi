import { Ball } from './game/ball.js'

// setup
let screen_width = 1280;
let screen_height = 720;

let app = new PIXI.Application({ width: screen_width, height: screen_height });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFFFF);
graphics.drawRect(10, 10, 100, 100);
graphics.endFill();

let eball = new Ball(screen_width / 2, screen_height / 2, 10, 0xFFFFFF);
eball.draw();

app.stage.addChild(eball._graphics, graphics);