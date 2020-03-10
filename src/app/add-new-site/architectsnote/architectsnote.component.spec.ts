import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsnoteComponent } from './architectsnote.component';

describe('ArchitectsnoteComponent', () => {
  let component: ArchitectsnoteComponent;
  let fixture: ComponentFixture<ArchitectsnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectsnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectsnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
