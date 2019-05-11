import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {Vector} from '../Vector';
import {TextBaseLine} from './TextBaseLine';
import {TextAlign} from './TextAlign';

export class DisplayText implements Sprite {

    position: Vector = new Vector(0, 0);
    color = '#fff';
    text = '';
    align: TextAlign = TextAlign.CENTER;
    baseLine: TextBaseLine = TextBaseLine.MIDDLE;
    protected fontPrivate = '';

    private fontFacePrivate = 'spaceFont';

    get fontFace(): string {
        return this.fontFacePrivate;
    }

    private fontSizePrivate = 11;

    get fontSize(): number {
        return this.fontSizePrivate;
    }

    setColor(color: string): DisplayText {
        this.color = color;
        return this;
    }

    setPosition(pos: Vector): DisplayText {
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
        this.fontFacePrivate = value;
        this.fontPrivate = `${this.fontSizePrivate}px ${this.fontFacePrivate}`;
        return this;
    }

    setFontSize(value: number): DisplayText {
        this.fontSizePrivate = value;
        this.fontPrivate = `${this.fontSizePrivate}px ${this.fontFacePrivate}`;
        return this;
    }


    draw(ctx: CanvasRenderingContext2D): void {
        ctx.textBaseline = this.baseLine;
        ctx.font = this.fontPrivate;
        ctx.fillStyle = this.color;
        const width = ctx.measureText(this.text).width;
        let x = this.position.x;
        if (this.align === TextAlign.CENTER) {
            x -= width / 2;
        }
        if (this.align === TextAlign.RIGHT) {
            x -= width;
        }
        ctx.fillText(this.text, x, this.position.y);
    }

    init(): void {
        this.setFontSize(this.fontSize);
    }

    update(e: UpdateEvent): void {
    }

}
