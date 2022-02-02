import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBorneComponent } from './maintenance-borne.component';

describe('MaintenanceBorneComponent', () => {
  let component: MaintenanceBorneComponent;
  let fixture: ComponentFixture<MaintenanceBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceBorneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
