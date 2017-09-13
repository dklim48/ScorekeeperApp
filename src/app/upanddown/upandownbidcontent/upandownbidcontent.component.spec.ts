import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpandownbidcontentComponent } from './upandownbidcontent.component';

describe('UpandownbidcontentComponent', () => {
  let component: UpandownbidcontentComponent;
  let fixture: ComponentFixture<UpandownbidcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpandownbidcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpandownbidcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
