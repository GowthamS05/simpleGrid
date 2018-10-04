import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyandUnpaidComponent } from './emptyand-unpaid.component';

describe('EmptyandUnpaidComponent', () => {
  let component: EmptyandUnpaidComponent;
  let fixture: ComponentFixture<EmptyandUnpaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyandUnpaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyandUnpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
