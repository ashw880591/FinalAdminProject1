import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterplanComponent } from './masterplan.component';

describe('MasterplanComponent', () => {
  let component: MasterplanComponent;
  let fixture: ComponentFixture<MasterplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
