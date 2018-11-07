import {UpdateEvent} from '../UpdateEvent';

export abstract class Transformation {
    startTime: number;
    length: number;
    position: number;
    isPlaying: boolean = false;
    autoStop: boolean = true;

    start(){
        this.position = 0;
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }

    update(e: UpdateEvent): void{
        if (this.isPlaying) {
            this.position += e.deltaTime;
            this.transformation(e);
            if (this.position>=this.length && this.autoStop) {this.stop();}
        }
    }

    abstract transformation(e: UpdateEvent ): void;
}
