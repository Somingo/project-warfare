import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ImageDescriptor} from '../engine/sprites/ImageSprite';
import {SpriteSheetDescriptor} from '../engine/ImageSpriteSheet';

@Component({
    selector: 'app-sprite-editor',
    templateUrl: './sprite-editor.component.html',
    styleUrls: ['./sprite-editor.component.scss']
})
export class SpriteEditorComponent implements OnInit, AfterViewInit {

    @ViewChild('spriteCanvas') spriteCanvas: ElementRef;
    public spriteElement: HTMLCanvasElement;
    public spriteContext: CanvasRenderingContext2D;

    public imageList = [];
    public size = 70;
    public spritePNG: SafeUrl;
    public spriteJSON: SafeUrl;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    onInputChange(event: Event) {
        const input = event.target as HTMLInputElement;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < input.files.length; i++) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.src = reader.result as string;
                this.imageList.push({name: input.files[i].name, url: reader.result, image: img});
            };
            reader.readAsDataURL(input.files[i]);
        }
    }

    ngAfterViewInit(): void {
        this.spriteElement = (this.spriteCanvas.nativeElement as HTMLCanvasElement);
        this.spriteElement.width = 0;
        this.spriteElement.height = 0;
        this.spriteContext = this.spriteElement.getContext('2d');
    }

    save() {
        const spriteSheet: SpriteSheetDescriptor = {imageDescriptors: {}, name: 'spriteName', imageUrl: 'url'};


        this.spriteElement.width = this.imageList.length * this.size;
        this.spriteElement.height = this.size;
        this.spriteContext.clearRect(0, 0, this.spriteElement.width, this.spriteElement.height);

        this.imageList.forEach((image, index) => {
            const desc: ImageDescriptor = {offsetX: index * this.size, offsetY: 0, width: this.size, height: this.size};
            const spriteName = (image.name as string).replace('.png', '');
            spriteSheet.imageDescriptors[spriteName] = desc;
            this.spriteContext.drawImage(image.image, desc.offsetX, desc.offsetY, desc.width, desc.height);
        });

        this.spritePNG = this.sanitizer.bypassSecurityTrustUrl(this.spriteElement.toDataURL('image/png'));
        this.spriteJSON = this.sanitizer.bypassSecurityTrustUrl('data:text/json,' + JSON.stringify(spriteSheet));
    }
}
