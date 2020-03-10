import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroucherComponent } from './broucher.component';

describe('BroucherComponent', () => {
  let component: BroucherComponent;
  let fixture: ComponentFixture<BroucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
