import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpanddowneditmodalComponent } from './upanddowneditmodal.component';

describe('UpanddowneditmodalComponent', () => {
  let component: UpanddowneditmodalComponent;
  let fixture: ComponentFixture<UpanddowneditmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpanddowneditmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpanddowneditmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
