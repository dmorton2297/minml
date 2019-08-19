import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinFormComponent } from './min-form.component';

describe('MinFormComponent', () => {
  let component: MinFormComponent;
  let fixture: ComponentFixture<MinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
