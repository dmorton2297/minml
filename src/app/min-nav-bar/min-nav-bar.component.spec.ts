import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinNavBarComponent } from './min-nav-bar.component';

describe('MinNavBarComponent', () => {
  let component: MinNavBarComponent;
  let fixture: ComponentFixture<MinNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
