import { Ball } from './game/ball.js'

// setup
let screen_width = 1280;
let screen_height = 720;

let renderer = new PIXI.Renderer({ width: screen_width, height: screen_height, backgroundColor: 0x1099bb });
document.body.appendChild(renderer.view);

let stage = new PIXI.Container();

let old_time = Date.now();

requestAnimationFrame(animate);
function animate() {

    let new_time = Date.now();
    let delta_time = new_time - old_time;

    old_time = new_time;
    if (delta_time < 0) delta_time = 0;
    if (delta_time > 1000) delta_time = 1000;
    let delta_frame = delta_time * 60 / 1000;

    // game update
    // 

    renderer.render(stage);

    requestAnimationFrame(animate);
}


let eball = new Ball(screen_width / 2, screen_height / 2, 10, 0xFFFFFF);
eball.draw();

stage.addChild(eball._graphics);