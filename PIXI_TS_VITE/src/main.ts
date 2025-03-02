import * as PIXI from 'pixi.js';
import { GameSelctor } from './GameSelector';

let app: PIXI.Application<PIXI.Renderer>;
let gameSelctor: GameSelctor;

const htmlAppContainerElement = document.getElementById("appContainer");
const htmlAppElement = document.getElementById("app");

(async () =>
{
    if (!htmlAppElement) { return; }
    if (!htmlAppContainerElement) { return; }
    app = new PIXI.Application();
    globalThis.__PIXI_APP__ = app;

    await app.init({
        width: 500,
        height: 600,
        backgroundColor: "#CCCCCC",
        resizeTo: htmlAppContainerElement
    });

    if (htmlAppElement)
    {
        htmlAppElement.appendChild(app.canvas);
    }
    gameSelctor = new GameSelctor(app.stage);
    window.onresize = onresize;
    onresize();
})();

function onresize()
{
    if (!htmlAppElement) { return; }
    console.error(window.innerWidth);
    app.stage.x = (window.innerWidth - app.stage.width) / 2
}
