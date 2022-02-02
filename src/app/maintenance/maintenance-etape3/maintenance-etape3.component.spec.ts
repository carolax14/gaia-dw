import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceEtape3Component } from './maintenance-etape3.component';

describe('MaintenanceEtape3Component', () => {
  let component: MaintenanceEtape3Component;
  let fixture: ComponentFixture<MaintenanceEtape3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceEtape3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceEtape3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
