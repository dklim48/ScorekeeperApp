import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpanddownmodalComponent } from './upanddownmodal.component';

describe('UpanddownmodalComponent', () => {
  let component: UpanddownmodalComponent;
  let fixture: ComponentFixture<UpanddownmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpanddownmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpanddownmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
