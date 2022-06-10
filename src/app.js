let app = new PIXI.Application({ width: 1280, height: 720 });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();

graphics.beginFill(0xFFFFFF);
graphics.drawRect(10, 10, 100, 100);
graphics.endFill();

app.stage.addChild(graphics);