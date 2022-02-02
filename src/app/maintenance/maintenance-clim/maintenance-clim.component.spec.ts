import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceClimComponent } from './maintenance-clim.component';

describe('MaintenanceClimComponent', () => {
  let component: MaintenanceClimComponent;
  let fixture: ComponentFixture<MaintenanceClimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceClimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceClimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
