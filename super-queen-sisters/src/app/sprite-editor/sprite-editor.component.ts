import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-sprite-editor',
  templateUrl: './sprite-editor.component.html',
  styleUrls: ['./sprite-editor.component.scss']
})
export class SpriteEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('spriteCanvas') spriteCanvas: ElementRef;
  public spriteElement: HTMLCanvasElement;
  public spriteContext: CanvasRenderingContext2D;

  @ViewChild('images') imagesDiv: ElementRef;
  public imagesElement: HTMLDivElement;

  public imageList = [];
  public size = 70;
  public spritePNG: SafeUrl;
  public spriteJSON: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  onInputChange(event: Event) {
    const input = <HTMLInputElement>event.target;
    for (let i = 0; i < input.files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageList.push(reader.result);
      };
      reader.readAsDataURL(input.files[i]);
    }
  }

  ngAfterViewInit(): void {
    this.imagesElement = (<HTMLDivElement>this.imagesDiv.nativeElement);
    this.spriteElement = (<HTMLCanvasElement>this.spriteCanvas.nativeElement);
    this.spriteElement.width = 0;
    this.spriteElement.height = 0;
    this.spriteContext = this.spriteElement.getContext('2d');
  }

  save() {
    let spriteSheet = [];


    this.spriteElement.width = this.imagesElement.clientWidth;
    this.spriteElement.height = this.imagesElement.clientHeight;
    this.spriteContext.clearRect(0, 0, this.imagesElement.clientWidth, this.imagesElement.clientHeight);

    this.imagesElement.childNodes.forEach(j => {
        if (j.nodeName == 'IMG') {
          const i = <HTMLImageElement>j;
          const x = {
            x: i.offsetLeft,
            y: i.offsetTop,
            w: i.width,
            h: i.height,
            n: i.src
          };
          spriteSheet.push(x);
          const img = new Image;
          img.width = this.size;
          img.height = this.size;
          img.onload = () => {
            console.log('Done.');
            this.spriteContext.drawImage(img, i.offsetLeft, i.offsetTop, this.size, this.size); // Or at whatever offset you like
            this.spritePNG = this.sanitizer.bypassSecurityTrustUrl(this.spriteElement.toDataURL('image/png'));
          };
          img.onerror = () => {
            console.error('Error.');
          };
          img.src = i.src;
        }
      }
    );

    this.spriteJSON = this.sanitizer.bypassSecurityTrustUrl('data:text/json,' + JSON.stringify(spriteSheet));
  }
}
