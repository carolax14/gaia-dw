import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstucePilotageComponent } from './astuce-pilotage.component';

describe('AstucePilotageComponent', () => {
  let component: AstucePilotageComponent;
  let fixture: ComponentFixture<AstucePilotageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstucePilotageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstucePilotageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
