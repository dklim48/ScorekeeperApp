import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpandowntrickscontentComponent } from './upandowntrickscontent.component';

describe('UpandowntrickscontentComponent', () => {
  let component: UpandowntrickscontentComponent;
  let fixture: ComponentFixture<UpandowntrickscontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpandowntrickscontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpandowntrickscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
