import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceChauffeEauComponent } from './maintenance-chauffe-eau.component';

describe('MaintenanceChauffeEauComponent', () => {
  let component: MaintenanceChauffeEauComponent;
  let fixture: ComponentFixture<MaintenanceChauffeEauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceChauffeEauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceChauffeEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
