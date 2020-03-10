import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationandcontactdetailsComponent } from './locationandcontactdetails.component';

describe('LocationandcontactdetailsComponent', () => {
  let component: LocationandcontactdetailsComponent;
  let fixture: ComponentFixture<LocationandcontactdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationandcontactdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationandcontactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
