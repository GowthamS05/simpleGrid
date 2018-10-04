import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTransComponent } from './wallet-trans.component';

describe('WalletTransComponent', () => {
  let component: WalletTransComponent;
  let fixture: ComponentFixture<WalletTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
