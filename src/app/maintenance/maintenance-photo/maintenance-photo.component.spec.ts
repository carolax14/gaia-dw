import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePhotoComponent } from './maintenance-photo.component';

describe('MaintenancePhotoComponent', () => {
  let component: MaintenancePhotoComponent;
  let fixture: ComponentFixture<MaintenancePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
