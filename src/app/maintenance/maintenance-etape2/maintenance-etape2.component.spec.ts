import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceEtape2Component } from './maintenance-etape2.component';

describe('MaintenanceEtape2Component', () => {
  let component: MaintenanceEtape2Component;
  let fixture: ComponentFixture<MaintenanceEtape2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceEtape2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
