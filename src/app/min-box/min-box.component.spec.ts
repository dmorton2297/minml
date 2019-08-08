import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinBoxComponent } from './min-box.component';

describe('MinBoxComponent', () => {
  let component: MinBoxComponent;
  let fixture: ComponentFixture<MinBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
