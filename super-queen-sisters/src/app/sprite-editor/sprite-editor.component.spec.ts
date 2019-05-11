import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpriteEditorComponent} from './sprite-editor.component';

describe('SpriteEditorComponent', () => {
    let component: SpriteEditorComponent;
    let fixture: ComponentFixture<SpriteEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpriteEditorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpriteEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
