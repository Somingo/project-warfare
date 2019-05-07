import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarInputComponent } from './tool-bar-input.component';

describe('ToolBarInputComponent', () => {
  let component: ToolBarInputComponent;
  let fixture: ComponentFixture<ToolBarInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
