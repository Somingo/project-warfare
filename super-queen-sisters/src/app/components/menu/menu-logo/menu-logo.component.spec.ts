import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogoComponent } from './menu-logo.component';

describe('MenuLogoComponent', () => {
  let component: MenuLogoComponent;
  let fixture: ComponentFixture<MenuLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
