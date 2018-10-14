import Rectangle from "./rectangle";
import Vector from "./vector";

export enum Shapes {
    RECTANGULAR, CIRCLEID
}

export default interface Shape {
    bounds: Rectangle;
    anchor: Vector;

    getType(): Shapes;
}
