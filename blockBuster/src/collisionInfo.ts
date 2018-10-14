import Shape, {Shapes} from "./shape";
import Vector from "./vector";

type DetectorFn = (s1: Shape, s2: Shape) => boolean;

class Detector {
    s1: Shapes;
    s2: Shapes;
    fn: DetectorFn;
};
type VectorCalculatorFn = (s1: Shape, s2: Shape) => Vector;

class VectorCalculator {
    s1: Shapes;
    s2: Shapes;
    fn: VectorCalculatorFn;
};


export default class CollisionInfo {
    static collisionDetectors: Detector[] = [];
    static distantCalculators: VectorCalculator[] = [];

    private constructor() {
    }

    static hasCollosion(s1: Shape, s2: Shape): boolean {
        return CollisionInfo.collisionDetectors
            .filter(v => v.s1 === s1.getType() && v.s2 === s2.getType())[0].fn(s1, s2);
    }

    static distance(s1: Shape, s2: Shape): Vector {
        return CollisionInfo.distantCalculators
            .filter(v => v.s1 === s1.getType() && v.s2 === s2.getType())[0].fn(s1, s2);
    }
}