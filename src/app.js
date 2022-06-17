import { Ball } from './game/ball.js'
import { Background } from './game/background.js';

// setup
let screen_width = 1280;
let screen_height = 720;

let app = new PIXI.Application({ width: screen_width, height: screen_height, clearBeforeRender: true });

document.body.appendChild(app.view);

let background = new Background(0, 0, screen_width, screen_height, 0x933047);
let eball = new Ball(screen_width / 2 + 20, screen_height / 2, 10, 0x42f595);
let eball2 = new Ball(screen_width / 2 - 20, screen_height / 2, 10, 0xFFFFFF);
eball2.speedX = -10;

app.ticker.add(delta => game(delta));

app.stage.addChild(background._graphics, eball._graphics, eball2._graphics);

function game(delta) {
    // update
    eball.update();
    eball2.update();
    // collision detection <- horrible...
    eball.detectCollision(eball2);
    //draw
    eball.draw();
    eball2.draw();

    background.draw();
}

