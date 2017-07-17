import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpanddownComponent } from './upanddown.component';

describe('UpanddownComponent', () => {
  let component: UpanddownComponent;
  let fixture: ComponentFixture<UpanddownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpanddownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpanddownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
