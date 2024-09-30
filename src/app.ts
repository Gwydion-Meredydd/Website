import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
declare global
{
    interface GlobalThis
    {
        __PIXI_APP__: any;
    }
}

export { };

(globalThis as any).__PIXI_APP__ = app;


(async () =>
{
    await app.init({
        background: '#f0f8ff',
        resizeTo: window
    });
    document.body.appendChild(app.canvas);
})()
