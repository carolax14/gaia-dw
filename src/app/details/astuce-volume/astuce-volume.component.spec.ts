import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstuceVolumeComponent } from './astuce-volume.component';

describe('AstuceVolumeComponent', () => {
  let component: AstuceVolumeComponent;
  let fixture: ComponentFixture<AstuceVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstuceVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstuceVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
