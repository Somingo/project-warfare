import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolBarButtonComponent} from './tool-bar-button.component';

describe('ToolBarButtonComponent', () => {
    let component: ToolBarButtonComponent;
    let fixture: ComponentFixture<ToolBarButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ToolBarButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolBarButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
