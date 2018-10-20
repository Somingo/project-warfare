import {Vector} from '../Vector';
import {Shape} from './Shape';

export class Point extends Vector implements Shape {
    getType(): string {
        return "Point";
    }

}