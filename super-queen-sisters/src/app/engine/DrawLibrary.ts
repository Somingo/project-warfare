export default class DrawLibrary {
    static roundedRect(ctx: CanvasRenderingContext2D, x1: number, y1: number, w: number, h: number, r = 5) {
        const x2 = x1 + w;
        const y2 = y1 + h;
        ctx.beginPath();
        ctx.moveTo(x2 - r, y1);
        ctx.arcTo(x2, y1, x2, y1 + r, r);
        ctx.lineTo(x2, y2 - r);
        ctx.arcTo(x2, y2, x2 - r, y2, r);
        ctx.lineTo(x1 + r, y2);
        ctx.arcTo(x1, y2, x1, y2 - r, r);
        ctx.lineTo(x1, y1 + r);
        ctx.arcTo(x1, y1, x1 + r, y1, r);
        ctx.closePath();
    }
}
