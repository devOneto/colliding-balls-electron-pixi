import { Ball } from './game/ball.js'
import { Background } from './game/background.js';
import { rndInt } from "./shared/util.js";

// setup
let screen_width = 1280;
let screen_height = 720;

let app = new PIXI.Application({ width: screen_width, height: screen_height, clearBeforeRender: true });

document.body.appendChild(app.view);

let background = new Background(0, 0, screen_width, screen_height, 'black');

app.stage.addChild(background._graphics);

let balls = [];
const ballsQuantity = 500;
for (let i = 0; i < ballsQuantity; i++) {
    var initialColor = 'white';
    let randomX = rndInt(0, screen_width);
    let randomY = rndInt(0, screen_height);
    let newBall = new Ball(randomX, randomY, 10, initialColor);
    newBall.speedX = rndInt(-2, 2);
    newBall.speedY = rndInt(-2, 2);
    balls[i] = newBall;
    app.stage.addChild(newBall._graphics);
}

app.ticker.add(delta => game(delta));


function game(delta) {
    // update
    for (let i = 0; i < ballsQuantity; i++) {
        balls[i].update();
    }

    // collision detection <- horrible... 
    for (let i = 0; i < ballsQuantity; i++) {
        for (let j = ballsQuantity - 1; j > -1; j--) {
            if (i != j) {
                balls[i].detectCollision(balls[j]);
            }
        }
    }

    //draw
    for (let i = 0; i < ballsQuantity; i++) {
        balls[i].draw();
    }

    background.draw();
}

