import {Sprite} from './Sprite';
import {UpdateEvent} from './UpdateEvent';
import {Vector} from './Vector';
import {TextBaseLine} from './TextBaseLine';
import {TextAlign} from './TextAlign';

export class DisplayText implements Sprite {

    position: Vector = new Vector(0, 0);
    color: string = '#fff';
    protected _font: string = '';
    text: string = '';
    align: TextAlign = TextAlign.CENTER;
    baseLine: TextBaseLine = TextBaseLine.MIDDLE;
    private _fontFace: string = 'spaceFont';
    private _fontSize: number = 11;

    get fontFace(): string {
        return this._fontFace;
    }

    get fontSize(): number {
        return this._fontSize;
    }

    setColor(color:string):DisplayText {
        this.color = color;
        return this;
    }

    setPosition(pos:Vector):DisplayText {
        this.position = pos;
        return this;
    }

    setBaseLine(value: TextBaseLine): DisplayText {
        this.baseLine = value;
        return this;
    }

    setText(text: string): DisplayText {
        this.text = text;
        return this;
    }

    setAlign(align: TextAlign): DisplayText {
        this.align = align;
        return this;
    }

    setFontFace(value: string): DisplayText {
        this._fontFace = value;
        this._font = `${this._fontSize}px ${this._fontFace}`;
        return this;
    }

    setFontSize(value: number): DisplayText {
        this._fontSize = value;
        this._font = `${this._fontSize}px ${this._fontFace}`;
        return this;
    }


    draw(ctx: CanvasRenderingContext2D): void {
        ctx.textBaseline = this.baseLine;
        ctx.font = this._font;
        ctx.fillStyle = this.color;
        const width = ctx.measureText(this.text).width;
        let x = this.position.x;
        if (this.align === TextAlign.CENTER) x -= width / 2;
        if (this.align === TextAlign.RIGHT) x -= width;
        ctx.fillText(this.text, x, this.position.y);
    }

    init(): void {
        this.setFontSize(this.fontSize);
    }

    update(e: UpdateEvent): void {
    }

}