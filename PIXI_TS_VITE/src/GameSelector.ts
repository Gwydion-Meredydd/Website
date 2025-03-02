import * as PIXI from 'pixi.js';
export class GameSelctor
{
    private _spinButtonGraphic: PIXI.Sprite | undefined;

    public constructor(public readonly parent: PIXI.Container<PIXI.ContainerChild>)
    {
        this.createComponents();
    }

    public apply()
    {
        //this.setSpinButtonPosition();
    }

    private createComponents()
    {
        this.createSelectorBackdrop();
        this.createSpinButton();
    }

    private createSelectorBackdrop()
    {
        const rectangle = PIXI.Sprite.from(PIXI.Texture.WHITE);
        rectangle.width = 600;
        rectangle.height = 200;
        rectangle.tint = 0xFF0000;

        this.parent.addChild(rectangle);
    }

    private async createSpinButton()
    {
        const spinSVG = await PIXI.Assets.load({ src: '/spin.png', format: 'png' });;

        this._spinButtonGraphic = new PIXI.Sprite(spinSVG);

        this.parent.addChild(this._spinButtonGraphic);
        this.setSpinButtonPosition();
    }

    private setSpinButtonPosition()
    {
        if (this._spinButtonGraphic instanceof PIXI.Sprite)
        {
            console.error(this.parent.width);
            const bounds = this._spinButtonGraphic.getLocalBounds();
            this._spinButtonGraphic.pivot.set((bounds.x + bounds.width) / 2, (bounds.y + bounds.height) / 2);

            this._spinButtonGraphic.position.set(this.parent.width / 2, this.parent.height / 2);
        }
    }
}