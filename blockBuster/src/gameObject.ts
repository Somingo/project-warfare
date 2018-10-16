export default interface GameObject {

    update(deltaTime: number, keyMap: { [key: number]: boolean });

    draw(ctx: CanvasRenderingContext2D);
}
