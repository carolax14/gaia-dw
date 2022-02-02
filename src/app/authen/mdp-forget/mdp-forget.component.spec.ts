import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpForgetComponent } from './mdp-forget.component';

describe('MdpForgetComponent', () => {
  let component: MdpForgetComponent;
  let fixture: ComponentFixture<MdpForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdpForgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdpForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
