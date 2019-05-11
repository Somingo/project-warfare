import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolBarSeparatorComponent} from './tool-bar-separator.component';

describe('ToolBarSeparatorComponent', () => {
    let component: ToolBarSeparatorComponent;
    let fixture: ComponentFixture<ToolBarSeparatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ToolBarSeparatorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolBarSeparatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
