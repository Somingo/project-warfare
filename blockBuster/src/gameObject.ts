export default interface GameObject {

    update(deltaTime: number);

    draw(ctx: CanvasRenderingContext2D);
}
