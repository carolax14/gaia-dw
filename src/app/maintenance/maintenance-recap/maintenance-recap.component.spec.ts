import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceRecapComponent } from './maintenance-recap.component';

describe('MaintenanceRecapComponent', () => {
  let component: MaintenanceRecapComponent;
  let fixture: ComponentFixture<MaintenanceRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
