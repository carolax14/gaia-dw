import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceEnvoieComponent } from './maintenance-envoie.component';

describe('MaintenanceEnvoieComponent', () => {
  let component: MaintenanceEnvoieComponent;
  let fixture: ComponentFixture<MaintenanceEnvoieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceEnvoieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceEnvoieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
