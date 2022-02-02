import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceEtape4Component } from './maintenance-etape4.component';

describe('MaintenanceEtape4Component', () => {
  let component: MaintenanceEtape4Component;
  let fixture: ComponentFixture<MaintenanceEtape4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceEtape4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceEtape4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
